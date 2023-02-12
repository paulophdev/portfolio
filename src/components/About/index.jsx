import { Title } from "../../assets/styles/app";
import { Container, Content, ContentBody } from "./styles";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Contacts from "../../../contacts";

export default function index() {
  function calculateAge(birth) {
    const today = new Date();
    return Math.floor(
      Math.ceil(
        Math.abs(birth.getTime() - today.getTime()) / (1000 * 3600 * 24)
      ) / 365.25
    );
  }

  return (
    <Container id="about">
      <Title>
        <h1>Sobre Mim</h1>
        <p>Me Conheça Melhor</p>
      </Title>

      <Content>
        <div className="firstContent">
          <p className="firstTitle">
            Eu sou <span>{Contacts.simplifiedName}</span>, um desenvolvedor da
            web
          </p>
          <p>
            trabalho com Desenvolvimento Web a um pouco mais de quatro anos, já
            desenvolvi e participei do desenvolvimento de diversos sites e
            sistemas, sozinho e em equipe. Durante boa parte do meu tempo como
            programador, trabalhei para uma empresa que desenvolve sistemas sob
            demanda, isso me permitiu adquirir conhecimento sobre várias áreas
            diferentes de negócios, cashback, nuvem, gestão financeira, delivery
            e outros.
          </p>
        </div>
        <div className="secondContent">
          <div>
            <b>Nome:</b> {Contacts.fullName}
          </div>
          <div>
            <b>E-mail:</b> {Contacts.email}
          </div>
          <div>
            <b>Idade: </b>
            {calculateAge(new Date(Contacts.dateBirth))}
          </div>
          <div>
            <button>
              Download CV{" "}
              <AiOutlineCloudDownload size={20} style={{ marginLeft: "5px" }} />
            </button>
          </div>
        </div>
      </Content>
      <ContentBody>
        <div>
          <p>10+</p>
          <span>Years Experiance</span>
        </div>
        <div>
          <p>250+</p>
          <span>Happy Clients</span>
        </div>
        <div>
          <p>650+</p>
          <span>Projects Done</span>
        </div>
        <div>
          <p>38</p>
          <span>Get Awards</span>
        </div>
      </ContentBody>
    </Container>
  );
}
