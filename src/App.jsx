
import './App.css'
import TodoLIst from './components/TodoList'
import { useState, useRef } from 'react'

function App() {
 const [todos, setTodos] = useState([]);
 const inputRef = useRef(null);

 const addTodo = () => { 
  
  const data = inputRef.current?.value?.trim();

   
   if(!data) return;

  const todo = {
    text: data,
    id: Date.now(),
    isCompleted: false
  }

  setTodos([ ...todos, todo ]);
  inputRef.current.value = '';
  
 }

//  const deleteTodo = (id) => {
//    setTodos((prev) => {
//     return prev.filter((value) =>  value.id !== id);
//    })
//  }

 const handleTodo = (id, type, newData = null) => {

  if(typeof newData !== "boolean" && newData?.trim() === "") return;

  setTodos((prev) => {

    if (type === "delete") {
      return prev.filter((value) =>  value.id !== id);
    }
  
    return prev.map((value) => {
      if(value.id === id) {
        if (type === "save") {
          value.text = newData;
        }

        if (type === "toggle") {
          value.isCompleted = !value.isCompleted;
        }
       }

       return value;
    })
  })


 }



  return (
    <>
       <div className='h-screen w-screen flex justify-center items-center bg-slate-400 flex-col'> 
         <div className='flex gap-2'>
          <input type="text" className='h-10 w-96 border-none outline-none rounded-lg px-3 text-black font-semibold' ref={inputRef} />
          <button className='bg-green-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full' onClick={addTodo}>Add</button>
         </div>
         <div className='h-96 w-[400px] bg-slate-600 mt-4 rounded-lg'>
           {
            todos.map((value, index) => {
              return <TodoLIst value={value} key={index} handleTodo={handleTodo}/>
            })
           }
         </div>
       </div>
    </>
  )
}

export default App
