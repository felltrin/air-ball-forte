import { Button, Flex, Stack, Text, Theme } from "@chakra-ui/react";

function App() {
  return (
    <Theme appearance="light">
      <Stack minH={"100vh"}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          px={3}
          py={3}
        >
          <Text>Aether</Text>
          <Flex gap={3}>
            <Text>Features</Text>
            <Text>About us</Text>
            <Text>Contact</Text>
          </Flex>
          <Button>Get Started</Button>
        </Flex>
      </Stack>
    </Theme>
  );
}

export default App;
