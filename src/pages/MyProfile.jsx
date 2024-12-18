import React, { useContext, useEffect, useState } from 'react';
import { AuthProviderContext } from '../Provider/AuthProvider';
import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyProfile = () => {
    const { user } = useContext(AuthProviderContext);
    const [jobs, setJobs] = useState([]);

    const axiosSecure = useAxiosSecure();
    useEffect(() => {

        // fetch(`https://job-portal-server-blue.vercel.app/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))

        // axios.get(`https://job-portal-server-blue.vercel.app/job-application?email=${user.email}`, {withCredentials: true})
        // .then(res => setJobs(res.data));

        axiosSecure.get(`/job-application?email=${user.email}`)
        .then(res => setJobs(res.data));

    }, [user.email])
    return (
        <div className='w-[80%] mx-auto py-10'>
            <h2>My applications: {jobs.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                               
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                           
                          {
                            jobs.map(job => <tr key={job._id}>
                            
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.title}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">X</button>
                                </th>
                            </tr>)
                          }
                        </tbody>
                       
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;