// multerConfig.js
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../Frontend/public/Images/Dynamic'));
  },
  filename: function (req, file, cb) {
    cb(null, 'logo.png');
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
