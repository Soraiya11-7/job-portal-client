import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from '../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    const navigate = useNavigate();
    const { signInWithGoogle } = useContext(AuthProviderContext);
    const [error, setError] = useState("");
    const location = useLocation();
         
const handleLoginWithGoogle = () => {
    signInWithGoogle()
        .then(() => {
            navigate(location?.state ? location.state : '/');
        })
        .catch((err) => {
            const errorMessage = err.message;
            const errorCode = errorMessage.match(/\(([^)]+)\)/)?.[1];
            setError(errorCode || 'Unknown error');
        });
}
    return (
        <div>
              <div className=" divider my-4 w-[80%] mx-auto">
                    OR
                </div>
                <div className='flex justify-center items-center mb-6'>
                    <button onClick={handleLoginWithGoogle} className='p-1 sm:p-2 flex items-center gap-1 rounded-xl border text-base sm:text-lg hover:border-teal-600'><FcGoogle className='text-base sm:text-lg'></FcGoogle> Login with Google</button>
                </div>
        </div>
    );
};

export default SocialLogin;