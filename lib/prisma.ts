import { PrismaClient} from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV == 'development') 
    global.prisma = prisma;

//creates a global variable called prisma and initializes it 
//with an instance of the PrismaClient class. 
//This allows other parts of the application to interact with the Prisma database.
export default prisma;