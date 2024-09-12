import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { images } from '../../constants';
import { useNavigate } from 'react-router-dom';

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
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow/>,
    };

    return (
        <>
        <div>
            {/* carousel part */}
            <div className='overflow-hidden h-[100vh] pt-[14vh] '>
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

        </div>



        
            
        </>
    );
};

export default HomePage;