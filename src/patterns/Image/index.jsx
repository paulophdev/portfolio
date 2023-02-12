import Perfil from "../../assets/img/me.jpg";
import { Container } from "./styles";
import Contacts from "../../../contacts";

export default function index() {
  return (
    <Container>
      <div className="img-cover">
        <a href="#home">
          <img
            src={Perfil}
            alt="Paulo Henrique do Nascimento Matos"
            title="Paulo Henrique do Nascimento Matos"
          />
        </a>
      </div>
      <h3>{Contacts.fullName}</h3>
    </Container>
  );
}
