import prisma from "../database/database";

export async function gettingUserByEmail(email:string){
    
    const user = await prisma.users.findUnique({
        where:{
            email
        }
    });
    return user;
}
export async function gettingUserById(id:number){
    const user = await prisma.users.findFirst({
        where:{
            id
        }
    });
    return user;
}


export async function registering(email:string,password:string,name:string, imageUrl:string){
    const user = await prisma.users.create({
        data: {
            email,
            password,
            name,
            imageUrl
        }
    });
    return user;
}

export async function gettingSearch(word:string) {
    const user = await prisma.users.findMany({
        where:{
            name:{
                contains: word
            }
        }
    });
    return user;
}

export async function gettingById(id:number) {
    const user = await prisma.users.findFirst({
        where:{
            id
        }
    });
    return user;
}