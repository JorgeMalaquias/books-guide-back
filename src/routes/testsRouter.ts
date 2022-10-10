import { Router } from 'express';
import {testsController} from '../controllers/testsController';

export const testsRouter = Router();


testsRouter.post("/reset", testsController.resetDatabase);
testsRouter.post("/seed", testsController.seed);

