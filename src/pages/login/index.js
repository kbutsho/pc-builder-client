import React from 'react';
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai';
import { signIn } from "next-auth/react";

const Login = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div className='login-form'>
                <div>
                    <button onClick={() => signIn("google", {
                        callbackUrl: "https://kbutsho-pc-builder-client.vercel.app"
                    })} className='w-100 btn btn-outline-danger mb-4'>
                        <span>Login with Google</span>
                        <AiOutlineGoogle size="24px" className='ms-4' />
                    </button>
                    <button onClick={() => signIn("github", {
                        callbackUrl: "https://kbutsho-pc-builder-client.vercel.app"
                    })} className='w-100 btn btn-outline-primary'>
                        <span> Login with GitHub</span>
                        <AiFillGithub size="24px" className='ms-4' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;


