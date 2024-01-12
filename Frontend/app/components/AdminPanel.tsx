"use client"
import React, { useState } from 'react';
import Image from "next/image";
import Hero from "../components/Hero";
import axios from 'axios';

const AdminPanel: React.FC = () => {
    const [text, setText] = useState('');
    const [updatedButtonText, setUpdatedButtonText] = useState('');
    const [isAdminPanelVisible, setIsAdminPanelVisible] = useState(false);
    const [url, setUrl] = useState('');
    const [file, setFile] = useState(null);

    const handleAdminPanelToggle = () => {
        setIsAdminPanelVisible((prev) => !prev);
    };

    const handleCloseModal = () => {
        setIsAdminPanelVisible(false);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    }

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            // Depending on the condition (buttonText or logoUrl), you can customize the request data
           handleSubmit(e);

    
            const response = await axios.post('http://localhost:8002/admin/updateButtonText', {
                newButtonText: text,
            });

            if (response.status === 200) {
                setText('');
                setUpdatedButtonText(response.data.buttonText);
            } else {
                console.error('Failed to update button text:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating button text:', error);
        }
    };



    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {


            const response = await axios.post('http://localhost:8002/admin/saveImage', {
                imageUrl: url,
            });
            if (response.status === 200) {
                // console.log(response.data);
                alert("Image Uploaded Successfully");
                setUrl('');
                setIsAdminPanelVisible(false);
            }
            else {
                console.error('Failed to update logo:', response.statusText);
            }

        } catch (error) {
            console.error('Error updating logo:', error);
        }


    }


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const formData = new FormData();
    //         formData.append('logoFile', file);
    //         console.log(file);
    
    //         const response = await axios.post('http://localhost:8002/admin/updateLogo', formData, { headers: {'Content-Type': 'multipart/form-data'}});
            
    
    //         if (response.status === 200) {
    //             console.log(response.data);
    //             setFile(null); // Clear the selected file after successful upload
    //         } else {
    //             console.error('Failed to update logo:', response.statusText);
    //         }
    //     } catch (error) {
    //         console.error('Error updating logo:', error);
    //     }
    // };
    





    return (
        <>
            <button onClick={handleAdminPanelToggle} className="mr-5 hover:cursor-pointer bg-zinc-100 text-gray-600  hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-zinc-100 dark:hover:bg-gray-300 dark:focus:black">
                Admin Panel
            </button>

            {isAdminPanelVisible && (
                <div className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-white">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="flex-1 text-xl font-semibold text-gray-900 dark:text-black text-center">
                                    Admin Panel
                                </h3>
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="authentication-modal"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" action="" encType="multipart/form-data" onSubmit={handleFormSubmit} >
                                    <div>
                                        <label
                                            htmlFor="Update Button Text"
                                            className="block mb-2 text-sm font-medium text-gray-100 dark:text-black"
                                        >
                                            Your Text
                                        </label>
                                        <input
                                            type="text"
                                            name="text"
                                            id="text"
                                            value={text}
                                            onChange={handleTextChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-100 dark:text-black"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="Enter the image url"
                                            className="block mb-2 text-sm font-medium text-gray-100 dark:text-black"
                                        >
                                            Enter the image url
                                        </label>
                                        <input
                                            type="text"
                                            name="url"
                                            id="url"


                                            value={url}
                                            onChange={handleUrlChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-100 dark:text-black"
                                        />
                                    </div>





                                    {/* file Upload */}
                                    {/* <label
                                        className="block mb-2 text-sm font-medium text-white dark:text-black"
                                        htmlFor="file_input"

                                    >
                                        Upload file
                                    </label>
                                    <input
                                        onChange={handleFileChange}
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-100"
                                        aria-describedby="file_input_help"
                                        id="file_input"
                                        type="file"
                                        accept="image/*"
                                    />

                                    <p
                                        className="mt-1 text-sm text-gray-500 dark:text-black"
                                        id="file_input_help"
                                    >
                                        SVG, PNG, JPG or GIF (MAX. 800x400px).
                                    </p> */}

                                    <button
                                        type="submit"
                                 
                                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Submit
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Hero updatedButtonText={updatedButtonText} />
        </>
    );
};

export default AdminPanel;
