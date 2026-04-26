import { projectRouter } from "~/server/api/routers/project";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * Main router buat aplikasi lo.
 */
export const appRouter = createTRPCRouter({
	project: projectRouter,
});

// Export type definition buat API
export type AppRouter = typeof appRouter;

/**
 * INI YANG HILANG TADI:
 * Create a server-side caller buat tRPC API.
 * Dipake sama Server Components di src/trpc/server.ts
 */
export const createCaller = createCallerFactory(appRouter);