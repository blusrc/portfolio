import { AnimatedTabsHover } from "@/components/header-tabs";
import { ModeToggle } from "@/components/theme-switcher";
import { buttonVariants } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Editscape",
    description: "A content creation tool for the Jobescape Academy.",
    image: "/editscape/thumbnail.png",
    link: "/projects/editscape",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-dvh [background-image:radial-gradient(#F9F9F9_1px,transparent_1px)] [background-size:24px_24px] dark:[background-image:radial-gradient(#191919_1px,transparent_1px)]">
      <header className="sticky top-0 bg-background/80 backdrop-blur-2xl border-b border-dashed w-full flex items-center justify-center z-10">
        <div className="max-w-screen-xl h-14 border-dashed w-full flex items-center justify-between px-4 xl:border-x lg:px-8">
          <Link
            href="/"
            className="text-sm font-bold tracking-tighter text-muted-foreground whitespace-nowrap"
          >
            aldiyar serikov
          </Link>

          <div className="hidden md:block">
            <AnimatedTabsHover />
          </div>

          <div className="flex items-center gap-2">
            <ModeToggle />

            <a
              className={cn(
                buttonVariants(),
                "select-none hover:cursor-default"
              )}
              href="https://t.me/surugejutsu"
            >
              Reach out
            </a>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-screen-xl xl:border-x border-dashed w-full flex-col flex justify-center lg:p-8 p-4 gap-12">
        <section className="my-36 leading max-w-2xl">
          <TextEffect
            as="h2"
            per="word"
            preset="blur"
            className="text-lg md:text-2xl md:leading-10 text-foreground/80 tracking-wide"
          >
            Recent work (WIP)
          </TextEffect>
        </section>

        <section className="flex flex-col gap-12 pb-72">
          {projects.map((project) => (
            <a
              key={project.name}
              className="flex flex-col md:flex-row gap-1 w-full"
              href={project.link}
            >
              <div className="flex flex-col w-full py-2 pr-8">
                <h3 className="text-lg">{project.name}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <Image
                src={project.image}
                alt={project.name}
                width={420}
                height={420}
                className="w-full rounded-xl aspect-video object-cover"
              />
            </a>
          ))}
        </section>
      </div>
      <footer className="fixed bottom-0 w-dvw bg-linear-to-b from-transparent to-background h-64 flex items-end justify-center pb-8">
        <div className="block md:hidden">
          <AnimatedTabsHover />
        </div>
      </footer>
    </main>
  );
}
