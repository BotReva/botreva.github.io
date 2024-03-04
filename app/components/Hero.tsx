import classes from "./Hero.module.css";
import { Container, Title, Text, Button } from "@mantine/core";

export default function CustomHero() {
  return (
    <Container className={classes.container} size={1400}>
      <Title className={classes.title}>
        Reva <span className="highlight">Bot</span>
      </Title>
      <Container p={0} size={600}>
        <Text size="lg" c="dimmed" className={classes.description}>
          Sebuah bot discord bahasa Indonesia.
        </Text>
      </Container>

      <div className={classes.buttons}>
        <Button
          component="a"
          href="https://discord.com/invite"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className={classes.button}
        >
          Invite
        </Button>
        
        <Button
          component="a"
          href="https://discord.gg/revabot"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          variant="default"
          color="gray"
          className={classes.button}
          mr={20}
        >
          Join Server
        </Button>
      </div>
    </Container>
  );
}
