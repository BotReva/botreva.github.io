import type { MetaFunction } from "@remix-run/node";

import Logo from "~/components/Logo";
import Terms from "~/components/Terms";

import { AdaptiveLayout } from "~/components/adaptive-ui/Layout/AdaptiveLayout";
import { Header } from "~/components/adaptive-ui/Layout/Header";
import { Footer } from "~/components/adaptive-ui/Layout/Footer";

export const meta: MetaFunction = () => {
  return [{ title: "Reva Bot | Terms of Service" }];
};

import { useHref } from "@remix-run/react";

const links = [
  { url: useHref("/"), label: "Home" },
  { url: "https://discord.gg", label: "Discord" },
  { url: useHref("/terms"), label: "Terms of Service" },
  { url: useHref("/privacy"), label: "Privacy Policy" }
];

export default function Index() {
  return (
    <AdaptiveLayout dots={{ seed: "gggg" }}>
      <Header logo={<Logo />} links={links} />
      <Terms />
      <Footer logo={<Logo />} links={links} />
    </AdaptiveLayout>
  );
}
