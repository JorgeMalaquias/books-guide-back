import { Request, Response } from 'express';
import * as authService from '../services/authServices';

export async function registering(req:Request,res:Response){
    
    const newuser = await authService.registering(req.body);
    res.status(201).send(newuser);
}

export async function logging(req:Request,res:Response){

    const token = await authService.logging(req.body);
    res.status(200).send({token});
    
}
export async function gettingSearch(req:Request,res:Response){
    
    const users = await authService.gettingSearch(req.params.word);
    res.send(users);
}

export async function gettingById(req:Request,res:Response){
    
    const user = await authService.gettingById(Number(req.params.id));
    res.send(user);
}