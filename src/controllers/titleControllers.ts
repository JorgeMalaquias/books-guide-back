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

export async function gettingRecents(req:Request,res:Response){
    
    const titles = await titleService.gettingRecents();
    res.send(titles);
}

export async function gettingSearch(req:Request,res:Response){
    
    const titles = await titleService.gettingSearch(req.params.word);
    res.send(titles);
}
export async function gettingById(req:Request,res:Response){
    
    const title = await titleService.gettingById(Number(req.params.id));
    res.send(title);
}
