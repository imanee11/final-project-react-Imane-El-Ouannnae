import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <div className='bg-[#f0f0f0] py-16 px-14 '>
            <footer className='flex gap-20 '>
                <div className='flex flex-col gap-7'>
                    <p className='text-[#222] font-bold '>GET IN TOUCH</p>
                    <p className='text-[#555] text-[14px] w-[400px] '>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <div className='flex gap-5'>
                        <FaFacebookF size={20} className='text-[#888] transition duration-500 hover:text-[#e65540] cursor-pointer'/>
                        <FaTwitter size={20} className='text-[#888] transition duration-500 hover:text-[#e65540] cursor-pointer'/>
                        <FaPinterestSquare  size={20} className='text-[#888] transition duration-500 hover:text-[#e65540] cursor-pointer'/>
                        <FaGooglePlusG size={20} className='text-[#888] transition duration-500 hover:text-[#e65540] cursor-pointer'/>
                        <FaInstagram size={20} className='text-[#888] transition duration-500 hover:text-[#e65540] cursor-pointer'/>
                    </div>
                </div>
                <div className='flex flex-col gap-7'>
                    <p className='text-[#222] font-bold '>CATEGORIES</p>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-[#555] text-[14px] transition duration-500 hover:text-[#e65540] cursor-pointer'>Men</li>
                        <li className='text-[#555] text-[14px] transition duration-500 hover:text-[#e65540] cursor-pointer'>Women</li>
                        <li className='text-[#555] text-[14px] transition duration-500 hover:text-[#e65540] cursor-pointer'>Dresses</li>
                        <li className='text-[#555] text-[14px] transition duration-500 hover:text-[#e65540] cursor-pointer'>Sunglasses</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-7'>
                    <p className='text-[#222] font-bold '>LINKS</p>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-[#555] text-[14px] transition duration-500 hover:text-[#e65540] cursor-pointer'>Search</li>
                        <li className='text-[#555] text-[14px] transition duration-500 hover:text-[#e65540] cursor-pointer'>About Us</li>
                        <li className='text-[#555] text-[14px] transition duration-500 hover:text-[#e65540] cursor-pointer'>Contact Us</li>
                        <li className='text-[#555] text-[14px] transition duration-500 hover:text-[#e65540] cursor-pointer'>Returns</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-7'>
                    <p className='text-[#222] font-bold '>HELP</p>
                    <ul className='flex flex-col gap-3'>
                        <li className='text-[#555] text-[14px] transition duration-500 hover:text-[#e65540] cursor-pointer'>Track Order</li>
                        <li className='text-[#555] text-[14px] transition duration-500 hover:text-[#e65540] cursor-pointer'>Returns</li>
                        <li className='text-[#555] text-[14px] transition duration-500 hover:text-[#e65540] cursor-pointer'>Shipping</li>
                        <li className='text-[#555] text-[14px] transition duration-500 hover:text-[#e65540] cursor-pointer'>FAQs</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-7'>
                    <p className='text-[#222] font-bold '>NEWSLETTER</p>
                    <div className='flex flex-col gap-4'>
                        <input type="text" name="" id="" placeholder='Email Address' className='border-b-[1px] border-gray-400 bg-transparent ' />
                        <button className='bg-[#222] text-[#fff] py-3 px-12 w-[200px] rounded-full transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>SUBSCRIBE</button>
                    </div>
                </div>
            </footer>
            <p className='text-center text-[#666] pt-28'><span className='text-[13px] text-[#888]  '>Copyright © 2022</span> Shopify Theme Developed by MassTechnologist <span className='text-[13px] text-[#888]'>All rights reserved</span>.</p>
        </div>
        </>
    );
};

export default Footer;