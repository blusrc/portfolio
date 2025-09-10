import { buttonVariants } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;

  const { default: Post } = await import(`@/content/${project}.mdx`);
  return (
    <>
      <header className="sticky top-0 bg-background/80 backdrop-blur-2xl  w-full flex items-center justify-center z-10">
        <div className="max-w-screen-md h-14 border-dashed w-full flex items-center justify-between px-4 border-x">
          <div className="flex items-center justify-between w-full">
            <Link
              href="/projects"
              className={buttonVariants({ variant: "outline", size: "icon" })}
            >
              <ChevronLeft />
            </Link>
            <Link
              href="/"
              className="text-sm font-bold tracking-tighter text-muted-foreground"
            >
              aldiyar serikov
            </Link>
          </div>

          {/* <AnimatedTabsHover /> */}

          {/* <div className="flex items-center gap-2">
            <ModeToggle />

            <a
              className={cn(
                buttonVariants(),
                "select-none hover:cursor-default"
              )}
              href="mailto:aldiyar@gmail.com"
            >
              Reach out
            </a>
          </div> */}
        </div>
      </header>
      <main className="max-w-screen-md min-h-dvh mx-auto">
        <Post />
      </main>
    </>
  );
}

export function generateStaticParams() {
  return [{ project: "editscape" }];
}

export const dynamicParams = false;
