const multer= require('multer')
const path = require('path');
const fileStorage = multer.diskStorage({
    // destination to store file upload
    destination: 'fileUploads',
    filename: (req,file, cb)=> {
        cb(null, file.fieldname + '_'+ Date.now()+ path.extname(file.originalname))
        // where file.fieldname is name of the field (image)
        // path.extname get the uploaded file extension

    }
})


const fileUpload = multer({
    storage: fileStorage,
    limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb){
        if (file.originalname.match(/^$/)){
            // uplaod on png and jpg format
            return cb(new Error ('Please upload a file'))
        }
        cb(undefined, true)
    }
})

module.exports= fileUpload;

