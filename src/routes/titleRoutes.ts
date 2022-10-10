import { Router } from "express";
import { validatingToken } from "../middlewares/validateToken";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { titleSchema } from "../schemas/titleSchemas";
import { creating } from "../controllers/titleControllers";

const titleRoutes = Router();

titleRoutes.post('/titles',validatingToken, validateSchemaMiddleware(titleSchema), creating);


export default titleRoutes;