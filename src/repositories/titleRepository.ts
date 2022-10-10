import prisma from "../database/database";
import { ITitle } from "../types/titleTypes";

export async function creating(name:string, imageUrl:string, authorId:number,publisherId:number,description:string){
    const title = await prisma.titles.create({
        data: {
            name,
            imageUrl,
            authorId,
            publisherId,
            description
        }
    });
    return title;
}