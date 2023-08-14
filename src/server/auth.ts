import { type SolidAuthConfig } from "@solid-mediakit/auth";
import Discord from '@auth/core/providers/discord';
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./db";

declare module "@auth/core/types" {
    export interface Session {
      user?: DefaultSession["user"];
    }
}

export const authOptions : SolidAuthConfig = {
    adapter: DrizzleAdapter(db),
    providers: [
        Discord({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET
        })
    ],
    debug: false
}
