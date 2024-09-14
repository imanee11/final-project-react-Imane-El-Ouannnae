import React, { useContext, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

import { dataContext } from '../../App';


const CreateAcc = () => {
    let navigate = useNavigate();

    let {user , setUser} = useContext (dataContext);

    const [firstName , setFisrtName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleForm = (e) => {
        e.preventDefault();

        setUser ({firstName , lastName , email , password})

        navigate ('/userdetail')
    }
    

    return (
        <>
        <div className='pt-[11vh] px-12 pb-10'>
            <div className='pt-10'>
                <div className='flex gap-2 items-center'>
                    <p onClick={() => {navigate("/")}} className='cursor-pointer text-[12px] text-[#555]'>Home</p>
                    <IoIosArrowForward className='cursor-pointer text-[12px]  text-[#555]'/>
                    <p onClick={() => {navigate("/createaccount")}} className='cursor-pointer text-[12px] text-[#555]'>Create Account</p>
                </div>
            </div>

            <div className='pt-5'>
                <p className='text-[40px] text-[#212529]'>Create Account</p>
                <p className='text-[18px] text-[#212529]'>Your Personal Details</p>
                <form onSubmit={handleForm} action="" className='pt-5 flex flex-col gap-3'>
                    <label htmlFor="" className='text-[#212529] text-[14px]'>First Name</label>
                    <input 
                        onChange={(e) => setFisrtName(e.target.value)}
                        value={firstName}
                        type="text" 
                        placeholder='First Name' 
                        className='w-[80%]  border-[1px] border-gray-200 placeholder:text-gray-400 text-[13px] p-4 ' 
                    />



                    <label htmlFor="" className='text-[#212529] text-[14px]'>Last Name</label>
                    <input 
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                        type="text" 
                        placeholder='Last Name' 
                        className='w-[80%]  border-[1px] border-gray-200 placeholder:text-gray-400 text-[13px] p-4 ' 
                    />



                    <label htmlFor="" className='text-[#212529] text-[14px]'>Email</label>
                    <input 
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder='Email' 
                        className='w-[80%]  border-[1px] border-gray-200 placeholder:text-gray-400 text-[13px] p-4 ' 
                    />



                    <label htmlFor="" className='text-[#212529] text-[14px]'>Password</label>
                    <input 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder='Password' 
                        className='w-[80%]  border-[1px] border-gray-200 placeholder:text-gray-400 text-[13px] p-4 ' 
                    />


                    <div className='flex items-center gap-2 pt-4'>
                        <button 
                            type="submit"
                            className='bg-[#292929] text-[#fff] w-[150px] py-3 px-12 text-[12px] transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>
                            Create
                        </button>
                        <p
                            onClick={() => {navigate("/")}} 
                            className='text-[#666] text-[15px] transition duration-500 hover:text-[#e65540] cursor-pointer'>
                            <span className='text-[#212529] text-[12px]'>or </span> 
                            Return to Store
                        </p>
                    </div>
                </form>

            </div>

        </div>
            
        </>
    );
};

export default CreateAcc;