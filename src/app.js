import Express from "express";
import { __dirname } from "./helpers/urlhandle.js";
import { join } from "path";
import handbrake from 'handbrake-js';
const app = Express();
const PORT = 3200;

const inputFilePath = join(__dirname, "/../documents/video.3gp");
const outputFilePath = join(__dirname, "/../documents/video.mp4");

const options = {
  input: inputFilePath,
  output: outputFilePath,
};

app.get("/", (req, res)=>{
    handbrake.spawn(options)
    .on('error', err => {
      console.error('Error:', err);
    })
    .on('progress', progress => {
      console.log('Progreso:', progress.percentComplete);
    })
    .on('complete', () => {
      console.log('Conversión completada');
    });
    res.send("Hello")
})

app.listen(PORT, (err) => {
    console.log("Server runing in port:", PORT || 3000);
});
