import { join } from "path";
import { __dirname } from "../helpers/urlhandle.js";
import multer from "multer";

const saveLocation = multer.diskStorage({
    destination: join(__dirname, "/../documents"),
    filename: (req, file, cb) => {
        const prefijoUnico = Math.round(Math.random() * 1e5);
        cb(null, prefijoUnico + "_" + file.originalname);
    },
});

const fileUploadMiddleware = multer({
    limits: { fileSize: 20000000 },
    storage: saveLocation,
    dest: join(__dirname, "/../documents"),
    fileFilter: (req, file, cb) => {
            cb(null, true);   
    }
}).single("file");

export default fileUploadMiddleware