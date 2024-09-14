import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const SignUpPage = () => {
    let navigate = useNavigate();

    return (
        <>
        <div className='pt-[11vh] px-12 pb-10'>
            <div className='pt-10'>
                <div className='flex gap-2 items-center'>
                    <p onClick={() => {navigate("/")}} className='cursor-pointer text-[12px] text-[#555]'>Home</p>
                    <IoIosArrowForward className='cursor-pointer text-[12px]  text-[#555]'/>
                    <p onClick={() => {navigate("/user")}} className='cursor-pointer text-[12px] text-[#555]'>Account</p>
                </div>
            </div>

            <div>
                
            </div>
            <div className='flex gap-8 '>
                <div className='w-[50%] pt-5'>
                    {/* left part */}
                    <div className='border-[1px] border-[#E6E6E6] flex flex-col gap-2 py-4 px-4'>
                        <p className='text-[#212529] text-[32px] '>New Customer</p>
                        <p className='text-[#888] text-[15px] font-semibold '>Register Account</p>
                        <p className='text-[#888] text-[15px]'>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p>
                        <button 
                            onClick={() => {navigate("/createaccount")}} 
                            className='bg-[#292929] text-[#fff] w-[170px] py-3 px-12 text-[12px] transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>
                            CONTINUE
                        </button>
                    </div>
                </div>

                <div className='w-[50%] pt-5'>
                    {/* right part */}
                    <div className=' border-[1px] border-[#E6E6E6] flex flex-col gap-2 py-4 px-4'>
                        <p className='text-[#212529] text-[32px] '>Returning Customer</p>
                        <p className='text-[#888] text-[15px] font-semibold '>I am a returning customer</p>
                        <label htmlFor="" className='text-[#212529] text-[14px]'>Email</label>
                        <input type="email" name="" id="" placeholder='Email' className='w-[100%]  border-[1px] border-gray-200 placeholder:text-[#555] text-[13px] p-4 ' />
                        <label htmlFor="" className='text-[#212529] text-[14px]'>Password</label>
                        <input type="password" name="" id="" placeholder='Password' className='w-[100%]  border-[1px] border-gray-200 placeholder:text-[#555] text-[13px] p-4 ' />
                        <p className='text-[#666] text-[15px] transition duration-500 hover:text-[#e65540] cursor-pointer'>Forgot your password?</p>

                        <div className='flex items-center gap-2 pt-4'>
                            <button className='bg-[#292929] text-[#fff] w-[150px] py-3 px-12 text-[12px] transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>SIGN IN</button>
                            <p onClick={() => {navigate("/")}}   className='text-[#666] text-[15px] transition duration-500 hover:text-[#e65540] cursor-pointer'><span className='text-[#212529] text-[12px]'>or</span> Return to Store</p>
                        </div>
                    </div>
                </div>




            </div>

        </div>

            
        </>
    );
};

export default SignUpPage;