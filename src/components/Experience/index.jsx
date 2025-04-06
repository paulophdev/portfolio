import { Title } from "../../assets/styles/app";
import {
  ButtonCV,
  CardExt,
  CardSkils,
  Container,
  Content,
  ContentSkils,
  TitleSkill,
} from "./styles";
import { AiOutlineCloudDownload } from "react-icons/ai";
import CV from "../../assets/docs/CV.pdf";

const skills = [
  {
    name: "PHP",
    percentage: "88",
    title: "Percentual obtido do Quiz do W3Schools",
  },
  {
    name: "Laravel",
    percentage: "75",
    title: "Presunção baseada no uso cotidiano"
  },
  {
    name: "HTML",
    percentage: "87",
    title: "Percentual obtido do Quiz do W3Schools",
  },
  {
    name: "CSS",
    percentage: "84",
    title: "Percentual obtido do Quiz do W3Schools"
  },
  {
    name: "Javascript",
    percentage: "92",
    title: "Percentual obtido do Quiz do W3Schools"
  },
  {
    name: "Typescript",
    percentage: "40",
    title: "Presunção baseada no uso cotidiano"
  },
  {
    name: "React",
    percentage: "25",
    title: "Presunção baseada no uso cotidiano"
  },
  {
    name: "Vue.js",
    percentage: "80",
    title: "Presunção baseada no uso cotidiano"
  },
  {
    name: "MySQL",
    percentage: "80",
    title: "Presunção baseada no uso cotidiano"
  },
  {
    name: "Oracle Cloud",
    percentage: "50",
    title: "Presunção baseada no uso cotidiano"
  }
];

export default function index() {
  return (
    <Container id="experience">
      <Title>
        <h1>Experiência</h1>
        <p>Resumo</p>
      </Title>

      <Content>
      <CardExt>
          <span>02/2023 ~ Atualmente</span>
          <h2>Programador Fullstack</h2>
          <p className="ext-sub">Lince Web Soluções Inteligentes</p>
          <p>
            O primeiro ano de empresa me dediquei ao trabalho como Gerente de Projetos e Tech Lead, mas recentemente migrei para o cargo de Engenheiro de Software.
          </p>
          <p>
            <br/><strong>Principais skills:</strong><br/>PHP, Laravel, Vue.js, MySQL, HTML, CSS e JavaScript.
          </p>
        </CardExt>
        <CardExt>
          <span>01/2021 ~ 01/2023</span>
          <h2>Freelancer</h2>
          <p className="ext-sub">Programador Fullstack</p>
          <p>
            Durante esse período, trabalhei como freelancer, desenvolvendo projetos
            para clientes de diversos segmentos.
          </p>
          <p>
            <br/><strong>Principais skills:</strong><br/>PHP, React, MySQL, AdonisJS, HTML, CSS e JavaScript.
          </p>
        </CardExt>
        <CardExt>
          <span>05/2018 ~ 12/2020</span>
          <h2>Primeiro Trabalho como programador</h2>
          <p className="ext-sub">Programador Fullstack</p>
          <p>Trabalhei numa software house chamada Agência DP.</p>
          <p>
            <br/><strong>Principais skills:</strong><br/>PHP, MySQL, HTML, CSS e JavaScript.
          </p>
        </CardExt>
      </Content>

      <TitleSkill>Hard skills</TitleSkill>
      <ContentSkils>
        {skills.map(function (skill, i) {
          return (
            <CardSkils key={i} title={skill.title}>
              <div className="skillsHead" title={skill.title}>
                <div>{skill.name}</div>
                <div>{skill.percentage}%</div>
              </div>
              <div className="skillsBody">
                <div
                  className="skillsBarr"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </CardSkils>
          );
        })}
      </ContentSkils>
      <ButtonCV href={CV} download>
        Download CV{" "}
        <AiOutlineCloudDownload size={20} style={{ marginLeft: "5px" }} />
      </ButtonCV>
    </Container>
  );
}
