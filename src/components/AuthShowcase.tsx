import { createSession, signIn, signOut } from "@solid-mediakit/auth/client";
import { Show, type VoidComponent } from 'solid-js'

export const AuthShowcase : VoidComponent = () =>  {
    const session = createSession();
    return (
        <div class="flex flex-col items-center justify-center gap-4">
            <Show
                when={session()}
                fallback={
                    <button
                        class="rounded-full bg-black/50 px-10 py-3 font-semibold text-white no-underline transition hover:bg-black/70"
                        onClick={() => signIn('discord')}>
                        Sign In
                    </button>
                }>
                <span class='text-xl text-black'>
                    Hello there {session()?.user?.name}
                </span>
                <button
                    onClick={() => signOut({ redirectTo: '/' })}
                    class='rounded-full bg-black/50 px-10 py-3 font-semibold text-white no-underline transition hover:bg-black/70'
                >
                    Sign out
                </button>
            </Show>
        </div>
    )
}
