import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { images } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDoneOutline } from "react-icons/md";


import { products } from '../../constants/data';
import { items } from '../../constants/data';
import { blog } from '../../constants/data';

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
  


const HomePage = () => {

    let navigate = useNavigate();

    

    //! to select a random product
    const randomItemsIndex = Math.floor(Math.random() * items.length);
    const randomItems = items[randomItemsIndex];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow/>,
    };

    //! for the modal
    const [modalOpen , setModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        setSelectedProduct (product)
        setModalOpen (true)
    };

    const closeModal = () => {
        setModalOpen (false)
        setSelectedProduct (null)
    };

    return (
        <>
        <div>
            {/* carousel part */}
            <div className='overflow-hidden h-[100vh] pt-[11vh] '>
            <Slider {...settings}>
                <div className='relative'>
                    <img src={images.carousel1} alt="" className='h-[80vh] object-cover ' />
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col  '>
                        <p className='text-white text-[20px] text-center '>Women Collection 2018</p>
                        <p className='text-white text-[60px] font-bold text-center pb-10 '>NEW ARRIVALS</p>
                        <button onClick={() => navigate ('/shop')} className='bg-white py-3 px-12 m-auto rounded-full text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff] '>SHOP NOW</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src={images.carousel2} alt="" className='h-[80vh] object-cover' />
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col  '>
                        <p className='text-white text-[20px] text-center '>Women Collection 2018</p>
                        <p className='text-white text-[60px] font-bold text-center pb-10 '>NEW ARRIVALS</p>
                        <button onClick={() => navigate ('/shop')} className='bg-white py-3 px-12 m-auto rounded-full text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff] '>SHOP NOW</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src={images.carousel3} alt="" className='h-[80vh] object-cover' />
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col  '>
                        <p className='text-white text-[20px] text-center '>Women Collection 2018</p>
                        <p className='text-white text-[60px] font-bold text-center pb-10 '>NEW ARRIVALS</p>
                        <button onClick={() => navigate ('/shop')} className='bg-white py-3 px-12 m-auto rounded-full text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff] '>SHOP NOW</button>
                    </div>
                </div>
            </Slider>
            </div> 



            {/* section 1 */}
            <section className='section1'>
                <div className='imagesDiv flex items-center justify-center gap-8'>
                    {/* left */}
                    <div className='smallDivs w-[30%] flex flex-col gap-8'>
                        <div className='relative overflow-hidden'>
                            <img src={images.banner2} alt="" className='w-[100%] h-[530px] object-cover transition-all duration-300 ease-in-out hover:scale-110 ' />
                            <div className='absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                                <button onClick={() => navigate ('/shop')} className='bg-white py-3 px-12 text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>DRESSES</button>
                            </div>
                        </div>
                        <div className='relative overflow-hidden'>
                            <img src={images.banner5} alt="" className='w-[100%] h-[350px] object-cover transition-all duration-300 ease-in-out hover:scale-110' />
                            <div className='absolute top-[85%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                                <button onClick={() => navigate ('/shop')} className='bg-white py-3 px-12 text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>SUNGLASSES</button>
                            </div>
                        </div>
                    </div>

                    {/* middle */}
                    <div className='smallDivs w-[30%] flex flex-col gap-8 '>
                        <div className='relative overflow-hidden'>
                            <img src={images.watch} alt="" className='w-[100%] h-[350px] object-cover transition-all duration-300 ease-in-out hover:scale-110' />
                            <div className='absolute top-[85%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                                <button onClick={() => navigate ('/shop')} className='bg-white py-3 px-12 text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>WATCHES</button>
                            </div>
                        </div>
                        <div className='relative overflow-hidden'>
                            <img src={images.banner7} alt="" className='w-[100%] h-[530px] object-cover transition-all duration-300 ease-in-out hover:scale-110' />
                            <div className='absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                                <button onClick={() => navigate ('/shop')} className='bg-white py-3 px-12 text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>FOOTERWEAR</button>
                            </div>
                        </div>

                    </div>

                    {/* right */}
                    <div className='smallDivs w-[30%] flex flex-col gap-8'>
                        <div className='relative overflow-hidden'>
                            <img src={images.banner4} alt="" className='w-[100%] h-[530px] object-cover transition-all duration-300 ease-in-out hover:scale-110'/>
                            <div className='absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                                <button onClick={() => navigate ('/shop')} className='bg-white py-3 px-12 text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>BAGS</button>
                            </div>
                        </div>
                        <div className='relative overflow-hidden'>
                            <img src={images.banner9} alt="" className='w-[100%] h-[350px] object-cover transition-all duration-300 ease-in-out hover:scale-110' />
                            <div className='absolute top-[85%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                                <button onClick={() => navigate ('/shop')} className='bg-white py-3 px-12 text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>ACCESSORIES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* section 2 : FEATURED PRODUCTS */}
            <section className='featured-products pt-28 pb-32 '>
                <p className='text-center text-[30px] text-[#222222] font-bold ' >FEATURED PRODUCTS</p>
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
                                            <button onClick={() => handleAddToCart(e)} className='bg-white py-3 px-12 w-[210px] rounded-full text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>ADD TO CART</button>
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
                                            <button onClick={() => handleAddToCart(e)} className='bg-white py-3 px-12 w-[210px] rounded-full text-black transition duration-500  hover:bg-[#e65540] hover:text-[#fff]'>ADD TO CART</button>
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


            {/* section 3 */}
            <section className='pt-16 pb-16 bg-[#F2F2F2] '>
                {/* left part */}
                <div className='itemsDiv flex justify-center gap-10'>
                    <div className='w-[46%]  relative overflow-hidden'>
                        <img src={images.banner8} alt=""className='w-[100%] transition-all duration-300 ease-in-out hover:scale-110' />
                        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center'>
                            <p className='text-white text-[30px] font-semibold '>The Beauty</p>
                            <p className='text-white text-[50px] font-bold'>LOOKBOOK</p>
                            <p className='text-white hover:underline cursor-pointer'>VIEW COLLECTION</p>
                        </div>

                    </div>

                    {/* right part */}
                    <div className='w-[46%] bg-white overflow-hidden flex flex-col justify-center items-center  '>
                        <img src={images[randomItems.image]} alt="" className='w-[40%] h-[250px] object-cover transition-all duration-300 ease-in-out hover:scale-110'/>
                        <div className='text-center flex flex-col justify-center items-center pt-4'>
                            <p className='text-[#555] pb-2 text-[18px] '>{randomItems.name}</p>
                            <p className='text-[#555] pb-2 text-[18px]'>${randomItems.price}</p>
                            <div className='flex gap-4 pb-4 px-10'>
                                <div className='flex flex-col justify-center items-center border-[1px] border-gray-400 p-2'>
                                    <p className='text-[#555] text-[18px] '>-2082</p>
                                    <p className='text-[#999]'>days</p>
                                </div>
                                <div className='flex flex-col justify-center items-center border-[1px] border-gray-400 p-2'>
                                    <p className='text-[#555] text-[18px] '>-20</p>
                                    <p className='text-[#999]'>hrs</p>
                                </div>
                                <div className='flex flex-col justify-center items-center border-[1px] border-gray-400 p-2'>
                                    <p className='text-[#555] text-[18px] '>-53</p>
                                    <p className='text-[#999]'>mins</p>
                                </div>
                                <div className='flex flex-col justify-center items-center border-[1px] border-gray-400 p-2'>
                                    <p className='text-[#555] text-[18px] '>-41</p>
                                    <p className='text-[#999]'>secs</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* section 4 blog */}
            <section className='pt-16'>
                <p className='text-center text-[30px] text-[#222222] font-bold'>OUR BLOG</p>
                <div className='blogDivs flex justify-center pt-16 gap-8 '>
                    {
                        blog.map((e) => (
                        <div key={e.id}  className='w-[30%] overflow-hidden'>
                            <div className='overflow-hidden'>
                                <img onClick={() => navigate(`/blog/${e.id}`)} src={images[e.pic]} alt="" className='w-[100%] transition-all duration-300 ease-in-out hover:scale-110'/>
                            </div>
                            <p onClick={() => navigate(`/blog/${e.id}`)} className='text-[#333] font-semibold text-[18px] py-4 '>{e.title} </p>
                            <p className='text-[#888] pb-4 '>{e.by}</p>
                            <p className='text-[#888]'>{e.description}</p>
                        </div>
                        ))
                    }

                </div>
            </section>


            {/* section 5 */}
            <section className='pt-40'>
                <p className='text-center text-[30px] text-[#222222] font-bold'>@ FOLLOW US ON INSTAGRAM</p>
                <div className='flex  items-center justify-center text-center px-20 py-28'>
                    <div className=' pr-[5vw] pl-[5vw] py-5 '>
                        <p className='text-[18px] text-[#555] '>Free Delivery Worldwide</p>
                        <p className='italic text-[13px] text-[#888] '>Mirum est notare quam littera gothica</p>
                    </div>
                    <div className='border-r-[1px] border-l-[1px] border-gray-400 pr-[5vw] pl-[5vw] py-5 '>
                        <p className='text-[18px] text-[#555] '>30 Days Return</p>
                        <p className='italic text-[13px] text-[#888]'>Simply return it within 30 days for an exchange.</p>
                    </div>
                    <div className='pl-[5vw] pr-[5vw]'>
                        <p className='text-[18px] text-[#555] '>Store Opening</p>
                        <p className='italic text-[13px] text-[#888]'>Shop open from Monday to Sunday</p>
                    </div>
                </div>
            </section>

            {/* modal part */}
            {
                modalOpen && (
                    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                        <div className='bg-[#fff] p-8 rounded-lg w-[30%] text-center '>
                            {
                                selectedProduct && (
                                    <>
                                    <div className='pb-5'><MdOutlineDoneOutline size={50} className='text-green-500 m-auto'/></div>
                                    <p className='text-[#333] text-[16px] font-semibold pb-2 text-center'>{selectedProduct.name}</p>
                                    <p className='text-[#333] text-[15px] pb-3 '>is added to cart</p>
                                    </>
                                )
                            }
                            <button onClick={closeModal} className='bg-[#e65540] text-white py-2 px-5 rounded-full transition duration-500 hover:bg-[#292929]'>OK</button>

                        </div>
                        
                    </div>
                )

            }

        </div>



        
            
        </>
    );
};

export default HomePage;