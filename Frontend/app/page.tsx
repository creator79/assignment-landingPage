import * as React from "react";
import Phone from "./phone.png";

import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Logos from "./components/Logos";
import Spending from "./components/Spending";
import Footer from "./components/Footer";
import ElevatedCard from "./components/ElevatedCard";
import Millions from "./components/Millions";
import Unlock from "./components/Unlock";
import AdminPanel from "./components/AdminPanel";
import Newsletter from "./components/NewsLetter";




export default function Page () {
  return (
    <div className="items-stretch bg-white flex flex-col">
    <Navbar />
    
     <AdminPanel />  
    <Logos />
    <ElevatedCard />
    <Spending />
    <Millions />
    <Testimonial />
    <Unlock />
    <Newsletter />
    <Footer />
    {/* <Upload /> */}
   
     
    
    
    
     
     
    
    </div>
  );
}

