import { Container } from "./styles";
import Contacts from "../../../contacts";
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
    </Container>
  );
}
