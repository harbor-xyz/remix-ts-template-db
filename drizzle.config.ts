import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: 'app/drizzle',
  schema: 'app/drizzle/schema.server.ts',
  dialect: 'postgresql',
  driver: 'pglite',
  // ...(process.env.NODE_ENV !== 'production' && {
  //   driver: 'pglite',
  // }),
  dbCredentials: {
    url: process.env.DATABASE_URL || "_data",
  },
});
