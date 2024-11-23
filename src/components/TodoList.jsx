import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoLIst = ({value, handleTodo}) => {
     // eslint-disable-next-line react/prop-types
    const { text, id, isCompleted } = value;
    const [isEdit, setIsEdit] = useState(false);
    const [textVal, setText] = useState(text);

    const handleUpdate = (type) => {
        if (type === "edit") {
            setIsEdit(true);
            setText(text);
        }

        if (type === "save") {
            handleTodo(id, type, textVal);
            setText("");
            setIsEdit(false);
        }
    }
    
    return(
        <div className="flex gap-x-1 px-2 mt-2 justify-between items-center">
            <div>
                <input type="checkbox" onChange={(e) => handleTodo(id, "toggle", e.target.value)} checked={isCompleted} className="text-[#eee] h-5 w-5 border border-slate-300" name="todo" id="todo" />
            </div>
            {isEdit ? (
                    <input type="text" onChange={(e) => setText(e.target.value)}  value={textVal} className="text-black rounded-lg h-9 px-2 font-semibold w-4/5"/>
            ):(
                <div className="p-2 text-white border border-slate-300 w-4/5 rounded-lg">{text}</div>
            )}

            <div className="flex items-center gap-2">
            <button onClick={() => handleUpdate(isEdit ? "save" : "edit")} className="bg-slate-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">{isEdit ? (
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
            )}

            </button>
            <button onClick={() => handleTodo(id, "delete")} className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </button>
            </div>
        </div>
    )
}

export default TodoLIst