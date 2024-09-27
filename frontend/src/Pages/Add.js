import React from 'react';
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';
function Add() {
  return (
    <div className='flex h-[98vh] gap-4'>
      <div className='w-1/6 border border-gray-500 rounded-xl p-4 flex justify-between flex-col'>
        <Sidebar/>
      </div>
      <div className='w-5/6 border border-gray-500 rounded-xl p-4'>
       <Outlet />
      </div>
    </div>
  );
}
export default Add;





