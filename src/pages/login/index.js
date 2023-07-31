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
                    })} className='w-100 btn btn-danger mb-4' >
                        <span className='d-flex justify-content-between'><span>Login with Google</span>
                            <AiOutlineGoogle size="24px" /></span>
                    </button>
                    <button onClick={() => signIn("github", {
                        callbackUrl: "https://kbutsho-pc-builder-client.vercel.app"
                    })} className='w-100 btn btn-primary'>
                        <span className='d-flex justify-content-between'><span>Login with GitHub</span>
                            <AiFillGithub size="24px" /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;


