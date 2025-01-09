import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addIp = mutation({
    args: { ip: v.string() },
    handler: async (ctx, args) => {
        const newTaskId = await ctx.db.insert("ips", { ipNumber: args.ip });
    },
});
