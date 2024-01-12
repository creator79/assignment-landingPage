// import { v2 as cloudinary } from "cloudinary";
const  cloudinary = require("cloudinary").v2;
const dotenv = require('dotenv');
dotenv.config();


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
})
console.log(cloudinary.config());


 const generateSignature = (req, res, next) => {
  const { folder } = req.body;
console.log("req.body:", JSON.stringify(req.body, null, 2));


  if (!folder) {
    res.status(400);
    return next(new Error("folder name is required"));
  }

  try {
    const timestamp = Math.round((new Date).getTime() / 1000);

    const signature = cloudinary.utils.api_sign_request({
      timestamp,
      folder
    }, process.env.CLOUDINARY_API_SECRET); 

    res.status(200).json({ timestamp, signature })
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
}

module.exports = { generateSignature };