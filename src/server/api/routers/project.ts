import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { eq } from "drizzle-orm";

export const projectRouter = createTRPCRouter({
    getAll: publicProcedure
        .input(z.object({ limit: z.number().optional() }).optional())
        .query(async ({ ctx, input }) => {
            return await ctx.db.query.projects.findMany({
                limit: input?.limit,
                orderBy: (projects, { desc }) => [desc(projects.createdAt)],
            });
        }),
    
    getById: publicProcedure
        .input(z.object({ id: z.string().uuid() }))
        .query(async ({ ctx, input }) => {
            const project = await ctx.db.query.projects.findFirst({
                where: (projects, { eq }) => eq(projects.id, input.id),
            });
            return project ?? null;
        }),
});