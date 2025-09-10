import { Button } from "@/components/ui/button";
import { ImageZoom } from "@/components/ui/kibo-ui/image-zoom";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

const components: MDXComponents = {
  Button,
  h1: ({ children }) => (
    <h1 className="text-lg px-4 border-x w-full border-dashed pt-16">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-bold text-muted-foreground pt-16 px-4 border-x w-full border-dashed">
      {children}
    </h2>
  ),
  p: ({ children, ...props }) => {
    return (
      <p
        className="last:pb-20  pt-12 [&:is(h1+&,h2+&)]:pt-3 tarcking-wide leading-8 px-4 border-x w-full border-dashed"
        {...props}
      >
        {children}
      </p>
    );
  },
  // Add other components you want to use globally in MDX files
  img: (props) => (
    <ImageZoom>
      <Image height={1080} width={1920} {...(props as ImageProps)} />
    </ImageZoom>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
