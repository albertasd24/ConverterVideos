import { existsSync, unlinkSync } from "fs";
import { join } from "path";
import { __dirname } from "../helpers/urlhandle.js";
import handbrake from 'handbrake-js';
import { spawn } from "child_process";
const removeVideoService = (file) => {
    const pathFile = join(__dirname, `/../documents/${file}`)
    if (existsSync(pathFile)) {
        unlinkSync(pathFile)
        return true
    }
    return false
}
const convertVideoMp4 = (file, res) => {
    const nameFile = file.split(".").shift();
    const inputFilePath = join(__dirname, `/../documents/${file}`);
    const outputFilePath = join(__dirname, `/../documents/${nameFile}.mp4`);
    const options = {
        input: inputFilePath,
        output: outputFilePath,
    };
    handbrake.spawn(options)
        .on('error', err => {
            console.error('Error:', err);
            return `Error:${err}`;
        })
        .on('progress', progress => {
            console.log('Progreso:', progress.percentComplete);
        })
        .on('complete', () => {
            console.log('Conversión completada');
            removeVideoService(file)
            res.status(200).send({ message: "El video fue convertido exitosamente", file:`${nameFile}.mp4` })
        });
}
export { convertVideoMp4, removeVideoService }