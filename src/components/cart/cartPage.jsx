import React from 'react';
import { images } from '../../constants';

const CartPage = () => {
    return (
        <>
        <div className='pt-[11vh]'>
            {/* section 1 */}
            <section>
                <div className='relative'>
                    <img src={images.carttop} alt="" className='object-cover h-[40vh] w-[100vw]'/>
                    <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 '>
                        <p className='font-bold text-[50px] text-[#fff] '>YOUR SHOPPING CART</p>
                    </div>
                </div>
            </section>


        </div>

            
        </>
    );
};

export default CartPage;