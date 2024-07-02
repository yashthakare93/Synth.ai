import React, { useState, useRef ,useEffect} from 'react';
import axios from 'axios';
import Input from '../Components/Input';
import HistoryList from '../Components/HistoryList';
import ErrorMessage from '../Components/ErrorMessage';
import ButtonGroup from '../Components/ButtonGroup';
import LoaderExampleInlineCentered from '../Components/LoaderExampleInlineCentered'; // Import corrected

function Main() {
  const [history, setHistory] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const historyRef = useRef(null);
  const [showButtons, setShowButtons] = useState(true);
  const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const creatorQuestions = [
    "who made you",
    "who is your creator",
    "who built you",
    "you are built by whom",
    "who created you",
    "who build you"
  ];

  const generateAnswer = async (question) => {
    const lowerCaseQuestion = question.toLowerCase();
    const isCreatorQuestion = creatorQuestions.some(keyword => lowerCaseQuestion.includes(keyword));

    setLoading(true); 
    setShowButtons(false);

    if (isCreatorQuestion) {
      const customAnswer = "I was created by Yash Thakare using the Gemini API.";
      setHistory(prevHistory => [...prevHistory, { question, answer: customAnswer }]);
      setLoading(false); // Stop loading
      return;
    }

    const data = {
      contents: [
        {
          parts: [
            { text: question }
          ]
        }
      ]
    };

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${googleApiKey}`,
        data,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const answer = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No content found';
      setHistory(prevHistory => [...prevHistory, { question, answer }]);
      setErrorMessage(null);
      scrollToBottom();
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error.message || 'An error occurred');
      } else if (error.request) {
        setErrorMessage('No response received from the server');
      } else {
        setErrorMessage(error.message);
      }
    } finally {
      setLoading(false); // Stop loading
      setShowButtons(false);
    }
  };

  const scrollToBottom = () => {
    historyRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom(); 
  }, [history]);

  const handleButtonClick = (question) => {
    generateAnswer(question);
  };

  const buttons = [
    [
      { label: 'How do dreams reflect subconscious thoughts', question: "How do dreams reflect subconscious thoughts?" },
      { label: 'Create a personal webpage', question: "Create a personal webpage for me, all in a single file. Ask me 3 questions first on whatever you need to know." },
      { label: 'Create a workout plan for me', question: "I need to start resistance training. Can you create a 7-day workout plan for me to ease into it?" }
    ],
    [
      { label: 'Thank my Interviewer', question: "Write 2-3 sentences to thank my interviewer, reiterating my excitement for the job opportunity while keeping it cool. Don't make it too formal." },
      { label: 'What role does data structures play', question: "What role does data structures play" },
      { label: 'What motivates people to take risks', question: "What motivates people to take risks" },
      { label: 'Plan a low-carb meal', question: "Plan a low-carb meal with what's available in my fridge" }
    ],
    [
      { label: 'Effects of social media on self-esteem', question: "Effects of social media on self-esteem" },
      { label: 'Does every decision shape our future', question: "Does every decision shape our future" },
      { label: 'Benefits of mindfulness and meditation', question: "Benefits of mindfulness and meditation" }
    ]
  ];

  return (
    <div className='flex flex-col h-screen bg-white '>
      <div className='flex '>
        <HistoryList history={history} />
        {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
        {/* Render loader if loading */}
       
       
      </div>
      <div className='flex h-screen items-center justify-center pb-36'>
        {showButtons && (
          <ButtonGroup buttons={buttons} handleButtonClick={handleButtonClick} />
        )}
      <div className='flex justify-center items-center '>{loading && <LoaderExampleInlineCentered />}</div>
    
      </div>

      <div className='fixed bottom-0 left-0 w-full px-4'>
        <div className='mx-auto p-4 bg-gray-100 rounded-full mb-4 lg:w-900c lg:mb-10 px-2'>
          <Input onGenerateAnswer={generateAnswer} loading={loading} /> 
        </div>
      </div>
      <div ref={historyRef}></div>
    </div>
  );
}

export default Main;
