import 'dotenv/config';

import { PGlite } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';

import * as schema from './schema.server'

// Initialize PGlite client
const client = new PGlite(process.env.DATABASE_URL || '_data');

// Create Drizzle instance with schema
export const db = drizzle(client, { schema });

// Export schema for type inference
export type Schema = typeof schema;
