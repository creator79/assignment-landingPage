// Newsletter.jsx
"use client"

import React, { useState } from 'react';
import axios from 'axios';


const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            // Validate email (add your own validation logic if needed)

            // Make a POST request to the server
            const response = await axios.post('http://localhost:8002/admin/submitEmail', {
                email: email,
            });

            // Check the response status
            if (response.status === 200) {
                // Reset the form and handle success if needed
                setEmail('');
                setSuccessMessage('Email submitted successfully!');
                setTimeout(() => {
                    setSuccessMessage(null);
                }, 3000); // Clear success message after 3 seconds
            } else {
                // Handle unexpected response status
                setError('Unexpected response status: ' + response.status);
                setTimeout(() => {
                    setError(null);
                }, 3000);
            }
        } catch (error) {
            // Handle errors (network error, server error, etc.)
            setError('Error submitting email: ' + error.message);
            setTimeout(() => {
                setError(null);
            }, 3000);
        }
    };

    return (
        <div className='w-full py-10 text-black bg-white px-4 '>
            <div className='border-2  border-[#c8c1ed] px-8'>
                <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
                    <div className='lg:col-span-2 my-4'>
                        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                            Want tips & tricks to optimize your flow?
                        </h1>
                        <p>Sign up to our newsletter and stay up to date.</p>
                    </div>
                    <div className='my-4'>
                        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                            <input
                                className='p-3 flex w-full rounded-md text-black'
                                type='email'
                                placeholder='Enter Email'
                                value={email}
                                onChange={handleInputChange}
                            />
                            <button
                                className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'
                                onClick={handleSubmit}
                            >
                                Notify Me
                            </button>
                        </div>
                        <p>
                            We care bout the protection of your data. Read our{' '}
                            <span className='text-[#00df9a]'>Privacy Policy.</span>
                        </p>
                        {error && <p className='text-red-600'>{error}</p>}
                        {successMessage && <p className='text-green-600'>{successMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;

