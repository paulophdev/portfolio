import { Title } from "../../assets/styles/app";
import { Container, Content, ContentBody } from "./styles";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Contacts from "../../../contacts";
import CV from "../../assets/docs/CV.pdf";

export default function index() {
  // it should return an age
  function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
  
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();
  
    // Se ainda não fez aniversário esse ano, subtrai 1
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    return age;
  }  

  // it should return how many years as a programmer
  function calculateExperience(startDate) {
    const start = new Date(startDate);
    const end = new Date();
  
    let years = end.getFullYear() - start.getFullYear();
    const monthDiff = end.getMonth() - start.getMonth();
    const dayDiff = end.getDate() - start.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      years--;
    }
  
    return years;
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
            Olá, eu sou <span>{Contacts.simplifiedName}</span>, um desenvolvedor web apaixonado pelo meu trabalho.
          </p>
          <p>
            Com mais de sete anos de experiência em desenvolvimento de software, atuei em diversos projetos.<br/>
            Atualmente, exerço o cargo de Engenheiro de Software, focando não apenas em entregar soluções robustas, mas também em expandir meus conhecimentos — com especial interesse em Inteligência Artificial.
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
            <a href={CV} download>
              Download CV{" "}
              <AiOutlineCloudDownload size={20} style={{ marginLeft: "5px" }} />
            </a>
          </div>
        </div>
      </Content>
      <ContentBody>
        <div>
          <p>{calculateExperience(Contacts.startYear)}+</p>
          <span>Anos de Experiência</span>
        </div>
        <div>
          <p>{Contacts.countProjects}+</p>
          <span>Projetos que participei</span>
        </div>
      </ContentBody>
    </Container>
  );
}
