import type { MetaFunction } from "@remix-run/node";

import Logo from "~/components/Logo";
import Privacy from "~/components/Privacy";

import { AdaptiveLayout } from "~/components/adaptive-ui/Layout/AdaptiveLayout";
import { Header } from "~/components/adaptive-ui/Layout/Header";
import { Footer } from "~/components/adaptive-ui/Layout/Footer";

export const meta: MetaFunction = () => {
  return [{ title: "Reva Bot | Privacy & Policy" }];
};

const links = [
  { href: "/", label: "Home" },
  { url: "https://discord.gg", label: "Discord" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" }
];

export default function Index() {
  return (
    <AdaptiveLayout dots={{ seed: "gggg" }}>
      <Header logo={<Logo />} links={links} />
      <Privacy />
      <Footer logo={<Logo />} links={links} />
    </AdaptiveLayout>
  );
}
