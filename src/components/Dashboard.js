import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { Link, useLoaderData } from 'react-router-dom';
import { BarChart, Bar, } from 'recharts';


const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const readings = useLoaderData();
    return (
        <div> 

            <div className='my-3'>
                <h2>Hi,<span className='text-xl italic font-semibold'>{user?.email}</span></h2>
            </div>

            <div className="flex justify-center my-3">
                <div>
                    <BarChart width={300} height={200} data={readings}>
                        <Bar dataKey="n" fill="#8884d8" />
                    </BarChart>
                    <h1>Nitrogen</h1>
                </div>
                <div>
                    <BarChart width={300} height={200} data={readings}>
                        <Bar dataKey="p" fill="#8884d8" />
                    </BarChart>
                    <h1>Phosphorus</h1>
                </div>
                <div>
                    <BarChart width={300} height={200} data={readings}>
                        <Bar dataKey="k" fill="#8884d8" />
                    </BarChart>
                    <h1>Potassium</h1>
                </div>
            </div>
            <div>
                {
                    readings.map(reading => <h5 className='m-3 text-lg' key={reading._id}> <span className='font-2xl font-semibold'>Date: </span>  {reading.date}
                        <Link to={`/dashboard/${reading._id}`}>
                            <button class="btn btn-sm btn-outline btn-primary mx-2">Show Details</button>
                        </Link></h5>)
                }
                <button class="btn btn-sm btn-outline btn-accent mx-2">Show More Dates</button>
            </div>

        </div>
    );
};

export default Dashboard;