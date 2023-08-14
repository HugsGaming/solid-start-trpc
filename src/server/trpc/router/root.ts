import { procedure, router } from "../utils";
import { z } from "zod";

export const appRouter = router({
    hello: procedure.input(z.object({ name: z.string() })).query(({ input, ctx }) => {
        return `Hello ${input.name}`;
    })
});

export type IAppRouter = typeof appRouter;
