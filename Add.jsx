import React,{useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Add() {
  const [value, setValue] = useState('');
  return (
    <>
    <div className='w-full min-h-screen flex justify-center items-center'>
      <div className='w-full max-w-lg bg-gray-100 flex flex-col items-center rounded-lg shadow-lg p-6'>
        <h1 className='text-2xl font-bold text-center'>Add</h1>
        <form className='flex flex-col items-center gap-2'>
          <input className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300' type="text" value="" />
          <ReactQuill theme="snow" value={value} onChange={setValue} />
          <input type='file' value="" />
          <label for="exampleSelect">Choose an option:</label>
           <select id="exampleSelect">
              <option value="1">ART</option>
              <option value="2">Science</option>
              <option value="3">Technology</option>
              <option value="4">Cinema</option>
              <option value="5">Design</option>
              <option value="6">Food</option>
            </select>
        </form>


      </div>
    </div>
    </>
  )
}

export default Add