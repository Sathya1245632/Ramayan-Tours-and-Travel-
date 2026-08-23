import { PrismaClient } from '@prisma/client';
import { Pool } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';

// Prevent multiple instances of Prisma Client in development (hot reload issue)
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        // Return lightweight PrismaClient instance when no DB is configured
        return new PrismaClient({
            log: ['error'],
        });
    }

    try {
        const pool = new Pool({ connectionString });
        const adapter = new PrismaNeon(pool);
        return new PrismaClient({
            adapter,
            log: ['error'],
        });
    } catch {
        return new PrismaClient({
            log: ['error'],
        });
    }
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
