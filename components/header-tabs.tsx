"use client";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function AnimatedTabsHover() {
  const pathname = usePathname();
  const TABS = [
    { label: "Experience", link: "/" },
    { label: "Projects", link: "/projects" },
  ];

  const activeTab = TABS.find((tab) => tab.link === pathname);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  // Reset hover state when pathname changes
  useEffect(() => {
    setHoveredTab(null);
  }, [pathname]);

  return (
    <div className="flex flex-row">
      <AnimatedBackground
        defaultValue={hoveredTab || activeTab?.label || undefined}
        className="rounded-md bg-accent/80"
        transition={{
          type: "spring",
          bounce: 0.1,
          duration: 0.3,
        }}
        enableHover={false} // We'll handle hover manually
      >
        {TABS.map((tab, index) => (
          <Link
            key={index}
            data-id={tab.label}
            href={tab.link}
            onMouseEnter={() => setHoveredTab(tab.label)}
            onMouseLeave={() => setHoveredTab(null)}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "px-3 py-1.5 text-muted-foreground text-sm transition-colors duration-30 hover:text-accent-foreground",
              pathname === tab.link && "text-foreground"
            )}
          >
            {tab.label}
          </Link>
        ))}
      </AnimatedBackground>
    </div>
  );
}
