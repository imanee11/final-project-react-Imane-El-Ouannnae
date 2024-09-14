import React, { useContext } from 'react';
import { dataContext } from '../../App';

const UserDetail = () => {
    const {user} = useContext (dataContext)

    return (
        <>
        <div className='pt-[16vh] px-12 pb-10'>
            <p  className='text-[30px] text-[#212529] font-bold'>Welcome {user.firstname}</p>
        </div>
            
        </>
    );
};

export default UserDetail;