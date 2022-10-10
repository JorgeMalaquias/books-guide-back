import { Request, Response } from 'express';
import * as titleService from '../services/titleServices';

export async function creating(req:Request,res:Response){
    
    const newTitle = await titleService.creating(req.body);
    res.status(201).send(newTitle);
}

export async function gettingTotal(req:Request,res:Response){
    
    const total = await titleService.gettingTotal();
    res.send({total});
}
