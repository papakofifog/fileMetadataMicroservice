const uploadImage= require('../util/handlefiles')
const upload= ((req,res)=>{
    //res.send(req.file)
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    })
})

module.exports= upload;

