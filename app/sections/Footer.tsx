import {
  createStyles,
  Anchor,
  Group,
  Title,
  Transition,
  Button,
  Alert,
} from "@mantine/core";
import { useStore } from "app/state";
import { IconAlertCircle } from "@tabler/icons-react";

import { useEffect, useState } from "react";
import { modals } from "@mantine/modals";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "16px 16px",
    marginTop: 120,
    borderTop: "1px solid #2C2E33",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      marginTop: 40,
    },
  },

  title: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: 10,
      marginBottom: 20,
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      textDecoration: "none",
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}));

const links = [
  { link: "https://twitter.com/plexidev", label: "Twitter" },
  { link: "https://youtube.com/c/truexpixels", label: "YouTube" },
  { link: "https://github.com/plexidev", label: "GitHub" },
  { link: "https://discord.gg/plexidev", label: "Discord" },
];

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const displayKeypad = useStore((state) => state.displayKeypad);
  const { classes } = useStyles();

  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  const items = links.map((link) => (
    <Anchor<"a">
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      className={classes.link}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  const openSupportModal = () =>
    modals.open({
      title: "Contact Us",
      withCloseButton: false,
      children: (
        <>
          <Alert
            icon={<IconAlertCircle size={16} />}
            title="Oops!"
            color="yellow"
          >
            This component is still under development. You can contact us by
            joining our Discord server.
          </Alert>
          <Button fullWidth mt="md" onClick={() => void modals.closeAll()}>
            Ok
          </Button>
        </>
      ),
    });

  return (
    <div>
      <Transition
        transition="fade"
        mounted={mounted}
        duration={1000}
        timingFunction="ease"
      >
        {(styles) => {
          return (
            <div className={classes.inner} style={styles}>
              <Title order={2} className={classes.title}>
                {displayKeypad ? (
                  <span>
                    <span style={{ color: "#3b5bdb" }}>58</span>
                    17
                  </span>
                ) : (
                  <span>
                    <span style={{ color: "#3b5bdb" }}>plexi</span>
                    .dev
                  </span>
                )}
              </Title>

              <Group style={{ justifyContent: "space-evenly" }}>
                {items}
                <Button
                  style={{ backgroundColor: "#3b5bdb" }}
                  onClick={() => openSupportModal()}
                >
                  Contact Us
                </Button>
              </Group>
            </div>
          );
        }}
      </Transition>
    </div>
  );
}