// routes/adminPanel.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminHandler.controller');


router.post('/updateLogo', adminController.updateLogo);
router.post('/updateButtonText', adminController.updateButtonText);
router.post('/submitEmail', adminController.submitEmail);
router.get('/getEmails', adminController. getSubscribedEmails,);
router.post('/saveImage', adminController.saveImage);
router.get('/getAllImage', adminController.getAllImage);




module.exports = router;

