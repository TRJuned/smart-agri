import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { user } = useContext(AuthContext);
    const reading = useLoaderData();
    return (
        <div>
            <h2>Hi,<span className='text-xl italic font-semibold'>{user?.email}</span></h2>
            <h5 className='text-xl italic font-semibold'>Here is your date: <span className='text-2xl font-semibold'> {reading.date} </span> Sensor Readings:</h5>
            <div className='flex justify-center'>
                <p className='box-content h-10 w-36 p-4 
                border-4 bg-indigo-500 m4 text-white m-4'><span className='text-xl italic font-semibold m-2'>Nitrogen:</span>{reading.n}</p>
                <p className='box-content h-10 w-36 p-4 
                border-4 bg-indigo-500 m4 text-white m-4'><span className='text-xl italic font-semibold m-2'>Phosphorus:</span>{reading.p}</p>
                <p className='box-content h-10 w-36 p-4 
                border-4 bg-indigo-500 m4 text-white m-4'><span className='text-xl italic font-semibold m-2'>Potassium:</span>{reading.k}</p>
            </div>
        </div>
    );
};

export default Details;