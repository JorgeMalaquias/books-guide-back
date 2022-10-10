import prisma from "../database/database";

export async function gettingByName(name:string){
    const author = await prisma.authors.findFirst({
        where: {
            name
        }
    });
    return author;
}

export async function creating(name:string){
    const author = await prisma.authors.create({
        data: {
            name
        }
    });
    return author;
}

export async function gettingTotal() {
    const total = await prisma.$executeRaw`SELECT COUNT(*) as "totalAuthors" FROM "Authors";`;
    return total;
}