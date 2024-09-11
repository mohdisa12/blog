import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

function Register() {
    const [data, setData]= useState({
        username: '',
        email: '',
        password: ''
    });
   
    const navigate = useNavigate();
    const handleChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

      console.log(data);

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Data to be sent:", data);
        try {
          await axios.post("http://localhost:3000/register", data);
          navigate("/login");
        } catch (err) {
          console.log(err.response.data);
        }
      };

  return (
    <>
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>

        <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" type="text" id="username" placeholder="Enter your username" name="username" onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Email
                </label>
                <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" type="email" id="email" placeholder="Enter your email" name="email" onChange={handleChange} />
                
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300" type="password" id="password" placeholder="Enter your password" name="password" onChange={handleChange}/>
            </div>

            <div className="flex items-center justify-between mt-2">
                <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-300 hover:bg-indigo-600" type="submit" >
                    Register
                </button>

                <a className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-600" href="#">
                    Do have account?<span className='text-indigo-800'><Link to='/login'> login</Link></span> 
                </a>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Register;