import React, { useEffect, useState } from 'react';
import Create from '../components/Create';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
function Homepage() {
  const [todos, setTodos] = useState([]);
  useEffect ( () => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/get`)
    .then( result => setTodos(result.data) )
    .catch (err => console.log(err))
   } , [] )

   const handleEdit = (id,currentStatus) => {
    axios.put(`${import.meta.env.VITE_BASE_URL}/api/v1/update/` +id)
    .then( result =>   {
        setTodos(todos.map(todo => 
          todo._id === id ? { ...todo, completed: !currentStatus } : todo
        ));
      })
    .catch (err => console.log(err))
   }

   const handleDelete = (id) => {
    axios.delete(`${import.meta.env.VITE_BASE_URL}/api/v1/delete/` +id)
    .then( result =>  setTodos(todos.filter(todo => todo._id !== id)))
    .catch (err => console.log(err))
   }


  return (
   <div>
     <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-10">
      <h2 className="text-3xl font-bold mb-8">Todo App</h2>

      <div className="w-full max-w-md">
        <Create setTodos={setTodos} />
        <div className="mt-6 bg-white text-black p-4 rounded shadow-lg w-full">
          {todos.length === 0 ? (
            <div className="text-center text-gray-500">No Records</div>
          ) : (
            todos.map( todo => (
              <div
              key={todo._id} 
                className="bg-gray-100 p-3 my-2 rounded shadow-sm flex justify-between" >  
               <div className='flex justify-start cursor-pointer'
               onClick={ () => handleEdit(todo._id , todo.completed)}>
                {todo.completed ? <IoIosCheckmarkCircle  className='m-1'/> :  <FaCircle className='m-1'/> }
              
               <p className= {todo.completed ? 'line-through' : " "}>{todo.task}</p>
               </div>
               <div className='cursor-pointer' onClick={ () => handleDelete(todo._id)}>  <MdDelete className=' size-6'/> </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
   </div>
  );
}

export default Homepage;
