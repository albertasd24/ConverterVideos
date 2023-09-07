import { convertVideoMp4, removeVideoService } from "../services/VideoService.js"

const converterVideo = async (req, res) => {
    try {
        const responseConverter = convertVideoMp4(req.file.filename, res);
    } catch (error) {
        console.log(error);
        removeVideoService(req.file.filename)
    }
}
export { converterVideo }