var cloudinary = require('cloudinary').v2;


cloudinary.config({ 
  cloud_name: 'cloudinary', 
  api_key: '228326894266236', 
  api_secret: 'an_9usvzw_s-DTdnT2Hzb1ypank@hre2ge7zv' 
});

cloudinary.uploader.upload("./page1.jpg",(err)=>{
    if(err)
        return console.log(err);
});