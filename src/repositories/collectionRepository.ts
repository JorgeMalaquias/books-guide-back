import prisma from "../database/database";

export async function creating( userId: number, titleId: number) {
    const item = await prisma.collections.create({
        data: {
            userId,
            titleId
        }
    });
    return item;
}
export async function deleting( userId: number, titleId: number) {
    const item = await prisma.collections.deleteMany({
        where: {
            userId,
            titleId
        }
    });
    return item;
}