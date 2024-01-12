// import express from "express";
// import { generateSignature } from "../controllers/sign-upload.js";
const express = require("express");
// import { generateSignature } from "../controllers/sign-upload.js";
const { generateSignature } = require("../controllers/sign-upload.js");


const router = express.Router();

// http://localhost:5000/api/sign-upload
router.post("/", generateSignature);

module.exports = router;