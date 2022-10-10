import { Router } from "express";
import { validatingToken } from "../middlewares/validateToken";
import { validateSchemaMiddleware } from "../middlewares/validateSchema";
import { titleSchema } from "../schemas/titleSchemas";
import { creating, gettingTotal,gettingRecents, gettingSearch } from "../controllers/titleControllers";

const titleRoutes = Router();

titleRoutes.post('/titles',validatingToken, validateSchemaMiddleware(titleSchema), creating);
titleRoutes.get('/titles/total', gettingTotal);
titleRoutes.get('/titles/recents', gettingRecents);
titleRoutes.get('/titles/search/:word', gettingSearch);


export default titleRoutes;