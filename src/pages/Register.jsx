import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import registerLottie from '../assets/Lottie/register.json'
import { AuthProviderContext } from '../Provider/AuthProvider';

const Register = () => {

        const navigate = useNavigate();
        const { createUser, user, setUser, updateUserProfile, signInWithGoogle } = useContext(AuthProviderContext);
        const location = useLocation();
        const [error, setError] = useState("");
        const [showSecretKey, setShowSecretKey] = useState(false);
    
        const handleRegistration = (e) => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            const name = form.name.value;
            setError("");
            if (password.length < 6) {
                setError("password must contain at least 6 character")
                return;
            }
            if (!/[a-z]/.test(password)) {
                setError("password must contain at least one  Lowercase letter");
                return;
            }
            if (!/[A-Z]/.test(password)) {
                setError("password must contain at least one  Uppercase letter");
                return;
            }
    
            // console.log({name, email, password, image});
    
            createUser(email, password)
                .then((res) => {
                    console.log(res.user);
                    setUser(res.user)
                    updateUserProfile({ displayName: name })
                        .then(() => {
                            setUser({
                                ...res.user,
                                displayName: name,
                               
                            });
                            navigate('/my-profile');
                        })
                        .catch((err) => {
    
                            const errorMessage = err.message;
                            const errorCode = errorMessage.match(/\(([^)]+)\)/)?.[1];
                            setError(errorCode || 'Unknown error');
                        })
                    e.target.reset();
    
                })
                .catch((err) => {
                    const errorMessage = err.message;
                    const errorCode = errorMessage.match(/\(([^)]+)\)/)?.[1];
                    setError(errorCode || 'Unknown error');
                });
        }

            //Login with Google
    // const handleLoginWithGoogle = () => {
    //     signInWithGoogle()
    //         .then(() => {
    //             navigate(location?.state ? location.state : '/');
    //         })
    //         .catch((err) => {
    //             const errorMessage = err.message;
    //             const errorCode = errorMessage.match(/\(([^)]+)\)/)?.[1];
    //             setError(errorCode || 'Unknown error');
    //         });
    // }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    
                   <Lottie animationData={registerLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
                    <form onSubmit={handleRegistration} className="card-body">
                    <h1 className="text-5xl font-bold mb-5">Register now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input
                            type={showSecretKey ? 'text' : 'password'}
                            placeholder="password"
                            name="password"
                            className="input input-bordered" required />

                        <button type="button" onClick={() => setShowSecretKey(!showSecretKey)} className="absolute btn btn-xs top-12 right-2">
                            {
                                showSecretKey ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                            }
                        </button>

                    </div>
                    {
                        error && <label className="label text-xs text-red-600">
                            {error}
                        </label>
                    }
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;