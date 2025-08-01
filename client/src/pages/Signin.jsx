import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';


// Importing necessary libraries and hooks from React and React Router
export default function Signin() {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state) => state.user);
  const Navigate = useNavigate();//useNavigate is a hook that allows you to navigate to different routes in your application
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  }
console.log(formData);
const handleSubmit = async(e) => {
  e.preventDefault();//this prevents refreshing the page when the form is submitted
  try {
    dispatch(signInStart());
  const res =await fetch('/api/auth/signin',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }); 
  const data = await res.json();
   console.log(data);
  if(data.success === false){
    dispatch(signInFailure(data.message));   
    return;
  }
  dispatch(signInSuccess(data));
  Navigate('/');//this will redirect the user to the sign-in page after successful signup
  } catch (error) {
    dispatch(signInFailure(error.message));  
  }
  };

    
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit ={handleSubmit} className='flex flex-col gap-4 '>
         <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
          <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
          <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disables:opacity-80'>{loading?'Loading...': 'Sign In' }</button>
          <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an account?</p>
        <Link to ={"/sign-up"}>
        <span className='text-blue-700'> Sign Up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-3'>{error}</p>}
    </div>
  )
}
// This is a simple sign-up page component that allows users to create an account.