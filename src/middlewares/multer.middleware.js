import multer from "multer";
import crypto from "crypto";
import path from "path";
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/temp");
    },
    filename:function(req,file,cb){
        const prefix = crypto.randomBytes(12).toString("hex");
        cb(null,prefix+path.extname(file.originalname))
    }
})

export const upload = multer({storage})