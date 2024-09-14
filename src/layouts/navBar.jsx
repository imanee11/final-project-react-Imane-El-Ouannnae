import React, { useState } from 'react';
import { images } from '../constants';
import { useNavigate } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { BiCartDownload } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";



const Modal = ({isopen , isClose}) =>{

    let navigate = useNavigate();


    if(!isopen) return null;
    return(
        <div className='fixed inset-0 flex  z-[1000]'>
            <div className='bg-[#fff] p-8 shadow-lg w-[30%] fixed top-[12vh] right-[2vw]'>
            <div className='text-end flex justify-end items-end'>
                <button onClick={isClose}  className=''><IoClose size={20}/></button>
            </div>

                <div className='flex justify-between pt-5 '>
                    
                    <button onClick={() => {navigate("/cart")}} className='bg-[#222] py-3 px-12  rounded-full text-[#fff] transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>View Cart</button>
                    <button className='bg-[#222] py-3 px-12  rounded-full text-[#fff] transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>CheckOut</button>
                </div>
            </div>

        </div>
    )
}


const NavBar = () => {
    let navigate = useNavigate();

    //! modal part
    const [modalOpen , setModalOpen] = useState (false)

    const handleCartClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <nav className='bg-white flex items-center justify-between px-14 py-6 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] fixed right-0 left-0 top-0 z-50 font-sans'>
            <input type="checkbox" id='switcher' className='d-none' />
            <label htmlFor="switcher" className='menu-icon' >&#9776;</label>
                {/* logo div */}
                <div className=''>
                    <img src={images.logo} alt="" />
                </div>

                {/* links div */}
                <div className='links'>
                    <ul className='flex items-center gap-10'>
                        <li 
                            onClick={() => {navigate("/")}} 
                            className='flex items-center justify-between cursor-pointer text-[#333] text-[18px]'>
                            Home
                            <div className='icon'><IoIosArrowForward/></div>
                        </li>
                        <li 
                            onClick={() => {navigate("/shop")}}
                            className='cursor-pointer text-[#333] text-[18px] '>
                            Shop
                        </li>
                        <li 
                            onClick={() => {navigate("/blog")}}
                            className='cursor-pointer text-[#333] text-[18px]'>
                            Blog
                        </li>
                        <li 
                            onClick={() => {navigate("/about")}}
                            className='cursor-pointer text-[#333] text-[18px]'>
                            About
                        </li>
                        <li 
                            onClick={() => {navigate("/contact")}}
                            className='cursor-pointer text-[#333] text-[18px]'>
                            Contact
                        </li>
                    </ul>
                </div>

                {/* right div  */}
                <div className='right-part flex items-center gap-10'>
                    <div>
                        <FiUser 
                            onClick={() => {navigate("/user")}}
                            size={30} 
                            className='text-gray-500'
                        />
                    </div>
                    <div>
                        <BiCartDownload 
                        size={30} 
                        className='text-gray-500'
                        onClick={handleCartClick}
                        />
                    </div>
                </div>
            </nav>

            <Modal isopen={modalOpen} isClose={handleCloseModal}/>
            
        </>
    );
};

export default NavBar;