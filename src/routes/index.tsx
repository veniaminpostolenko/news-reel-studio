import { createFileRoute } from "@tanstack/react-router";
import { NewsPresentation } from "../components/NewsPresentation";
import coverAsset from "../assets/cover.png.asset.json";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "4 UUDIST — uudiste esitlus" },
      { name: "description", content: "Neli olulist uudist Eestist ja maailmast: poliitika, haridus, tehnoloogia ja sport." },
      { property: "og:title", content: "4 UUDIST — uudiste esitlus" },
      { property: "og:description", content: "Neli olulist uudist Eestist ja maailmast ühes visuaalses esitluses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: coverAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: coverAsset.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <NewsPresentation />;
}
