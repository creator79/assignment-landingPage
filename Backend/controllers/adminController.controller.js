const fs = require('fs');
const path = require('path');
const request = require('request');
const { isValidEmail, readDataFromFile, writeDataToFile } = require('../utils/emailValidation');


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
const updateButtonText = async (req, res, next) => {
  try {
    // Assuming buttonText is not a nested object in the request body
    let { buttonText } = req.body;

    // Validate that the required data is present
    if (!buttonText || typeof buttonText !== 'string') {
      return res.status(400).json({ error: 'Invalid buttonText provided' });
    }

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

// const submitEmail= async (req, res) => {
//   try {
//       const { email } = req.body;

//       if (!email) {
//           return res.status(400).json({ error: 'Email is required' });
//       }

//       // Store the email
//       submittedEmails.push(email);

//       // Respond with success message
//       res.json({ message: 'Email submitted successfully' });
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

const submitEmail = async (req, res) => {
  const dataFilePath = path.join(__dirname, '..', 'data.json');
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Read existing data from the file
    const existingData = readDataFromFile(dataFilePath);

    // Generate serial number based on existing data length
    const serialNumber = existingData.length + 1;

    // Add the new email with a serial number
    const newEmailData = { serialNumber, email };
    existingData.push(newEmailData);

    // Write the updated data back to the file
    writeDataToFile(dataFilePath, existingData);

    // Respond with success message
    res.json({ message: 'Email submitted successfully', serialNumber });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  updateLogo,
  updateButtonText,
  submitEmail,
};

