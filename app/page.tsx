"use client";
import { AnimatedTabsHover } from "@/components/header-tabs";
import { ModeToggle } from "@/components/theme-switcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { TextEffect } from "@/components/ui/text-effect";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Earth, Sprout } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Home() {
  // Animation variants for sections
  const sectionVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
    },
  };

  const sectionTransition = {
    duration: 0.8,
    ease: "easeOut" as const,
  };

  const journey = [
    {
      year: "2024-2025",
      company: "nomad venture studio (jobescape)",
      role: "Product Designer",
      description: [
        "At NVS, I dove into the chaos of an early-stage AI edtech startup. Joining at time of high growth that resulted in an inconsistent UI and a lot of design debt.",

        "I designed and shipped growth experiments across paywalls, landing pages, and onboarding, while rethinking the entire learning flow — from first lesson to unsubscribe.",

        "I became the go-to person for shadcn/ui, integrating it end-to-end - from Figma to Next.js and helping the team ship 2x faster. Design wasn’t just Figma — I shipped code.",

        "Beyond product, I shaped brand identity, logos, merch, upsell assets, and fundraising decks. At Nomad, “designer” meant product shaper, growth hacker, and engineer all at once.",
      ],
    },
    {
      year: "2024",
      company: "aiqas140",
      role: "CTO",
      description: [
        "Co-founded an angel-backed startup for Kazakhstan’s university exam prep (ҰБТ). Launched the MVP, onboarded first 30+ beta users, and built a small dev team from scratch.",
      ],
    },
    {
      year: "2022–2023",
      company: "nu acm sc",
      role: "chairperson",
      description: [
        "Chaired the biggest student tech chapter (50 active members) at my uni. Raised ~5M ₸ to run two hackathons, a coding competition and 50 more events. Set up design identity + SIGs for 80+ students.",
      ],
    },
    {
      year: "2020-2022",
      company: "24tutors",
      role: "Designer",
      description: [
        "First design gig — made IG content that tripled their audience.",
      ],
    },
  ];
  return (
    <main className="flex flex-col items-center min-h-dvh [background-image:radial-gradient(#F9F9F9_1px,transparent_1px)] [background-size:24px_24px] dark:[background-image:radial-gradient(#191919_1px,transparent_1px)]">
      <header className="z-20 sticky top-0 bg-background/80 backdrop-blur-2xl border-b border-dashed w-full flex items-center justify-center z-10">
        <div className="max-w-screen-xl h-14 border-dashed w-full flex items-center justify-between px-4 xl:border-x lg:px-8">
          <span className="text-sm font-bold tracking-tighter text-muted-foreground whitespace-nowrap">
            aldiyar serikov
          </span>

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

      <div className=" max-w-screen-md w-full flex-col flex justify-center lg:p-8 p-4 gap-12 mb-64">
        <motion.section
          className="mt-4"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...sectionTransition, delay: 0.1 }}
        >
          <div className="flex flex-col max-h-36 relative">
            <Image
              src="/almaty.jpg"
              alt="Almaty"
              width={704}
              height={396}
              className="rounded-3xl shadow-sm aspect-video object-cover h-full"
            />
            <Avatar className="absolute -bottom-8 size-16 left-6 z-10 ring-6 ring-background">
              <AvatarImage src="https://github.com/blusrc.png" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>
          <TextEffect
            as="h2"
            per="word"
            preset="blur"
            className="text-lg text-foreground/80 tracking-wide mt-16 font-medium"
          >
            Hi, I&apos;m Aldiyar.
          </TextEffect>
          <TextEffect
            as="h2"
            per="word"
            preset="blur"
            className="text-muted-foreground mt-2"
          >
            Designing & building at the edge of product, code, and growth.
          </TextEffect>
        </motion.section>

        <motion.section
          className="mt-2 [&>p]:mt-3 leading-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...sectionTransition, delay: 0.3 }}
        >
          <h3 className="text-lg text-muted-foreground font-medium tracking-wide">
            About
          </h3>
          <p>
            I like making things real — from{" "}
            <span className="font-medium">
              AI-driven edtech funnels to design systems that cut dev time in
              half.
            </span>
          </p>
          <p>
            Most recently at{" "}
            <span className="font-medium">
              Nomad Venture Studio (Jobescape)
            </span>{" "}
            where I design, ship, and code experiments to teach freelancing with
            AI more effectively.
          </p>
          <p>
            I move fast between pixels and code, building interfaces that scale
            and running experiments that actually convert.
          </p>
          <p>
            I'm drawn to early-stage chaos → where design, engineering, and
            product all blur together.
          </p>
        </motion.section>

        <motion.section
          className="mt-2 [&>p]:mt-3 leading-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...sectionTransition, delay: 0.5 }}
        >
          <h3 className="text-lg text-muted-foreground font-medium tracking-wide">
            Education
          </h3>
          <p className="text-muted-foreground">
            <span className="font-medium text-foreground">
              Nazarbayev University
            </span>{" "}
            - CS, Class of 2025
          </p>
        </motion.section>

        <motion.section
          className="mt-2 [&>p]:mt-3 leading-6"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...sectionTransition, delay: 0.7 }}
        >
          <h3 className="text-lg text-muted-foreground font-medium tracking-wide">
            Journey
          </h3>
          {journey.map((item) => (
            <div
              key={item.year}
              className="flex flex-col md:flex-row  gap-6 mt-8"
            >
              <span className="text-muted-foreground whitespace-nowrap w-24">
                {item.year}
              </span>
              <div className="flex-1">
                <h4 className="text-lg font-medium">{item.company}</h4>
                <p className="mt-2 text-sm font-bold text-muted-foreground">
                  {item.role}
                </p>
                <div className="mt-2">
                  {item.description.map((description) => (
                    <p key={description} className="mt-2 leading-7">
                      {description}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.section>

        <motion.section
          className="mt-2 [&>p]:mt-3 leading-6"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...sectionTransition, delay: 0.9 }}
        >
          <h3 className="text-lg text-muted-foreground font-medium tracking-wide">
            Projects
          </h3>
          <div className="flex flex-col gap-8 mt-8">
            <div className="flex flex-col md:flex-row gap-6">
              <span className="text-muted-foreground whitespace-nowrap w-24">
                2023
              </span>
              <div className="flex-1">
                <a
                  href="https://github.com/blusrc/toicardai"
                  className="text-lg font-medium inline-flex items-center"
                >
                  ToiCardAI
                  <ArrowUpRight className="size-5 ml-2" />
                </a>
                <p className="mt-2">
                  AI SaaS that generates custom wedding invitations. Built with
                  Next.js 13 + Stable Diffusion.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
              <span className="text-muted-foreground whitespace-nowrap w-24">
                2022
              </span>
              <div className="flex-1">
                <a
                  href="https://github.com/nuacmsc/hacknu2022"
                  className="text-lg font-medium inline-flex items-center"
                >
                  HackNU
                  <ArrowUpRight className="size-5 ml-2" />
                </a>
                <p className="mt-2 ">
                  Designed and shipped hackathon website that brought in 300+
                  participants.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="mt-2 [&>p]:mt-3 leading-6"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...sectionTransition, delay: 1.1 }}
        >
          <h3 className="text-lg text-muted-foreground font-medium tracking-wide">
            Highlights
          </h3>
          <div className="flex flex-col gap-8 mt-8">
            <div className="flex flex-col md:flex-row gap-6">
              <span className="text-muted-foreground whitespace-nowrap w-24">
                2023
              </span>
              <div className="flex-1">
                <p className="">
                  <Sprout className="size-4 mb-1 text-muted-foreground inline-block mr-2" />{" "}
                  nFactorial Incubator 2023 – built fullstack AI SaaS
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-8">
            <div className="flex flex-col md:flex-row gap-6">
              <span className="text-muted-foreground whitespace-nowrap w-24">
                2022
              </span>
              <div className="flex-1">
                <p className="">
                  <Earth className="size-4 mb-1 text-muted-foreground inline-block mr-2" />{" "}
                  2nd place, Jas Ventures Blockchain Hackathon
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-8">
            <div className="flex flex-col md:flex-row gap-6">
              <span className="text-muted-foreground whitespace-nowrap w-24">
                2022
              </span>
              <div className="flex-1">
                <p className="">
                  <Earth className="size-4 mb-1 text-muted-foreground inline-block mr-2" />{" "}
                  Finalist, BNBxAITU Blockchain Hackathon
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
      <footer className="fixed bottom-0 w-dvw bg-linear-to-b from-transparent to-background h-64 flex items-end justify-center pb-8">
        <div className="block md:hidden">
          <AnimatedTabsHover />
        </div>
      </footer>
    </main>
  );
}
