import classes from "./Terms.module.css";
import { Container, Title, Text, Button } from "@mantine/core";

export default function CustomTerms() {
  return (
    <Container className={classes.container} size={1400}>
      <Title className={classes.title}>
         Terms of Service
      </Title>
      <Container p={0} size={600}>
        <Text size="lg" c="dimmed" className={classes.description}>
        <span className="highlight">Last updated: March, 05 2024</span>
        
        </Text>
      </Container>

      {/*<div className={classes.buttons}>
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
        
        <Button
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
        </Button>
      </div>*/}
    </Container>
  );
}
