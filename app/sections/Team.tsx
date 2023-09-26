import { useState, useEffect } from "react";
import {
  Title,
  Container,
  SimpleGrid,
  createStyles,
  Kbd,
  Transition,
  Button,
} from "@mantine/core";

import TeamMember from "../components/TeamMember";
import { Dots } from "../components/Dots";

import { useStore } from "app/state";

import lorencerriAvatar from "app/images/avatars/lorencerri.webp";
import zoroticAvatar from "app/images/avatars/Zorotic.webp";
import CartarAvatar from "app/images/avatars/Cartar.webp";
import FreezInAvatar from "app/images/avatars/FreezIn.webp";
import hasteAvatar from "app/images/avatars/haste.webp";
import ImDarkDiamondAvatar from "app/images/avatars/ImDarkDiamond.webp";
import IttimAvatar from "app/images/avatars/Ittim.webp";
import MoordAvatar from "app/images/avatars/Moord.webp";
import polarisAvatar from "app/images/avatars/polaris.webp";
import whomityAvatar from "app/images/avatars/whomity.webp";
import YahikoAvatar from "app/images/avatars/Yahiko.webp";
import ZelakAvatar from "app/images/avatars/Zelak.webp";
import DiscordBlue from "app/images/avatars/discord-blue.webp";
import DiscordRed from "app/images/avatars/discord-red.webp";
import DiscordYellow from "app/images/avatars/discord-yellow.webp";

import { shallow } from "zustand/shallow";
import { modals } from "@mantine/modals";

