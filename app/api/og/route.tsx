import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function GET() {
  const text = "AldiyarDesign";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#fafafa",
          fontFamily: "Geist, system-ui, -apple-system, sans-serif",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "128px",
            fontWeight: "600",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#0f0f0f" }}>Aldiyar</span>
          <span style={{ color: "#808080" }}>Design</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,

      fonts: [
        {
          name: "Geist",
          data: await loadGoogleFont("Geist", text),
          style: "normal",
        },
      ],
    }
  );
}
