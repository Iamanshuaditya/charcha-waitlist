import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';

const BASE_COUNT = 1000; // Starting offset to show existing interest

export async function GET() {
    try {
        // Ensure table exists
        await pool.query(`
            CREATE TABLE IF NOT EXISTS email_list (
                id SERIAL PRIMARY KEY,
                email TEXT UNIQUE NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `);

        // Get the count of emails in the waitlist
        const result = await pool.query('SELECT COUNT(*) as count FROM email_list');
        const count = parseInt(result.rows[0].count, 10) + BASE_COUNT;

        return NextResponse.json({ count });
    } catch (error: any) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: error.message },
            { status: 500 }
        );
    }
}