const useStyles = createStyles((theme) => ({
  inner: {
    position: "relative",
    zIndex: 1,
  },

  hintText: {
    color: "#DB3B5B",
    fontSize: 12,
    "&:hover": {
      cursor: "pointer",
    },
  },

  themedText: {
    color: "#DB3B5B",
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    "@media (max-width: 1750px)": {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  wrapper: {
    paddingTop: 80,
    paddingBottom: 50,
    [theme.fn.smallerThan("sm")]: {
      paddingTop: 30,
      paddingBottom: 10,
    },
  },

  key: {
    padding: 10,
    margin: 10,
    minWidth: "28px",
  },

  subtitle: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 30,
    letterSpacing: -1,
    color: "#C1C2C5",
    marginBottom: theme.spacing.sm,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  members: {
    marginTop: 40,
  },
}));

const special = [
  {
    name: "You",
    title: "Supporter",
    avatar: DiscordBlue,
  },
  {
    name: "You",
    title: "Supporter",
    avatar: DiscordRed,
  },
  {
    name: "You",
    title: "Supporter",
    avatar: DiscordYellow,
  },
];

const team = [
  {
    name: "lorencerri",
    title: "Founder & Developer",
    avatar: lorencerriAvatar,
    github: "@lorencerri",
    discord: "@lorencerri",
    display: 1,
  },
  {
    name: "Zorotic",
    title: "Administrator & Developer",
    avatar: zoroticAvatar,
    github: "@Zorotic",
    email: "@zorotic",
    display: 2,
  },
  {
    name: "Zelak",
    title: "Lead Developer",
    avatar: ZelakAvatar,
    github: "@ZelAk312",
    discord: "@zelak",
    display: 3,
  },
  {
    name: "Cartar",
    title: "Developer",
    avatar: CartarAvatar,
    github: "@realCartar",
    discord: "@cartar.",
    display: 4,
  },
  {
    name: "FreezIn",
    title: "Developer",
    avatar: FreezInAvatar,
    github: "@alexy4744",
    discord: "@alexy4744",
    display: 5,
  },
  {
    name: "haste",
    title: "Developer",
    avatar: hasteAvatar,
    github: "@hhaste",
    discord: "@hastilion",
    display: 6,
  },
  {
    name: "ImDarkDiamond",
    title: "Developer",
    avatar: ImDarkDiamondAvatar,
    github: "@ImDarkDiamond",
    discord: "@imdarkdiamond",
    display: 7,
  },
  {
    name: "Ittim",
    title: "Developer",
    avatar: IttimAvatar,
    github: "@TheIttim",
    discord: "@ittim",
    display: 8,
  },
  {
    name: "polaris",
    title: "Developer",
    avatar: polarisAvatar,
    github: "@impolqris",
    discord: "@impolaris",
    display: 9,
  },
  {
    name: "Yahiko",
    title: "Developer",
    avatar: YahikoAvatar,
    github: "@KnowItAllKing",
    discord: "@knowitallking",
    display: "Back",
    borderColor: "red",
  },
  {
    name: "Moord",
    title: "Support Team",
    avatar: MoordAvatar,
    discord: "@moordymoord",
    display: "0",
  },
  {
    name: "whomity",
    title: "Support Team",
    avatar: whomityAvatar,
    discord: "@tommy.liu",
    display: "Enter",
    borderColor: "green",
  },
];

export default function Team() {
  const [mounted, setMounted] = useState(false);
  const { displayKeypad, code, success } = useStore(
    (state) => ({
      displayKeypad: state.displayKeypad,
      code: state.code,
      success: state.success,
    }),
    shallow
  );
  const { classes } = useStyles();

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  const displayText = () => {
    if (success) {
      return (
        <div>
          Special <span style={{ color: "#3b5bdb" }}>thank you</span> to
          <span style={{ color: "#3b5bdb" }}> you</span> for your continued
          support!
        </div>
      );
    } else if (displayKeypad) {
      return (
        <div>
          <div>
            Enter The
            <span style={{ color: "#3b5bdb" }}> Password</span>{" "}
            <span className={classes.hintText} onClick={openHintModal}>
              (Hint)
            </span>
          </div>
          <div className={classes.subtitle}>
            <Kbd className={classes.key}>{code[0] || "_"}</Kbd>
            <Kbd className={classes.key}>{code[1] || "_"}</Kbd>
            <Kbd className={classes.key}>{code[2] || "_"}</Kbd>
            <Kbd className={classes.key}>{code[3] || "_"}</Kbd>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          Meet The
          <span style={{ color: "#3b5bdb" }}> Team</span>
        </div>
      );
    }
  };

  const openHintModal = () =>
    modals.openConfirmModal({
      title: "Hint #1",
      withCloseButton: false,
      labels: { confirm: "Next Hint", cancel: "Close" },
      closeOnConfirm: false,
      children: (
        <>
          Plexi Development was created on
          <span className={classes.themedText}> August 8th, 2017</span>.
        </>
      ),
      onConfirm: () =>
        modals.openConfirmModal({
          title: "Hint #2",
          withCloseButton: false,
          labels: { confirm: "Answer", cancel: "Back" },
          closeOnConfirm: false,
          children: (
            <>
              Plexi Development was created on
              <span className={classes.themedText}> 5/8/2017</span>.
            </>
          ),
          onConfirm: () =>
            modals.open({
              withCloseButton: false,
              title: "Answer",
              children: (
                <>
                  The code is
                  <span className={classes.themedText}> 5817</span>.
                  <Button mt="md" fullWidth onClick={() => modals.closeAll()}>
                    Thanks!
                  </Button>
                </>
              ),
            }),
        }),
    });

  return (
    <Container className={classes.wrapper} size={1050}>
      <Dots className={classes.dots} style={{ left: 100, top: 800 }} />
      <Dots className={classes.dots} style={{ left: 160, top: 800 }} />
      <Dots className={classes.dots} style={{ left: 100, top: 940 }} />
      <Dots className={classes.dots} style={{ right: 100, top: 860 }} />

      <div className={classes.inner}>
        <Transition mounted={mounted} duration={2500} transition="fade">
          {(styles) => {
            return (
              <Title order={3} className={classes.subtitle} style={styles}>
                {displayText()}
              </Title>
            );
          }}
        </Transition>

        <Transition
          mounted={mounted}
          duration={2500}
          transition="fade"
          timingFunction="ease"
        >
          {(styles) => {
            return (
              <SimpleGrid
                cols={3}
                spacing={50}
                breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
                className={classes.members}
                style={styles}
              >
                {(success ? special : team).map((member) => {
                  return <TeamMember key={member.name} {...member} />;
                })}
              </SimpleGrid>
            );
          }}
        </Transition>
      </div>
    </Container>
  );
}