import Aside from "./components/Aside";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

import { Container, Content } from "./assets/styles/app";

function App() {
  return (
    <Container>
      <Aside />

      <Content>
        <Home />
        <About />
        <Service />
        <Experience />
        <Portfolio />
        <Contact />
      </Content>
    </Container>
  );
}

export default App;
