import { Container } from "./styles";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import Contacts from "../../../contacts";

export default function index() {
  return (
    <Container>
      <a href={Contacts.github} title="Github" target="_blank">
        <AiFillGithub />
      </a>
      <a href={Contacts.instagram} title="Instagram" target="_blank">
        <AiFillInstagram />
      </a>
      <a href={Contacts.linkedin} title="Linkedin" target="_blank">
        <AiFillLinkedin />
      </a>
    </Container>
  );
}
