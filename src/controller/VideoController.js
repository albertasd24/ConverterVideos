import { convertVideoMp4, removeVideoService } from "../services/VideoService.js"

const converterVideo = async (req, res) => {
    try {
        const formatVideo = ["mov","avi","avi","mkv","wmv","avchd","flv","f4v","webm"];
        const nameFile = req.file.filename;
        if (formatVideo.includes(nameFile.split('.').pop())) {
            const responseConverter = await convertVideoMp4(nameFile, res);
            if (responseConverter) {
               res.send({"message":`Archivo convertido ${nameFile.split('.').shift()}.mp4`});
            } else {
                res.send({"message":`Error al convetir ${nameFile.split('.').shift()}.mp4`});
            }
        }else{
            res.send("video cargado")
        }
    } catch (error) {
        console.log(error);
        removeVideoService(req.file.filename)
    }
}
export { converterVideo }