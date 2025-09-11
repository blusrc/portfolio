import { Button } from "@/components/ui/button";
import { ImageZoom } from "@/components/ui/kibo-ui/image-zoom";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components: MDXComponents = {
  Button,
  h1: ({ children }) => (
    <h1 className="text-xl font-medium px-4 border-x w-full border-dashed pt-16">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-bold text-lg pt-12 px-4 border-x w-full border-dashed">
      {children}
    </h2>
  ),
  p: ({ children, ...props }) => {
    return (
      <p
        className="pt-8 [&:is(h1+&,h2+&)]:pt-4 [&:is(p+&)]:pt-6 tracking-wide leading-8 px-4 border-x w-full border-dashed [*:not(span)>&]:last:pb-20 text-foreground/85"
        {...props}
      >
        {children}
      </p>
    );
  },
  // Add other components you want to use globally in MDX files
  Image: (props) => (
    <ImageZoom>
      <Image
        height={1080}
        width={1920}
        {...(props as ImageProps)}
        className="border-x w-full border-dashed mt-8"
      />
    </ImageZoom>
  ),
  ul: ({ children }) => (
    <ul className="[&:is(p+&)]:pt-1 list-disc list-inside pt-12 px-4 border-x w-full border-dashed [&>li]:mt-2 [&>li]:leading-6">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="[&:is(p+&)]:pt-1 list-decimal list-inside pt-12 px-4 border-x w-full border-dashed [&>li]:mt-2 [&>li]:leading-6">
      {children}
    </ol>
  ),
  strong: ({ children }) => <strong className="font-medium">{children}</strong>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
