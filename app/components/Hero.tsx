import classes from "./Hero.module.css";
import { Container, Title, Text, Button } from "@mantine/core";

export default function CustomHero() {
  return (
    <Container className={classes.container} size={1400}>
      <Title className={classes.title}>
         Sebuah <span className="highlight">Discord Bot</span> Bahasa Indonesia yang anda butuhkan
      </Title>
      <Container p={0} size={600}>
        <Text size="lg" c="dimmed" className={classes.description}>
          Tunggu apalagi ayo undang Reva ke server kamu!
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
          Add to Server
        </Button>
        
        {/*<Button
          component="a"
          href="https://discord.com/invite/revabot"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          variant="default"
          color="gray"
          className={classes.button}
          mr={20}
        >
          Join Server
        </Button>*/}
      </div>
    </Container>
  );
}
