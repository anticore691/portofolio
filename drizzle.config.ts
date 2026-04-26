import { type Config } from "drizzle-kit";
import { env } from "~/env";

export default {
	schema: "./src/server/db/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	// INI KUNCINYA: Jangan biarkan drizzle narik data dari schema 'auth' atau 'extensions'
	schemaFilter: ["public"],
	verbose: true,
	strict: true,
} satisfies Config;