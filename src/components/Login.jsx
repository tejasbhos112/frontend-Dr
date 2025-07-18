import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { BASE_URL } from './constants'
import { login } from '../reducer/PatientAuthSlice'
import { addListener } from '@reduxjs/toolkit'
import { addPatient } from '../reducer/patientSlice'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")
  const [isLoginForm, setIsLoginForm] = useState(true)


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async() => {
    try {
      setError("")
      const res = await axios.post(BASE_URL+"/patient/login",{
        email,
        password
      },{withCredentials:true})

      dispatch(login(res.data))
      dispatch(addPatient(res.data))
      navigate("/")
    } catch (error) {
      setError(error?.response?.data || "Something went wrong")
    }
  }


  const handleRegister = async() =>{
    try {
      setError("")
      const res = await axios.post(BASE_URL+"/patient/signup",{
        name,
        email,
        password
      },{withCredentials:true})

      dispatch(addPatient(res.data))
      navigate("/")

    } catch (error) {
       setError(error?.response?.data || "Something went wrong")
    }
  }



  return (
    
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
           {isLoginForm ? "Sign In to your account" : "Create a new account"}
          </h2>
        </div>

        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
          
           {!isLoginForm && <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Name :
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  type="name"
                  required
                  autoComplete="name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-black placeholder:text-gray-400 focus:border-black focus:outline-none sm:text-sm"
                />
              </div>
            </div>}

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email :
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-black placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password :
                </label>
          
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  required
                  autoComplete="current-password"
                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-black placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none sm:text-sm"
                />
              </div>
            </div>
            {!isLoginForm && (
  <div>
    <label htmlFor="role" className="block text-sm/6 font-medium text-gray-900">
      Select Role:
    </label>
    <div className="mt-2">
      <select
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-black focus:border-indigo-600 focus:outline-none sm:text-sm"
      >
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>
    </div>
  </div>
)}

          
               <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               onClick={isLoginForm? handleLogin : handleRegister}
              >
                {isLoginForm ? "Sign In" : "Sign up"}
              </button>
            </div>
            
          

          <p className="mt-10 text-center text-sm/6 text-gray-500" onClick={()=> setIsLoginForm((value) => !value)}>
             {isLoginForm ? "Not a member?" : "Already have an account?"}{' '}
            <button href="/patient/login" className="font-semibold text-teal-500 hover:text-indigo-500">
                {isLoginForm ? "Signup here!" : "Sign in here!"}
            </button> 
          </p>
        </div>

    </div>
  )
}

export default Login