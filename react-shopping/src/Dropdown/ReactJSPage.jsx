import React, { useState } from 'react';

const ReactJsPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation here...

    alert(`You entered: ${inputValue}`);
  };

  return (
    <div>
      <h1>C++ Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a value:
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactJsPage;
