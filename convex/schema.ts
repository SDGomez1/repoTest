import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({

    ips: defineTable({
        ipNumber: v.string()
    })
});
