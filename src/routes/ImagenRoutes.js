import { Router } from "express";
import fileUploadMiddleware from "../middleware/cargarArchivos.js";
import { converterImage } from "../controller/ImagenController.js";
const router = Router();

/**
 * @openapi
 * /coverterImage:
 *   post:
 *     summary: Obtener todos los focos
 *     description: Obtiene todos lso focos de negocio registrados
 *     tags:
 *      - Imagen
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
router.post("/coverterImage",fileUploadMiddleware, converterImage);

export default router;