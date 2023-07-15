import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const userCreated = {
    name: 'Alan',
    email: 'turing@prisma.io',
    password: 'creator'
}

async function main() {
  // ... you will write your Prisma Client queries here
  //const users = await prisma.user.findMany()
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(usersWithPosts, { depth: null })
  //console.log(usersWithPosts)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })