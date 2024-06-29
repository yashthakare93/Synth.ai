function ErrorMessage({ errorMessage }) {
    return (
      <div>
        <h2>Error:</h2>
        <pre>{errorMessage}</pre>
      </div>
    );
  }
  
  export default ErrorMessage;