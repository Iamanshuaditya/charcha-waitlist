import { NextRequest, NextResponse } from 'next/server';
import { pool } from '@/lib/db';

const BASE_COUNT = 1000; // Starting offset to show existing interest

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Ensure table exists (Lazy initialization for simplicity)
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS email_list (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
        await pool.query(createTableQuery);

        // Insert email
        const insertQuery = `
      INSERT INTO email_list (email)
      VALUES ($1)
      ON CONFLICT (email) DO NOTHING
      RETURNING id;
    `;

        await pool.query(insertQuery, [email]);

        // Get the updated count
        const countResult = await pool.query('SELECT COUNT(*) as count FROM email_list');
        const count = parseInt(countResult.rows[0].count, 10) + BASE_COUNT;

        return NextResponse.json({ success: true, message: 'Joined the waitlist!', count });
    } catch (error: any) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error', details: error.message },
            { status: 500 }
        );
    }
}
