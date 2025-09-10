import { ModeToggle } from "@/components/theme-switcher";
import Image from "next/image";

const projects = [
  {
    name: "PaletteCraft",
    description:
      "A color palette generator and manager for designers and developers.",
    image: "/placeholder.jpg",
    link: "https://www.palettecraft.com",
    tags: ["React", "Next.js", "Tailwind CSS", "Design Tools"],
  },
  {
    name: "Wireflow Studio",
    description:
      "A collaborative wireframing tool for rapid prototyping and feedback.",
    image: "/placeholder.jpg",
    link: "https://www.wireflowstudio.com",
    tags: ["Figma API", "TypeScript", "UX/UI", "Realtime"],
  },
  {
    name: "PixelSmith",
    description:
      "A pixel-perfect icon and SVG editor for engineers and designers.",
    image: "/placeholder.jpg",
    link: "https://www.pixelsmith.app",
    tags: ["SVG", "Canvas", "React", "Design"],
  },
  {
    name: "Component Atlas",
    description:
      "A searchable library of reusable UI components for modern web apps.",
    image: "/placeholder.jpg",
    link: "https://www.componentatlas.dev",
    tags: ["React", "Storybook", "UI Library", "Documentation"],
  },
  {
    name: "MotionForge",
    description:
      "A tool for designing and previewing micro-interactions and animations.",
    image: "/placeholder.jpg",
    link: "https://www.motionforge.io",
    tags: ["Framer Motion", "Animation", "Design", "React"],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-dvh [background-image:radial-gradient(#e0e0e0_1px,transparent_1px)] [background-size:24px_24px] dark:[background-image:radial-gradient(#191919_1px,transparent_1px)]">
      <header className="sticky top-0 bg-background/80 backdrop-blur-2xl border-b border-dashed w-full flex items-center justify-center z-10">
        <div className="max-w-screen-xl h-14 border-dashed w-full flex items-center justify-between px-4 xl:border-x lg:px-8">
          <span className="text-sm font-bold tracking-tighter text-muted-foreground">
            aldiyar serikov
          </span>
          <ModeToggle />
        </div>
      </header>
      <div className="flex-1 max-w-screen-xl xl:border-x border-dashed w-full flex-col flex justify-center lg:p-8 p-4 gap-12">
        <section className="my-36 leading">
          <h2 className="leading-10 text-2xl font-bold text-muted-foreground/60 tracking-wide">
            Hi, I'm <span className="text-foreground">Aldiyar.</span> Designer
            and Developer based in Kazakhstan.
          </h2>
          <h2 className="leading-10 text-2xl font-bold text-muted-foreground/60 tracking-wide">
            I'm obsessed with{" "}
            <span className="text-foreground">
              Design systems, UI engineering and Product design.
            </span>
          </h2>
          <h2 className="leading-10 text-2xl font-bold text-muted-foreground/60 tracking-wide">
            Here's some of my{" "}
            <span className="text-foreground">recent works:</span>
          </h2>
        </section>
        {projects.map((project) => (
          <div key={project.name} className="flex gap-1 w-full">
            <div className="flex flex-col w-full pt-2 pr-8">
              <h3 className="text-lg">{project.name}</h3>
              <p className="">{project.description}</p>
            </div>
            <Image
              src={project.image}
              alt={project.name}
              width={420}
              height={420}
              className="w-full rounded-sm aspect-video object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
