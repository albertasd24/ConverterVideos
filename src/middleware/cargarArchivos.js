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
        if (file.originalname.match(/\.(mov|mp4|avi|mkv|)$/)) {
            cb(null, true);
          } else {
            cb(new Error('Invalid file type. Only video files are allowed.'));
          }
    }
}).single("file");

export default fileUploadMiddleware