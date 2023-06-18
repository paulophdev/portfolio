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
    name: "Liderança",
    percentage: "85",
  },
  {
    name: "PHP",
    percentage: "90",
  },
  {
    name: "Vue.js",
    percentage: "75",
  },
  {
    name: "Laravel",
    percentage: "80",
  },
  {
    name: "Web Design",
    percentage: "65",
  },
  {
    name: "JavaScript",
    percentage: "80",
  },
  {
    name: "SQL",
    percentage: "75",
  },
  {
    name: "HTML/CSS",
    percentage: "90",
  },
  {
    name: "React JS",
    percentage: "75",
  },
  {
    name: "Bootstrap",
    percentage: "95",
  },
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
          <span>03/2023 ~ atualmente</span>
          <h2>Programador FullStack</h2>
          <p className="ext-sub">Lince Web Soluções Inteligentes</p>
          <p>
            Sou um desenvolvedor líder de uma equipe de talentosos profissionais.
          </p>
        </CardExt>
        <CardExt>
          <span>02/2018 ~ 05/2018</span>
          <h2>Curso de Web Developer</h2>
          <p className="ext-sub">Prof: Deivite Popo (engenheiro de software)</p>
          <p>
            Curso focado em preparar o programador para o mercado de trabalho.
          </p>
        </CardExt>
        <CardExt>
          <span>05/2018 ~ 12/2020</span>
          <h2>1° Trabalho na área</h2>
          <p className="ext-sub">Programador Full Stack</p>
          <p>Desenvolver softwares para atender as demandas dos clientes.</p>
        </CardExt>
        <CardExt>
          <span>01/2021 ~ atualmente</span>
          <h2>Freelancer</h2>
          <p className="ext-sub">Programador Full Stack</p>
          <p>
            Sempre focado em melhorar minhas habilidades para entregar sempre o
            melhor para meus clientes.
          </p>
        </CardExt>
        <CardExt>
          <span>07/2021 ~ atualmente</span>
          <h2>Faculdade</h2>
          <p className="ext-sub">Análise e desenvolvimento de sistemas</p>
          <p>
            Curso de nível superior para ampliar as minhas capacidades e
            melhorar meu perfil de desenvolvedor.
          </p>
        </CardExt>
      </Content>

      <TitleSkill>My Skills</TitleSkill>
      <ContentSkils>
        {skills.map(function (skill, i) {
          return (
            <CardSkils key={i}>
              <div className="skillsHead">
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
