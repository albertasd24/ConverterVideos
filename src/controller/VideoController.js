import { writeFile } from "fs";
import { convertVideoMp4, convertirVideoServicio, removeVideoService, saveFile } from "../services/VideoService.js"
import { __dirname } from "../helpers/urlhandle.js";
import { join } from "path";

const converterVideo = async (req, res) => {
    try {
        const archivo = req.file;
        const newName = `${Date.now() + "ASD2_" + archivo.originalname}`
        console.log(archivo);
        console.log(req.body);
        const rutaArchivo = join(__dirname,`../documents/`)
        const format = req.body.tipo;
        const filePath = await saveFile(archivo.buffer, newName, rutaArchivo);
        // res.send(filePath);
        const formatVideo = ["mov","avi","avi","mkv","wmv","avchd","flv","f4v","webm", "mp4"];
        // const nameFile = req.file.filename;
        if (formatVideo.includes(newName.split('.').pop())) {
            console.log("controler");
           const file = await convertirVideoServicio(newName, format);
           console.log(file);
           res.send(file);
        }
        //     const responseConverter = await convertVideoMp4(nameFile, res);
        //     if (responseConverter) {
        //        res.send({"message":`Archivo convertido ${nameFile.split('.').shift()}.mp4`});
        //     } else {
        //         res.send({"message":`Error al convetir ${nameFile.split('.').shift()}.mp4`});
        //     }
        // }else{
        //     res.send("video cargado")
        // }
    } catch (error) {
        console.log(error);
        removeVideoService(req.file.filename)
    }
}
export { converterVideo }