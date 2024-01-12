"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowEmails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to fetch emails from the API
        const response = await axios.get('https://digilabs-backend.onrender.com/admin/getEmails');

        // Update the state with the fetched emails
        setData(response.data.emails);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <>
       <div className="text-2xl font-bold text-black flex-1 mx-auto text-center justify-center mb-3">
  Emails List
</div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-black dark:text-gray-400">
          <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-gray-400 dark:text-gray-900">
            <tr>
             
              <th scope="col" className="px-6 py-3">
                 Serial No
              </th>
              <th scope="col" className="px-6 py-3">
                Emails
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id} className="bg-white border-b dark:bg-gray-100 dark:border-black">
              
                <td className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-black">
                {index + 1}
                </td>
                <td className="px-6 py-4 text-black">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowEmails;
