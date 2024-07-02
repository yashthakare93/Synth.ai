import React from 'react';
import TypingEffect from './TypingEffect';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';



function Response({ question, answer }) {
    const typingText = TypingEffect(answer, 5);

    return (
        <div className='break-words max-w-full p-4'>
            <h2 className='font-semibold text-lg text-gray-700'>You</h2>
            <pre className='whitespace-pre-wrap text-gray-600 mb-4'>{question}</pre>
            <h2 className='font-semibold text-lg text-gray-700'>Verse AI</h2>
            <div className='whitespace-pre-wrap text-gray-600'>
                <ReactMarkdown
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            return !inline && match ? (
                                <div style={{ paddingBottom: '1rem' }}>
                                    <SyntaxHighlighter
                                        style={vscDarkPlus}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                </div>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        }
                    }}
                >
                    {typingText}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default Response;
