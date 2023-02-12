import { Container } from "./styles";
import Contacts from "../../../contacts";
import { AiOutlineUp } from "react-icons/ai";
const date = new Date();

export default function index() {
  return (
    <Container>
      <p>
        @paulophdev - {date.getFullYear()}. O código deste projeto está no{" "}
        <a href={`${Contacts.github}/portfolio`} target="_blank">
          Github
        </a>
        .
      </p>
      <a href="#home" className="backHome" title="Voltar ao Topo">
        <AiOutlineUp size={25} />
      </a>
    </Container>
  );
}
