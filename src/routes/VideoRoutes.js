import { Router } from "express";
import { converterVideo } from "../controller/VideoController.js";
import fileUploadMiddleware from "../middleware/cargarArchivos.js";
const router = Router();
router.get("/");

router.post("/uploadVideo", fileUploadMiddleware, converterVideo);

export default router;