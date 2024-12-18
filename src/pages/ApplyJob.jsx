import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';

const ApplyJob = () => {
     const {id} = useParams();
    //  console.log(id);
     const {user } = useContext(AuthProviderContext)
     const [error,setError] = useState('');
     const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();

        const github = e.target.github.value;
        const linkedIn = e.target.linkedIn.value;
        // console.log(linkedIn, github);

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            github,
            linkedIn
        }
        setError("");

        fetch('https://job-portal-server-blue.vercel.app/job-application', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert("Successfully applied")
            }
            navigate('/my-profile');
        })
       

    }
    return (
        <div className='w-[80%] mx-auto my-10'>
            <div>
            <form onSubmit={handleSubmit} className="card-body bg-gray-200">
                <h1 className="text-3xl font-bold mb-5 text-center">Apply now!</h1>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Github Link</span>
                        </label>
                        <input  type="url" placeholder="Github URL" name='github' className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                    <label className="label">
                            <span className="label-text">LinkedIn Link</span>
                        </label>
                        <input type="url" placeholder="LinkedIn URL" name='linkedIn' className="input input-bordered" required />
                        {
                            error && <label className="label text-red-600 text-xs">
                                {error}
                            </label>
                        }
                </div>
              
                    <div className="form-control mt-6">
                        <button className="btn btn-success">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplyJob;