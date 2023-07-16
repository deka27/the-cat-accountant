import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import logscreen from '../assets/mainscreens/logscreen.jpg';
import { AiOutlineEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import bg from '../assets/mainscreens/bg3.jpg';
import Layout from '../components/Layout/Layout';
import { Toaster } from 'react-hot-toast';


const Login = () => {

     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const { login, isLoading } = useLogin();

     const handleSubmit = async (e) => {
          e.preventDefault();
          await login(email, password);
     }

     return (
          <Layout>
               <section className='w-full h-full bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: `url(${bg})` }}>
                    {/* login container */}
                    <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 mt-2 items-center'>
                         {/* form container */}
                         <div className='mt-3 md:w-1/2 px-8'>
                              <h2 className='font-bold text-2xl text-[#001E4E]'>Log In</h2>
                              <p className='text-small mt-4 text-[#001E4E]'>If you are already a member, Easily Log in</p>
                              {/* form element */}
                              <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                                   <input
                                        type="email"
                                        placeholder='Email'
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        className='p-2 mt-8 rounded-xl border'
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
                                   <button disabled={isLoading} className='bg-[#001E4E] rounded-xl text-white py-2 hover:scale-105 duration-300'>
                                        Login
                                   </button>
                                   <Toaster position="bottom-center"
                                        reverseOrder={false} />
                                   {/* {error && <p>{error}</p>} */}
                              </form>

                              <div className='mt-10 grid grid-cols-3 items-center text-gray-500 '>
                                   <hr className='border-gray-400' />
                                   <p className='text-center text-sm'>OR</p>
                                   <hr className='border-gray-400' />
                              </div>

                              <button className='bg-white border rounded-xl py-2 w-full mt-5 flex justify-center items-center hover:scale-105 duration-300'>
                                   <FcGoogle className='w-5 h-5 mr-3' />
                                   Login with Google
                              </button>

                              <p className='mt-5 text-xs border-b border-gray-400 py-4'>Forgot Password?</p>

                              <div className='mt-3 mb-4 text-xs flex justify-between'>
                                   <p className='mt-2'>Don't have an account?</p>
                                   <button className='py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300'>
                                        <Link to="/signup">
                                             Signup
                                        </Link>
                                   </button>
                              </div>
                         </div>
                         {/* image container */}
                         <div className='mt-3 md:block hidden w-1/2 p-5'>
                              <img className='rounded-2xl' src={logscreen} alt="logscreen" />
                         </div>
                    </div>
               </section>
          </Layout>
     )
}

export default Login