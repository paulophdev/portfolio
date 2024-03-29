import Aside from "./components/Aside";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <Contact />
        <Footer />
      </Content>
    </Container>
  );
}

export default App;
