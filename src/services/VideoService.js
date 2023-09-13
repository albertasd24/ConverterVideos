import { existsSync, unlinkSync } from "fs";
import { join } from "path";
import { __dirname } from "../helpers/urlhandle.js";
import handbrake from 'handbrake-js';
import { spawn } from "child_process";
import { promisify } from "util";
const removeVideoService = (file) => {
    const pathFile = join(__dirname, `/../documents/${file}`)
    if (existsSync(pathFile)) {
        unlinkSync(pathFile)
        return true
    }
    return false
}
const convertVideoMp4 = async (file, res) => {
    const nameFile = file;
    console.log(nameFile);
    const inputFilePath = join(__dirname, `/../documents/${file}`);
    const outputFilePath = join(__dirname, `/../documents/${nameFile.split('.').shift()}.mp4`);
    const options = {
        input: inputFilePath,
        output: outputFilePath,
    };
    const spawnPromise = () => {
        return new Promise((resolve, reject) => {
            const hbProcess = handbrake.spawn(options)
                .on('error', err => {
                    console.error('Error:', err);
                    reject(`Error: ${err}`);
                })
                .on('progress', progress => {
                    console.log('Progreso:', progress.percentComplete);
                })
                .on('complete', () => {
                    console.log('Conversión completada');
                    resolve();
                });
        });
    };
    try {
        await spawnPromise();
        removeVideoService(file)
       return true;
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
    //  handbrake.spawn(options)
    //     .on('error', err => {
    //         console.error('Error:', err);
    //         return `Error:${err}`;
    //     })
    //     .on('progress', progress => {
    //         console.log('Progreso:', progress.percentComplete);
    //     })
    //     .on('complete', () => {
    //         console.log('Conversión completada');
    //         removeVideoService(file)
    //         res.status(200).send({ message: "El video fue convertido exitosamente", file:`${nameFile}.mp4` })
    //     });
}
export { convertVideoMp4, removeVideoService }