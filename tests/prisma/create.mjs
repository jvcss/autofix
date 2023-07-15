import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const userCreated = {
    email: 'turing@prisma.io',
    password: 'creator'
}

async function main() {
  // ... you will write your Prisma Client queries here
  const user = await prisma.user.create({
    data: userCreated,
  })
  console.log(user)
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