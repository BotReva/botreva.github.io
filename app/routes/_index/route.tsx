import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Logo from "./Logo";
import Hero from "~/components/Hero";
import List from "~/components/List";

export const meta: MetaFunction = () => {
  return [{ title: "Plexi Development" }];
};

export default function Index() {
  return (
    <div>
      <Header
        logo={<Logo />}
        links={[
          { url: "https://twitter.com/lorencerri", label: "Twitter" },
          { url: "https://youtube.com/c/truexpixels", label: "YouTube" },
          { url: "https://github.com/lorencerri", label: "GitHub" },
          { url: "https://discord.gg/plexidev", label: "Discord" },
        ]}
      />
      <Hero />
      <List />
    </div>
  );
}
