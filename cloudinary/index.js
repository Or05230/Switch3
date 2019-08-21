const crypto = require('crypto');
const cloudinary = require("cloudinary");
cloudinary.config({
    cloud_name: 'cloud_name', 
  api_key: 'api_key', 
  api_secret: process.env.CLOUDINARY_SECRET //will have an issue on heroku
});
const cloudinaryStorage = require('multer-storage-cloudinary');
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'switch',
  allowedFormats: ['jpeg', 'jpg', 'png'],
  filename: function (req, file, cb) {
  	let buf = crypto.randomBytes(16);
  	buf = buf.toString('hex');
  	let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png/ig, '');
  	uniqFileName += buf;
    cb(undefined, uniqFileName );
  }
});

module.exports = {
	cloudinary,
	storage
};