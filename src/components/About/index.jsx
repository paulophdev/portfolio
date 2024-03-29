import { Title } from "../../assets/styles/app";
import { Container, Content, ContentBody } from "./styles";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Contacts from "../../../contacts";
import CV from "../../assets/docs/CV.pdf";

export default function index() {
  // it should return an age
  function calculateAge(birth) {
    const today = new Date();
    return Math.floor(
      Math.ceil(
        Math.abs(birth.getTime() - today.getTime()) / (1000 * 3600 * 24)
      ) / 365.25
    );
  }

  // it should return how many years as a programmer
  function calculateDate(date) {
    const first = new Date(date);
    const last = new Date("12-02-2023");

    return last.getFullYear() - first.getFullYear();
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
          Com mais de cinco anos de experiência, participei do desenvolvimento de diversos sites e sistemas, tanto individualmente quanto em equipe. Trabalhei em uma empresa especializada em sistemas sob demanda, adquirindo amplo conhecimento em áreas como cashback, nuvem, gestão financeira, delivery e muito mais.<br />
          Atualmente, atuo como líder da equipe de desenvolvimento, onde tenho o privilégio de guiar uma equipe talentosa rumo à excelência e a resultados significativos.
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
          <p>{calculateDate(Contacts.startYear)}+</p>
          <span>Anos de Experiência</span>
        </div>
        <div>
          <p>{Contacts.countSites}+</p>
          <span>Total de Sites</span>
        </div>
        <div>
          <p>{Contacts.countSystems}+</p>
          <span>Total de Sistemas</span>
        </div>
        <div>
          <p>{Contacts.countCustomers}+</p>
          <span>Clientes Atendidos</span>
        </div>
      </ContentBody>
    </Container>
  );
}
