var multer = require('multer');
const path = require('path')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      // console.log(file);
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }



module.exports = {
 
upload : multer({ storage: storage, fileFilter: fileFilter }),

    uploadImage:async(req,res)=>{
        try {
            res.send({
                status:200,
                msg:'image uploaded'
            })
        } catch (error) {
            res.send({
                status:500,
                msg:`Something Went Wrong :${error}`
            })
        }
    }


}