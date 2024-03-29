"use client"
import React, { useState,useEffect } from 'react'
import Image from "next/image";
import AdminPanel from './AdminPanel';
import axios from 'axios';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isAdminPanelVisible, setIsAdminPanelVisible] = useState(false);
  const [data, setData] = useState([]);



  const handleAdminPanelToggle = () => {
    setIsAdminPanelVisible(!isAdminPanelVisible);
  };

  const handleCloseModal = () => {
    setIsAdminPanelVisible(false);
  };

  useEffect(() => {
    // Fetch images when the component mounts
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://digilabs-backend.onrender.com/admin/getAllImage');
        // Log the fetched data for debugging
       
  
        // Find the length of the images array
        const length = response.data.images.length;
  
        // Set the state with the last image URL
        console.log(JSON.stringify(response.data.images[length - 1] )+ "image");
        setData([response.data.images[length - 1]]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  
    // Call the fetchImages function when the component mounts
    fetchImages();
  }, []);

  return (
    <>


      <div className="justify-center items-center border-b-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col px-16 py-2 border-b border-solid max-md:max-w-full max-md:px-5">
        <div className="justify-center items-stretch flex gap-4 max-md:max-w-full max-md:flex-wrap">
          <div className="text-zinc-700 text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch border border-[color:var(--Neutral-1000,#E6E7E9)] bg-zinc-100 px-2 py-1 rounded-[240px] border-solid">
            Announcement
          </div>
          <div className="text-neutral-900 text-center text-sm font-medium leading-5 self-center grow my-auto max-md:max-w-full">
            We are happy to announce that we raise $2 Million in Seed Funding
          </div>
        </div>
      </div>


      {/* new nav */}

      <nav className="bg-white  border-b-[color:var(--Neutral-1000,#E6E7E9)] border-b border-solid  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a

            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {
            
            data.map((item ,index) => (
              <Image
              loading="lazy"
              key={item.id}
              src={item.imageUrl }
              alt='Image'
              height={100}
              width={100}

              className="aspect-[5.25] object-contain object-center w-[20rem] fill-neutral-900 overflow-hidden shrink-1 max-w-full my-auto"
              />
            
            ))
            }

            {/* <Image
              loading="lazy"
              src="https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg"
              alt='Image'
              height={1000}
              width={1000}

              className="aspect-[5.25] object-contain object-center w-[20rem] fill-neutral-900 overflow-hidden shrink-1 max-w-full my-auto"
            /> */}

          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0">

       




            <button
              type="button"
              className="bg-zinc-100 text-gray-600  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-zinc-100 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </button>
            <Image
              loading="lazy"
              src="/Images/Exit.svg"
              alt='Image'
              height={100}
              width={100}

              className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"

            />
   
   

            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Card access
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-black md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Banking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Processing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Carrier
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-white rounded hover:bg-black md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <AdminPanel isVisible={isAdminPanelVisible} onClose={handleCloseModal}  changeData={""}/> */}
    </>
  )
}

export default Navbar