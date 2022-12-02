const express= require('express');
const multer= require('multer');
const upload = require('../controllers/saveFile');
const fileUpload= require('../util/handlefiles');
const router= express.Router();


router.post('/file',fileUpload.single('upfile'), upload )

module.exports = router