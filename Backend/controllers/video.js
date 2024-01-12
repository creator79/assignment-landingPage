// import Video from "../models/Video.js";
const Video = require("../models/image.model");

 const createVideo = async (req, res, next) => {
  const { imgUrl } = req.body;
  console.log(req.body);

  if (!imgUrl) {
    res.status(400);
    return next(new Error("imgUrl & videoUrl fields are required"));
  }

  try {
    const video = await Video.create({
      imgUrl,
    });

    res.status(201).json({
      success: true,
      video,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
}

module.exports = { createVideo };