import { Head, Title } from "solid-start";
import { AuthShowcase } from "~/components/AuthShowcase";
import { trpc } from "~/utils/trpc";

export default function Home() {
  const helloQuery = trpc.hello.useQuery(() => ({name: "World"}));
  return (
    <>
      <Head>
        <Title>Home</Title>
      </Head>
      <main class="flex flex-col items-center justify-center gap-4">
        <span class="text-xl text-black">Welcome to Solid Auth</span>
          {helloQuery.data}
        <AuthShowcase/>
      </main>
    </>
  );
}
