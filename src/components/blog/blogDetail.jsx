import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { images } from '../../constants';
import { FaSearch } from 'react-icons/fa'
import { products } from '../../constants/data';

import { IoIosArrowForward } from "react-icons/io";


import { blog } from '../../constants/data';

const BlogDetail = () => {
    let navigate = useNavigate();

    const {id} = useParams();
    const blogg = blog.find((e) => e.id === parseInt(id));

    return (
        <>
        <div className='pt-[11vh] px-12'>
            <div className='pt-10'>
                <div className='flex gap-2 items-center'>
                    <p onClick={() => {navigate("/")}} className='cursor-pointer text-[12px] text-[#555]'>Home</p>
                    <IoIosArrowForward className='cursor-pointer text-[12px]  text-[#555]'/>
                    <p onClick={() => {navigate("/blog")}} className='cursor-pointer text-[12px] text-[#555]'>News</p>
                    <IoIosArrowForward className='cursor-pointer text-[12px]  text-[#555]'/>
                    <p className='cursor-pointer text-[12px]  text-[#555]'>{blogg.title}</p>
                </div>
            </div>

            <section className='flex gap-12 py-16 px-12'>
                {/* left part */}
                <div className='w-[70%] '>
                    <img src={images[blogg.pic]} alt="" className='w-[100%]' />
                    <p className='text-[26px] text-[#333] font-semibold pt-10'>{blogg.title}</p>
                    <p className='text-[13px] text-[#888]'>{blogg.by}</p>
                    <p className='text-[15px] text-[#888] pt-5'>{blogg.description}</p>
                    <p className='text-[15px] text-[#888] pt-5'>Aliquam faucibus scelerisque placerat. Vestibulum vel libero eu nulla varius pretium eget eu magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean dictum faucibus felis, ac vestibulum risus mollis in. Phasellus neque dolor, euismod vitae auctor eget, dignissim a felis. Etiam malesuada elit a nibh aliquam, placerat ultricies nibh dictum. Nam ut egestas velit. Pellentesque viverra tincidunt tellus. Etiam cursus, ligula id vehicula cursus, turpis mauris facilisis massa, eget tincidunt est purus et odio. Nam quis luctus libero, non posuere velit. Ut eu varius diam, eu euismod elit. Donec efficitur, neque eu consectetur consectetur, dui sem consectetur felis, vitae rutrum risus urna vel arcu. Aliquam semper ullamcorper laoreet. Sed arcu lectus, fermentum imperdiet purus eu, ornare ornare libero.</p>
                    
                    <div className='flex items-center gap-3'>
                        <p className='text-[#555] text-[15px]  pt-10 pb-10 '>Tags Cloud</p>
                        <div className='flex gap-3'>
                            <button className='border-[1px] border-[#888] text-[#888] px-4 py-1 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540] '>crafts</button>
                            <button className='border-[1px] border-[#888] text-[#888] px-4 py-1 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540] '>street style</button>
                        </div>
                    </div>

                    {/* comments */}
                    <div>
                        <p className='text-[#333] text-[21px] font-bold'>1 COMMENT TO SHOW</p>
                        <div className='flex gap-4 items-center pt-5'>
                            <img src={images.avatar} alt="" />
                            <div>
                                <p className='text-[#888] text-[13px]'><span className='text-[#666] text-[17px] font-semibold'>test name</span> / Jan 11, 2018 <span className='text-[#666] text-[15px]'>Reply</span></p>
                                <p className='text-[#888] text-[15px]'>test message</p>
                            </div>
                        </div>

                        <p className='text-[#333] text-[21px] font-bold pt-10'>LEAVE A COMMENT</p>
                        <p className='text-[#888] text-[13px] py-5'>Your email address will not be published. Required fields are marked *</p>
                        <form action="" className='flex flex-col gap-5'>
                            <textarea name="" id="" className='w-[100%] h-[20vh] border-[1px] border-gray-200 placeholder:text-[#555] text-[13px] p-4 ' placeholder='Message'></textarea>
                            <input type="text" name="" id="" placeholder='Your name' className='w-[40%]  border-[1px] border-gray-200 placeholder:text-[#555] text-[13px] p-4 ' />
                            <input type="email" name="" id="" placeholder='Email adress' className='w-[40%]  border-[1px] border-gray-200 placeholder:text-[#555] text-[13px] p-4 ' />
                            <button className='bg-[#222] text-[#fff] py-3 px-12 w-[240px] rounded-full transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>POST COMMENT</button>
                            <p className='text-[#888] text-[13px] py-5'>Please note, comments must be approved before they are published.</p>

                        </form>



                    </div>
                </div>


                {/* right part */}
                <div className='w-[30%] '>
                    <div className='relative'>
                        <input type="text" name="" id="" className='w-[100%] border-[1px] border-gray-200 p-4 placeholder:text-[#555] text-[13px] rounded-full ' placeholder='Search all articles...'/>
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <p className='text-[#333] text-[22px] font-extrabold pt-10 pb-10 '>Featured Products</p>

                    <div className='felx flex-col gap-8 '>
                        {
                            products.slice(0,5).map((e) => (
                                <div className='w-[100%] flex gap-8 pb-8 '>
                                    <div className='w-[30%]'>
                                        <img src={images[e.img]} alt="" className='w-[100%]' />
                                    </div>
                                    <div>
                                        <p onClick={() => navigate(`/shop/${e.id}`)} className='text-[#555] pb-2 transition duration-500 hover:text-[#e65540] cursor-pointer'>{e.name}</p>
                                        <p className='text-[#555] text-[13px] pb-2'>${e.price}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <p className='text-[#333] text-[22px] font-extrabold pt-10 pb-10 '>Tags Cloud</p>
                    <div className='flex gap-3'>
                        <button className='border-[1px] border-[#888] text-[#888] px-4 py-1 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540] '>crafts</button>
                        <button className='border-[1px] border-[#888] text-[#888] px-4 py-1 rounded-full transition duration-500 hover:text-[#e65540] hover:border-[#e65540] '>street style</button>
                    </div>

                </div>
            </section>

        </div>


            
        </>
    );
};

export default BlogDetail;