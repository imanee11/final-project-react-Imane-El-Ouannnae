import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../constants/data';
import { images } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-next-arrow`}
        style={{ ...style, display: "block", right: "10px", fontSize: "", }}
        onClick={onClick}
      >
   
      </div>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-prev-arrow`}
        style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
        onClick={onClick}
      >
  
      </div>
    );
}




const ProductDetail = () => {
    let navigate = useNavigate();

    const [count , setCount] = useState(0);
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    const [visible , setVisible] = useState (false);
    const [visibleTwo , setVisibleTwo] = useState (false);
    const [visibleThree , setVisibleThree] = useState (false);

    const addText = () => {
        setVisible(!visible)
    };
    const addTextTwo = () => {
        setVisibleTwo(!visibleTwo)
    };
    const addTextThree = () => {
        setVisibleThree(!visibleThree)
    };


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow/>,
    };


    const {id} = useParams();
    const product = products.find((e) => e.id === parseInt(id));



    return (
        <>
        <div className='pt-[11vh] px-12'>
            <div className='pt-10'>
                <div className='flex gap-2 items-center'>
                    <p onClick={() => {navigate("/")}} className='cursor-pointer text-[12px] text-[#555]'>Home</p>
                    <IoIosArrowForward className='cursor-pointer text-[12px]  text-[#555]'/>
                    <p className='cursor-pointer text-[12px]  text-[#555]'>{product.name}</p>
                </div>
            </div>


            {/* product */}
            <div className='flex justify-between gap-10  py-10'>
                {/* left part */}
                <div className='w-[40%]'>
                    <img src={images[product.img]} alt="" className='w-[100%] ' />
                </div>

                {/* right part */}
                <div className='w-[60%]'>
                    <p className='cursor-pointer text-[24px]  text-[#222] pb-3'>{product.name}</p>
                    <p className='cursor-pointer text-[30px]  text-[#555] pb-2'>${product.price}</p>
                    <p className='cursor-pointer text-[13px]  text-[#888]'>{product.description}</p>
                    <div className='flex gap-2 items-center pt-10'>
                        <div className='px-[1.5vw] py-2 bg-[#EE3333] text-[#fff] text-[13px] border-[1px] border-[#e65540] rounded-sm cursor-pointer'>S</div>
                        <div className='px-[1.5vw] py-2 bg-transparent text-[#000] text-[13px] border-[1px] border-[#e65540] rounded-sm cursor-pointer'>M</div>
                        <div className='px-[1.5vw] py-2 bg-transparent text-[#000] text-[13px] border-[1px] border-[#e65540] rounded-sm cursor-pointer'>L</div>
                        <div className='px-[1.5vw] py-2 bg-transparent text-[#000] text-[13px] border-[1px] border-[#e65540] rounded-sm cursor-pointer'>XL</div>
                    </div>
                    <div className='flex gap-2 items-center pt-10'>
                        <div className='px-[1.5vw] py-2 bg-[#808080] text-[#808080] text-[13px] border-[1px] border-[#e65540] rounded-sm cursor-pointer'>S</div>
                        <div className='px-[1.5vw] py-2 bg-[#EE3333] text-[#EE3333] text-[13px] border-[1px] border-[#e65540] rounded-sm cursor-pointer'>S</div>
                        <div className='px-[1.5vw] py-2 bg-[#000000] text-[#000000] text-[13px] border-[1px] border-[#e65540] rounded-sm cursor-pointer'>S</div>
                    </div>

                    <div className='flex items-center pt-10 gap-3'>
                        <div className='flex items-center gap-3'>
                            <button className='bg-[#E6E6E6] px-4 py-4' onClick={decrement}><TiMinus/></button>
                            <span className="bg-[#fff] px-4 py-4">{count}</span>
                            <button className='bg-[#E6E6E6] px-4 py-4' onClick={increment}><FaPlus/></button>
                        </div> 
                        <button className='bg-[#222] text-[#fff] py-3 px-12  rounded-full transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>ADD TO CART</button>
                    </div>
                    
                    <div className='flex items-center gap-10 pt-16'>
                        <p className='text-[#888] text-[13px]'>Brand: MyVendor</p>
                        <p className='text-[#666] text-[15px] transition duration-500 hover:text-[#e65540] cursor-pointer '><span className='text-[#888] text-[13px]'>Categories: </span>boxy , Shirts , sleeveless</p>
                    </div>

                    <div className='pt-10'>
                        {/* firt div */}
                        <div>
                           <div className='border-t-[1px] border-[#E6E6E6] flex justify-between py-5'>
                                <p className='text-[#222] font-semibold transition duration-500 hover:text-[#e65540] cursor-pointer'>Description</p>
                                <button onClick={addText}>
                                    {visible ? <TiMinus className='text-[#888]'/> : <FaPlus size={13} className='text-[#888]'/>}
                                </button>
                            </div> 
                            <div className=''>
                                {
                                    visible && (
                                        <p className='py-5 text-[#888] text-[13px]' >Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat</p>
                                    )
                                }
                            </div>  
                        </div>
                        <div>
                           <div className='border-t-[1px] border-[#E6E6E6] flex justify-between py-5'>
                                <p className='text-[#222] font-semibold transition duration-500 hover:text-[#e65540] cursor-pointer'>Additional Information</p>
                                <button onClick={addTextTwo}>
                                    {visibleTwo ? <TiMinus className='text-[#888]'/> : <FaPlus size={13} className='text-[#888]'/>}
                                </button>
                            </div> 
                            <div>
                                {
                                    visibleTwo && (
                                        <p className=' py-5 text-[#888] text-[13px]' >You can use this tab for adding shipping details, return policies and information or measurements etc.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi</p>
                                    )
                                }
                            </div>  
                        </div>
                        <div>
                           <div className=' border-t-[1px]  border-[#E6E6E6] flex justify-between py-5'>
                                <p className='text-[#222] font-semibold transition duration-500 hover:text-[#e65540] cursor-pointer'>Reviews</p>
                                <button onClick={addTextThree}>
                                    {visibleThree ? <TiMinus className='text-[#888]'/> : <FaPlus size={13} className='text-[#888]'/>}
                                </button>
                            </div> 
                            <div className=''>
                                {
                                    visibleThree && (
                                        <div className='p-10'>
                                            <p className='text-[#212529] text-[32px]' >Customer Reviews</p>
                                            <p className='text-[#212529]'>Based on 1 review <span className='text-[#666] text-[15px]'>Write a review</span></p>
                                        </div>

                                    )
                                }
                            </div>  
                        </div>
                        <div>
                            <div className=' border-t-[1px]  border-[#E6E6E6] flex justify-between py-5'></div>
                        </div>
                        

                    </div>
                </div>
            </div>

            {/* carousel */}
            <section className='featured-products pt-28 pb-32 '>
                <p className='text-center text-[30px] text-[#222222] font-bold ' >RELATED PRODUCTS</p>
                {/* carousel */}
                <Slider {...settings}>
                    {/* first slide */}
                    <div className=''>
                        <div className='flex items-center justify-center gap-9 w-[100%] pt-10'>
                            {
                                products.slice(0,4).map((e , i) => (
                                <div className='flex flex-col w-[22%] '>
                                    <div className='relative group'>
                                        <img src={images[e.img]} alt="" className='w-[100%] transition-all duration-300 ease-in-out group-hover:brightness-75  ' />
                                        <div className='absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                            <button className='bg-white py-3 px-12 w-[210px] rounded-full text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>ADD TO CART</button>
                                        </div>
                                    </div>
                                    <div className='pt-5'>
                                        <p onClick={() => navigate(`/shop/${e.id}`)} className='text-[#555] pb-2 transition duration-500 hover:text-[#e65540] cursor-pointer'>{e.name}</p>
                                        <p className='text-[#555] pb-2 '>${e.price}</p>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    {/* second slide */}
                    <div className=''>
                        <div className='flex items-center justify-center gap-9 w-[100%] pt-10 '>
                            {
                                products.slice(4).map((e, i) => (
                                <div className='flex flex-col w-[22%] '>
                                    <div className='relative group'>
                                        <img src={images[e.img]} alt="" className='w-[100%] transition-all duration-300 ease-in-out group-hover:brightness-75  ' />
                                        {
                                            e.sale && (
                                                <div className='absolute top-3 left-2 bg-[#e65540] text-white px-5 py-1 rounded-full  text-[13px] '>
                                                    Sale
                                                </div>
                                            )
                                        }
                                        <div className='absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                            <button className='bg-white py-3 px-12 w-[210px] rounded-full text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>ADD TO CART</button>
                                        </div>
                                    </div>
                                    <div className='pt-5'>
                                        <p onClick={() => navigate(`/shop/${e.id}`)} className='text-[#555] pb-2 transition duration-500 hover:text-[#e65540] cursor-pointer '>{e.name}</p>
                                        {
                                            e.sale ? (
                                                <div className='flex gap-3'>
                                                    <p className='text-[#555] pb-2 line-through'>${e.price}</p>
                                                    <p className='text-[#e65540] '>${e.reduction}</p>
                                                </div>
                                            ) : (
                                               <p className='text-[#555] pb-2'>${e.price}</p> 
                                            )
                                        }
                                        
                                    </div>
                                </div>
                                ))
                            }

                        </div>
                    </div>
                </Slider>

            </section>
        </div>
        </>
    );
};

export default ProductDetail;