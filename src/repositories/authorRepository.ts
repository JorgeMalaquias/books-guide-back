import prisma from "../database/database";

export async function gettingById(id:number){
    const author = await prisma.authors.findUnique({
        where: {
            id
        }
    });
    return author;
}