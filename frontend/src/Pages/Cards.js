import React from "react";  
import { MdEdit, MdDeleteOutline } from "react-icons/md";  
import { IoMdAddCircleOutline } from "react-icons/io";

const Cards = ({ tasks, onDelete, onEdit ,onAdd}) => {  
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {tasks.map((item, i) => (
        <div key={i} className="flex flex-col justify-between bg-gray-800 rounded-xl p-4">
          <div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-300 my-2">{item.description}</p>
          </div>
          <div className="mt-4 flex items-center">
            <button className={`${item.status === "incomplete" ? "bg-red-700" : "bg-green-700"} p-2 rounded w-3/6`}>
              {item.status}
            </button>
            <div className="text-white p-2 w-3/6 text-2xl flex justify-around">
              <button onClick={() => onEdit(item)}><MdEdit /></button>
              <button onClick={() => onDelete(item.id)}><MdDeleteOutline /></button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-col justify-center items-center bg-gray-800 rounded-xl p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition-all duration-300" onClick={onAdd}>
        <IoMdAddCircleOutline className="text-5xl" />
        <h2 className="text-2xl mt-4"> Add Task {onAdd} </h2>
      </div>
    </div>
  );  
};

export default Cards;
