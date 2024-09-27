import React from 'react';
import { CgNotes } from "react-icons/cg";
import { FaCheckDouble } from "react-icons/fa";
import { MdIncompleteCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
function Sidebar() {
  const data=[
    { title:"All task", icon:<CgNotes />,link:"/Alltask"},
    { title:"Completed task", icon:<FaCheckDouble />,link:"/Completedtask"},
    { title:"Incompleted task", icon:<MdIncompleteCircle />,link:"/Incompletedtask"},
  ]
  return (
    <>
      <div>
      <h1 className='text-xl font-semibold'>WORK SYNC</h1>
      <h1 className='mb-2 text-gray-400'>worksync@gmail.com</h1>
      <hr />
      </div>
      <div>
       {data.map((iteams,i)=>(
        <Link to={iteams.link} key={i} 
        className='my-2 flex hover:bg-black-700 p-2 rounded items-center transition-all duration-300 text-xl'>{iteams.icon} &nbsp; {iteams.title}</Link>
       ))}
      </div>
      <div><button className='bg-red-700 w-full p-2 rounded'></button></div>
    </>
  );
}

export default Sidebar;
