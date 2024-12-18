import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({job}) => {
    // console.log(job);

    const {_id, title, salaryRange} = job;
    const navigate = useNavigate();
    return (
        <div className=' p-10 bg-slate-400 rounded-xl'>
            <h2>{title}</h2>
            <h3>{salaryRange.min}-{salaryRange.max} {salaryRange.currency}</h3>
            <button onClick={() => navigate(`/apply/${_id}`)} className='btn my-2 hover:bg-teal-600 hover:font-bold hover:text-white'>Apply Now</button>
        </div>
    );
};

export default Card;