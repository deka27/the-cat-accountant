import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import logscreen from '../assets/mainscreens/logscreen.jpg';
import { AiOutlineEye } from 'react-icons/ai';
import bg from '../assets/mainscreens/bg3.jpg';
import Layout from '../components/Layout/Layout';
import { Toaster } from 'react-hot-toast';

const Signup = () => {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [firstname, setFirstname] = useState("");
     const [lastname, setLastname] = useState("");
     const { signup, isLoading } = useSignup();

     const handleSubmit = async (e) => {
          e.preventDefault();

          await signup(firstname, lastname, email, password);
     }

     return (
          <Layout>
               <section className='w-full h-full bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: `url(${bg})` }}>
                    {/* login container */}
                    <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 mt-2 items-center'>
                         {/* form container */}
                         <div className='mt-3 mb-8 md:w-1/2 px-8'>
                              <h2 className='font-bold text-2xl text-[#001E4E]'>Sign Up</h2>
                              <p className='text-small mt-4 text-[#001E4E]'>Welcome to The CAT Accountant 🐱</p>
                              <p className='text-xs mt-4 text-[#001E4E]'>Please fill in the form to get started</p>
                              {/* form element */}
                              <form className='flex flex-col gap-4' onSubmit={handleSubmit}>

                                   <input
                                        type="text"
                                        placeholder='Firstname'
                                        onChange={(e) => setFirstname(e.target.value)}
                                        value={firstname}
                                        className='p-2 mt-8 rounded-xl border'
                                   />

                                   <input
                                        type="text"
                                        placeholder='Lastname'
                                        onChange={(e) => setLastname(e.target.value)}
                                        value={lastname}
                                        className='p-2 rounded-xl border'
                                   />

                                   <input
                                        type="email"
                                        placeholder='Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        className='p-2 rounded-xl border'
                                   />

                                   <div className='relative'>
                                        <input
                                             type="password"
                                             placeholder='Password'
                                             onChange={(e) => setPassword(e.target.value)}
                                             value={password}
                                             className='p-2 rounded-xl border w-full'
                                        />
                                        <AiOutlineEye className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer' />
                                   </div>

                                   <button disabled={isLoading} className='bg-[#001E4E] mt-8 rounded-xl text-white py-2 hover:scale-105 duration-300'>
                                        Signup
                                   </button>
                                   <Toaster position="bottom-center"
                                        reverseOrder={false} />
                                   {/* {error && <p>{error}</p>} */}
                              </form>

                         </div>
                         {/* image container */}
                         <div className='mt-3 md:block hidden w-1/2 p-5'>
                              <img className='rounded-2xl' src={logscreen} alt="signscreen" />
                         </div>
                    </div>
               </section>

          </Layout>
     )
}

export default Signup