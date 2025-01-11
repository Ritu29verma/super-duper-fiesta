import React, { useState } from 'react';
import axios from 'axios';
function Create() {
  const [inputValue, setInputValue] = useState();

  const addTodo = () => {
    axios.post(`${import.meta.env.VITE_BASE_URL}/api/v1/todos`, { task : inputValue })
    .then(result => location.reload())
    .catch(error => console.error(error));
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        className="w-full px-3 py-2 border text-black border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter a new todo"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button
        type="button"
        onClick={addTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Add
      </button>
    </div>
  );
}

export default Create;
