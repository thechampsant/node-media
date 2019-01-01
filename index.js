var cloudinary = require('cloudinary')
cloudinary.uploader.upload("logo.png",
function(result) { console.log(result) });