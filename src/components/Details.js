import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
  const { user } = useContext(AuthContext);
  const reading = useLoaderData();
  return (
    <div>
      <h2>
        Hi,<span className='text-xl italic font-semibold'>{user?.email}</span>
      </h2>
      <h5 className='text-xl italic font-semibold'>
        Here is your date:{' '}
        <span className='text-2xl font-semibold'> {reading.timestamp} </span>{' '}
        Sensor Readings:
      </h5>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-row justify-center'>
          <p
            className='box-content h-12 w-38 p-4 
                border-4 bg-indigo-500 m4 text-white m-4'
          >
            <span className='text-xl italic font-semibold m-2'>Nitrogen:</span>
            {reading.nitrogen}
          </p>
          <p
            className='box-content h-12 w-38 p-4 
                border-4 bg-indigo-500 m4 text-white m-4'
          >
            <span className='text-xl italic font-semibold m-2'>
              Phosphorus:
            </span>
            {reading.phosphorus}
          </p>
          <p
            className='box-content h-12 w-38 p-4 
                border-4 bg-indigo-500 m4 text-white m-4'
          >
            <span className='text-xl italic font-semibold m-2'>Potassium:</span>
            {reading.potassium}
          </p>
        </div>
        <div className='flex flex-row  justify-center'>
          <p
            className='box-content h-12 w-38 p-4 
                border-4 bg-indigo-500 m4 text-white m-4'
          >
            <span className='text-xl italic font-semibold m-2'>
              Temperature:
            </span>
            {reading.temperature}
          </p>
          <p
            className='box-content h-12 w-38 p-4 
                border-4 bg-indigo-500 m4 text-white m-4'
          >
            <span className='text-xl italic font-semibold m-2'>Humidity:</span>
            {reading.humidity}
          </p>
          <p
            className='box-content h-12 w-38 p-4 
                border-4 bg-indigo-500 m4 text-white m-4'
          >
            <span className='text-xl italic font-semibold m-2'>
              Soil Moisture:
            </span>
            {reading.moisture_level}
          </p>
          <p
            className='box-content h-12 w-38 p-4 
                border-4 bg-indigo-500 m4 text-white m-4'
          >
            <span className='text-xl italic font-semibold m-2'>
              Electric Conductivity:
            </span>
            {reading.k}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
