import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';
import Lottie from 'lottie-react';
import registerLottie from '../assets/Lottie/register.json'
import SocialLogin from '../shared/SocialLogin';
import axios from 'axios';
// import { FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const emailRef = useRef();
    const navigate = useNavigate();
    const { signInWithGoogle, loginUser, setMail } = useContext(AuthProviderContext);
    const [error, setError] = useState("");
    const location = useLocation();

    //Login with email, password
    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");
        // console.log(email,password);
        loginUser(email, password)
            .then((result) => {
                // console.log(result.user);

                // const user = {email: email}

                // axios.post('https://job-portal-server-blue.vercel.app/jwt',user, {withCredentials:true})
                // .then(res => {
                //     console.log(res.data);
                // })
                e.target.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch((err) => {
                const errorMessage = err.message;
                const errorCode = errorMessage.match(/\(([^)]+)\)/)?.[1];
                setError(errorCode || 'Unknown error');
                // setError(err.message);
            });

    }


    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left w-96">
                
               <Lottie animationData={registerLottie}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input ref={emailRef} type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                    <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                        {
                            error && <label className="label text-red-600 text-xs">
                                {error}
                            </label>
                        }
                </div>
              
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

                <SocialLogin></SocialLogin>

                <h2 className='text-sm sm:text-base text-center mb-6'>New to this website? <Link to='/auth/register' className='text-blue-500'>Create an account</Link></h2>
            </div>
        </div>
    </div>
    );
};

export default Login;