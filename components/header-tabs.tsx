import { AnimatedBackground } from "@/components/motion-primitives/animated-background";

export function AnimatedTabsHover() {
  const TABS = ["Projects", "Experience"];

  return (
    <div className="flex flex-row">
      <AnimatedBackground
        defaultValue={TABS[0]}
        className="rounded-md bg-accent"
        transition={{
          type: "spring",
          bounce: 0.1,
          duration: 0.3,
        }}
        enableHover
      >
        {TABS.map((tab, index) => (
          <button
            key={index}
            data-id={tab}
            type="button"
            className="px-4 py-2 text-muted-foreground transition-colors duration-30 hover:text-accent-foreground"
          >
            {tab}
          </button>
        ))}
      </AnimatedBackground>
    </div>
  );
}
