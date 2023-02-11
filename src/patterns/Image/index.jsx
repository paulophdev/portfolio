import Perfil from "../../assets/img/me.jpg";
import { Container } from "./styles";

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
      <h3>Paulo H N Matos</h3>
    </Container>
  );
}
