import type { Config } from 'drizzle-kit';

export default {
    schema: './src/server/db/schema/*',
    out: './drizzle',
    dbCredentials: {
        url: './src/server/db/sqlite.db'
    },
    driver: 'better-sqlite'
} satisfies Config