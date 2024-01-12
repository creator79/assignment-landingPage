const fs = require('fs');
const path = require('path');
const request = require('request');
const { isValidEmail, readDataFromFile, writeDataToFile } = require('../utils/emailValidation');

const upload = require('../middlewares/multerConfig.middlewares');
const Email = require('../models/Email.model');
const Image = require('../models/image.model');



const updateLogo = async (req, res, next) => {
  try {
    const { logoUrl } = req.body;
    if (!logoUrl) {
      throw new Error('Logo URL is required');
    }

    const localImagePath = path.join(__dirname, '../../Frontend/public/Images/Dynamic', 'logo.png');

    await downloadImage(logoUrl, localImagePath);

    res.json({ message: 'Logo updated successfully' });
  } catch (error) {
    //  set error  status code
    next(error);

  }
};

// controllers/imageController.js

const saveImage = async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ error: 'Image URL is required' });
    }

    const newImage = new Image({ imageUrl });
    const savedImage = await newImage.save();

    res.json({ message: 'Image saved successfully', data: savedImage });
  } catch (error) {
    console.error('Error saving image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllImage = async (req, res) => {

    try {
      const allImages = await Image.find({}, 'imageUrl').sort({ createdAt: 'desc' });
      res.json({ images: allImages });
    } catch (error) {
      console.error('Error fetching images:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }




// logoController.js

// const updateLogo = async (req, res, next) => {
//   try {
//     upload.single('logo')(req, res, (err) => {
  
//       res.json({ message: 'Logo updated successfully' });
//     });
//   } catch (error) {
//     next(error);
//   }
// };
// module.exports = { updateLogo};


















const updateButtonText = async (req, res, next) => {
  try {
 
    const newButtonText = req.body.newButtonText;

    // Validate that the required data is present
    if (!newButtonText || typeof newButtonText !== 'string') {
      return res.status(400).json({ error: 'Invalid newButtonText provided' });
    }

    // Perform the actual update
    buttonText = newButtonText;
    // console.log(buttonText);
    // Respond with success
    res.json({ message: 'Button text updated successfully', buttonText });
  } catch (error) {
    // Handle unexpected errors
    console.error('Error updating button text:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Helper function to download an image from a URL

function downloadImage(url, destination) {
  request(url)
    .pipe(fs.createWriteStream(destination))
    .on('close', () => {
      console.log('Image downloaded successfully!');
    })
    .on('error', (err) => {
      console.error('Error downloading the image:', err);
    });
}



// const submitEmail = async (req, res) => {
//   const dataFilePath = path.join(__dirname, '..', 'data.json');
//   try {
//     const { email } = req.body;

//     if (!email) {
//       return res.status(400).json({ error: 'Email is required' });
//     }

//     if (!isValidEmail(email)) {
//       return res.status(400).json({ error: 'Invalid email format' });
//     }

//     // Read existing data from the file
//     const existingData = readDataFromFile(dataFilePath);

//     // Generate serial number based on existing data length
//     const serialNumber = existingData.length + 1;

//     // Add the new email with a serial number
//     const newEmailData = { serialNumber, email };
//     existingData.push(newEmailData);

//     // Write the updated data back to the file
//     writeDataToFile(dataFilePath, existingData);

//     // Respond with success message
//     res.json({ message: 'Email submitted successfully', serialNumber });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

const submitEmail = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Create a new Email instance with the provided email
    const newEmail = new Email({ email });

    // Save the email data to MongoDB
    await newEmail.save();

    // Respond with success message
    res.json({ message: 'Email submitted successfully', email: newEmail });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSubscribedEmails = async (req, res) => {
  try {
    // Fetch all emails from MongoDB
    const emails = await Email.find();

    // Respond with the emails
    res.json({ emails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




module.exports = {
  updateLogo,
  updateButtonText,
  submitEmail,
  getSubscribedEmails,
  saveImage,
  getAllImage,
};

