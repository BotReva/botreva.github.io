import type { MetaFunction } from "@remix-run/node";

import Logo from "~/components/Logo";
import Hero from "~/components/Hero";
import List from "~/components/List";
import CardGrid from "~/components/CardGrid";
import UserGrid from "~/components/UserGrid";

import { AdaptiveLayout } from "~/components/adaptive-ui/Layout/AdaptiveLayout";
import { Heading } from "~/components/adaptive-ui/Text/Heading";
import { Header } from "~/components/adaptive-ui/Layout/Header";
import { Footer } from "~/components/adaptive-ui/Layout/Footer";

export const meta: MetaFunction = () => {
  return [{ title: "Reva Bot" }];
};

const links = [
  /*{ url: "/commands", label: "Commands" }*/,
  { url: "https://discord.gg", label: "Discord" },
  { url: "/terms", label: "Terms of Service" },
  { url: "/privacy-policy", label: "Privacy Policy" }
];

export default function Index() {
  return (
    <AdaptiveLayout dots={{ seed: "gggg" }}>
      <Header logo={<Logo />} links={links} />
      <Hero />
      {/*<List />
      /*<Heading text="Meet The Team" highlight="Team" />
      <UserGrid />*/}
      <Heading text="Features" /*highlight="Features"*/ />
      <CardGrid />
      <Footer logo={<Logo />} links={links} />
    </AdaptiveLayout>
  );
}
