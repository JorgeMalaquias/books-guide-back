import prisma from "../database/database";

 async function reseting() {
  return prisma.users.deleteMany();
}

 async function seeding() {
  return prisma.users.createMany({
    data: [
      { name: 'jaja', email:'jaja@email.com',imageUrl:'https://i.pinimg.com/originals/a4/90/47/a49047d73e5644961b123aa48790d5c8.jpg', password: '1122' },
      { name: 'esclodosvaldo', email:'esclodosvaldo@email.com',imageUrl:'https://i.pinimg.com/originals/a4/90/47/a49047d73e5644961b123aa48790d5c8.jpg', password: '1122' },
    ],
    skipDuplicates: true,
  })
}

export const testsRepository = {
    reseting,
    seeding
}