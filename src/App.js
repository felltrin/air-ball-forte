import { Theme } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";

function App() {
  return (
    <Theme appearance="light">
      <NavBar />
      <Hero />
      <FeatureSection />
    </Theme>
  );
}

export default App;
