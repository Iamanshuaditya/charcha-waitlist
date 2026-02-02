import { Pool } from 'pg';

// Use a global variable to preserve the connection across hot reloads in development
const globalForDb = global as unknown as { pool: Pool };

export const pool =
    globalForDb.pool ||
    new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }, // Required for Supabase pooling sometimes, or generally for cloud DBs
    });

if (process.env.NODE_ENV !== 'production') globalForDb.pool = pool;

export async function query(text: string, params?: any[]) {
    return pool.query(text, params);
}
