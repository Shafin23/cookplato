import React from 'react';

const LoginForm = ({ isLogin }) => {
    return (
        <div className= {isLogin?"block":"hidden"}>
            <form action="">
                <input
                    type="text"
                    placeholder='username or email address'
                    className=' border w-full px-3 py-2 rounded mb-3'
                />

                <div className=' border rounded mb-3 bg-white w-full flex justify-between items-center'>
                    <input
                        type="password"
                        placeholder='password'
                        className=' w-[80%] px-3 py-2 focus:outline-none'
                    />
                    <span className=' text-amber-300 w-[20%] flex justify-center items-center text-sm'>Forgot?</span>
                </div>

                <label htmlFor="rememberMe">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        name="rememberMe"
                    />
                    <span className=' ms-1 text-gray-700'>
                        Remember me
                    </span>
                </label>


                <button className=' btn w-full hover:bg-[#fab250]  bg-[#fab250] mt-7 rounded font-semibold  text-base'>Log in</button>
            </form>
        </div>
    );
};

export default LoginForm;