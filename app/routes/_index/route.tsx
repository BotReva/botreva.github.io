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
  { url: "/", label: "Commands" },
  { url: "https://youtube.com/c/truexpixels", label: "Terms of Service" },
  { url: "https://github.com/plexidev", label: "Privacy Policy" },
  { url: "https://discord.gg", label: "Join Support Server" },
];

export default function Index() {
  return (
    <AdaptiveLayout dots={{ seed: "gggg" }}>
      <Header logo={<Logo />} links={links} />
      <Hero />
      {/*<List />
      /*<Heading text="Meet The Team" highlight="Team" />
      <UserGrid />*/}
      <Heading text="Major Projects" highlight="Projects" />
      <CardGrid />
      <Footer logo={<Logo />} links={links} />
    </AdaptiveLayout>
  );
}
