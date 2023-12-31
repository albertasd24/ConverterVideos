import { Router } from "express";
import { converterVideo } from "../controller/VideoController.js";
import fileUploadMiddleware from "../middleware/cargarArchivos.js";
import { validateFormartDocument } from "../middleware/validationFile.js";
const router = Router();

/**
 * @openapi
 * /coverterVideo:
 *   post:
 *     summary: Obtener todos los focos
 *     description: Obtiene todos lso focos de negocio registrados
 *     tags:
 *      - Video
 *     requestBody:
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 file:
 *                   type: string
 *                   format: binary   
 *                 tipo:
 *                    type: string
 *
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 archivo:
 *                   type: string
 *                   format: binary
 *                 
 *
 */
router.post("/coverterImage",fileUploadMiddleware, converterVideo);

export default router;