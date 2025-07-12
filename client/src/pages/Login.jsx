import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'


const Login = () => {
  const navigate = useNavigate();
  const { setUserId, setShowLogin, logout, userId, checkAuth } = useContext(AuthContext);
  const [state, setState] = useState('Login')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, []);

  const submitHandler = async () => {
    if (state === 'Login') {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/login`, {
          email,
          password,
        }, { withCredentials: true });

        if (res.data.success) {
          setUserId(res.data.userId);
          toast.success('Logged in!');
          setShowLogin(false);
          navigate('/');
          return;
        } else {
          toast.error(res.data.message);
        }
      } catch (err) {
        toast.error('Login failed!');
      }
    } else {
      try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/user/register`, {
          name,
          email,
          password,
        }, { withCredentials: true });

        if (res.data.success) {
          setUserId(res.data.userId);
          toast.success('Account created!');
          setShowLogin(false);
          navigate('/');
          return;
        } else {
          toast.error(res.data.message);
        }
      } catch (err) {
        console.error("Signup Error:", err?.response?.data || err.message);
        toast.error(err?.response?.data?.message || 'Signup failed!');
      }
    }
  };

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
      <div className='relative bg-white p-10 rounded-xl text-gray-500'>

        <h1 className='text-center text-3xl text-gray-700 font-medium mb-5'>{state}</h1>
        <p className='text-sm text-center'>Welcome! {state === 'Login' ? 'Please sign in.' : 'Create an account.'}</p>

        {state !== 'Login' &&
          <div className='border px-5 py-2 flex items-center gap-2 rounded-full mt-6'>
            <img src={assets.profile_icon} alt="" width={26} />
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Enter Full Name' required className='outline-none' />
          </div>
        }
        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <img src={assets.email_icon} alt="" />
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Enter Email id' required className='outline-none' />
        </div>
        <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
          <img src={assets.lock_icon} alt="" />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Enter Password' required className='outline-none' />
        </div>

        {/* <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p> */}
        <br />

        <button onClick={submitHandler} type='submit' className='bg-gray-800 w-full text-white py-2 rounded-full cursor-pointer'>
          {state === 'Login' ? 'Login' : 'Create Account'}
        </button>

        {state === 'Login' ?
          <p className='mt-5 text-center'>Don't have an account ?
            <span className='text-blue-600 cursor-pointer'
              onClick={() => setState('Sign Up')}> Sign up</span>
          </p>
          :
          <p className='mt-5 text-center'>Already have an account ?
            <span className='text-blue-600 cursor-pointer'
              onClick={() => setState('Login')}> Login </span>
          </p>
        }

        <img onClick={() => navigate('/')} src={assets.cross_icon} alt="" className='absolute top-5 right-5 cursor-pointer' />
      </div>
    </div>
  )
}

export default Login
