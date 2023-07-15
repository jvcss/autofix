import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const userCreated = {
    email: 'turing2@prisma.io',
    password: 'creator',
    posts: {
        create: {
            title: 'New Post',
        },
    },
}
const userUpdate = {
    id: 2,
    password: 'creator',
    posts: {
        create: {
            title: 'New Post 2',
        },
    },
}

async function main(){
    const user = await prisma.user.create({
        data: userUpdate
    })
    console.log(user)
}

main()
    .then(async () =>{
        await prisma.$disconnect()
    })
    .catch(async (e) =>{
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })