import prisma from "../database/database";
import { ITitle } from "../types/titleTypes";

export async function creating(name: string, imageUrl: string, authorId: number, publisherId: number, description: string) {
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
export async function getting(name: string, imageUrl: string, authorId: number, publisherId: number, description: string) {
    const title = await prisma.titles.findFirst({
        where: {
            name,
            imageUrl,
            authorId,
            publisherId,
            description
        }
    });
    return title;
}

export async function gettingTotal() {
    const total = await prisma.titles.aggregate({
        _count: {
            id:true
        }
    });
    return total._count.id;
}
export async function gettingRecents() {
    const title = await prisma.titles.findMany({
        orderBy:{
            createdAt: 'desc'
        }
    });
    return title;
}
export async function gettingSearch(word:string) {
    const title = await prisma.titles.findMany({
        where:{
            name:{
                contains: word
            }
        }
    });
    return title;
}