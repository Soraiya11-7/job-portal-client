import React, { useEffect, useState } from 'react';
import Card from './card';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
          .then(res => res.json())
          .then(data => setJobs(data))
    }, [])
    return (
        <div className='my-10'>
           

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 border'>
          {
            jobs.map((job)=> <Card key={job._id} job={job}></Card>)
           }
          </div>
        </div>
    );
};

export default Jobs;