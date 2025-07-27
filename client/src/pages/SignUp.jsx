import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// Importing necessary libraries and hooks from React and React Router
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);//useState is a hook that allows you to add state to functional components
  const Navigate = useNavigate();//useNavigate is a hook that allows you to navigate to different routes in your application
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
    setLoading(true);
  const res =await fetch('/api/auth/signup',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  }); 
  const data = await res.json();
   console.log(data);
  if(data.success === false){
    setLoading(false);
    setError(data.message);    
    return;
  }
  setLoading(false);
  setError(null);
  Navigate('/sign-in');//this will redirect the user to the sign-in page after successful signup
  } catch (error) {
    setLoading(false);
    setError(error.message);
  }
  };

    
  return (
    <div className='p-3 max-w-lg mx-auto' >
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit ={handleSubmit} className='flex flex-col gap-4 '>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange}/>
         <input type="email" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange}/>
          <input type="password" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange}/>
          <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disables:opacity-80'>{loading?'Loading...': 'Sign Up' }</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to ={"/sign-in"}>
        <span className='text-blue-700'> Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-3'>{error}</p>}
    </div>
  )
}
// This is a simple sign-up page component that allows users to create an account.