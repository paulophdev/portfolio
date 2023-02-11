import Image from "../../patterns/Image";
import Navbar from "../../patterns/Navbar";
import Foot from "../../patterns/Foot";

import { Container } from "./styles";

export default function index() {
  return (
    <Container>
      <Image />
      <Navbar />
      <Foot />
    </Container>
  );
}
