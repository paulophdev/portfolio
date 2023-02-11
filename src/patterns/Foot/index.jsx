import { Container } from "./styles";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

export default function index() {
  return (
    <Container>
      <a href="https://github.com/paulophdev" title="Github" target="_blank">
        <AiFillGithub />
      </a>
      <a
        href="https://www.instagram.com/paulophdev"
        title="Instagram"
        target="_blank"
      >
        <AiFillInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/paulophdev"
        title="Linkedin"
        target="_blank"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100002457864535"
        title="Facebook"
        target="_blank"
      >
        <AiFillFacebook />
      </a>
    </Container>
  );
}
