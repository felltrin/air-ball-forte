import { Container, Theme } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  return (
    <Theme appearance="light">
      <Container maxW={"full"} p={8} bg={"#fff"}>
        <NavBar />
      </Container>
      <Container maxW={"full"} p={8} bg={"#b6f27272"}>
        <Hero />
      </Container>
    </Theme>
  );
}

export default App;
