
import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
return (
  <div className=" h-screen bg-black flex items-center justify-center">
    <div className="flex bg-blue-600 border border-white w-3/5 rounded-2xl overflow-hidden">
      <div className="flex-1 flex flex-col gap-8 px-20 ">
        <h2 className="text-primary mt-6 text-center font-extrabold  ">Story-Day Signup<br /></h2>
        <p className="text-sm text-center font-medium">
          share your daily story about a wired thing or funny situtaion
           happen to you or give advice about a bad expernce with your friends
        </p>
        <div className='text-center items-center'>
            <span className="text-sm font-medium">Already Have An Account !</span>
            <Link to='/Logging'><button type='submit' className="ml-24 h-12 mt-2 grid w-28 items-center pointer-events-auto rounded-md bg-blue-900  py-2 text-[0.8125rem] font-semibold leading-5  text-white hover:bg-indigo-500 hover:text-black hover:font-bold">Sing In</button></Link>     
            </div>
      </div>
      <form className=" h-96 flex-1 bg-blue-600 flex flex-col items-center justify-center gap-2"> 
        <input className="p-4 relative right-4 w-full bg-blue-400 border-b rounded-xl border-b-white outline-none focus:border-2 focus:border-primary text-black font-semibold placeholder:text-white placeholder:text-lg placeholder:capitalize mx-auto" type="text" required placeholder='username' />
        <input className="p-4 relative right-4 w-full bg-blue-400 border-b rounded-xl border-b-white outline-none focus:border-2 focus:border-primary text-black font-semibold placeholder:text-white placeholder:text-lg placeholder:capitalize mx-auto" type="email" required placeholder='email' />
        <input className="p-4 relative right-4 w-full bg-blue-400 border-b rounded-xl border-b-white outline-none focus:border-2 focus:border-primary text-black font-semibold placeholder:text-white placeholder:text-lg placeholder:capitalize mx-auto" type="password" required placeholder="password" />
        <input className="p-4 relative right-4 w-full bg-blue-400 border-b rounded-xl border-b-white outline-none focus:border-2 focus:border-primary text-black font-semibold placeholder:text-white placeholder:text-lg placeholder:capitalize mx-auto" type="password" required placeholder='confirm password' />
        <button type='submit' className="ml-1 h-12 w-28 pointer-events-auto rounded-md bg-blue-900 px-3 py-2 text-[0.8125rem] font-semibold leading-5  text-white hover:bg-indigo-500 hover:text-black hover:font-bold">Sing Up</button>
      </form>
    </div>
  </div>
)}