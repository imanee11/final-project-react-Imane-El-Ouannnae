import React from 'react';
import { images } from '../../constants';


const ContactPage = () => {
    return (
        <>
        <div className='pt-[14vh]'>

            {/* section 1 */}
            <section>
                <div className='relative'>
                    <img src={images.aboutbanner} alt="" className='object-cover h-[40vh] w-[100vw]'/>
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                        <p className='font-bold text-[50px] text-[#fff] '>CONTACT</p>
                    </div>
                </div>
            </section>

            {/* section 2 */}
            <section className='flex items-center py-16 gap-8 px-12'>
                <div className='w-[50%] '>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5901.408187417011!2d-83.714185!3d42.30617899999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae3e5396e7cd%3A0x54d4a122d42d8dc6!2sGoogle%20Ann%20Arbor!5e0!3m2!1sen!2sus!4v1726226900828!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className='w-[50%]  '>
                    <form action="" className='flex flex-col gap-5'>
                        <p className='text-[25px] text-[#333] pb-5 '>Send us your message</p>
                        <input type="text" name="" id="" className='w-[100%] border-[1px] border-gray-200 p-4 placeholder:text-[#555] text-[13px] ' placeholder='Name' />
                        <input type="text" name="" id="" className='w-[100%] border-[1px] border-gray-200 p-4 placeholder:text-[#555] text-[13px]  ' placeholder='Email' />
                        <input type="text" name="" id="" className='w-[100%] border-[1px] border-gray-200 p-4 placeholder:text-[#555] text-[13px]  ' placeholder='Phone' />
                        <textarea name="" id="" className='w-[100%] border-[1px] border-gray-200 p-4 placeholder:text-[#555] text-[13px] ' placeholder='Message'></textarea>
                        <button className='bg-[#222] text-[#fff] py-3 px-12 w-[150px] rounded-full transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>SEND</button>

                    </form>

                </div>

            </section>
        </div>
            
        </>
    );
};

export default ContactPage;