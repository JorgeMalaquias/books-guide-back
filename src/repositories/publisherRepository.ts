import prisma from "../database/database";

export async function gettingByName(name:string){
    const publisher = await prisma.publishers.findFirst({
        where: {
            name
        }
    });
    return publisher;
}

export async function creating(name:string){
    const publisher = await prisma.publishers.create({
        data: {
            name
        }
    });
    return publisher;
}