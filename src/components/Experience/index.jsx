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

const skills = [
  {
    name: "Web Design",
    percentage: "65",
  },
  {
    name: "JavaScript",
    percentage: "50",
  },
  {
    name: "Angular Js",
    percentage: "20",
  },
  {
    name: "HTML/CSS",
    percentage: "80",
  },
  {
    name: "React JS",
    percentage: "58",
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
          <span>2000 ~ 2004</span>
          <h2>Computer Science</h2>
          <p className="ext-sub">International University</p>
          <p>
            Lisque persius interesset his et, in quot quidam persequeris vim, ad
            mea essent possim iriure.
          </p>
        </CardExt>
        <CardExt>
          <span>2000 ~ 2004</span>
          <h2>Computer Science</h2>
          <p className="ext-sub">International University</p>
          <p>
            Lisque persius interesset his et, in quot quidam persequeris vim, ad
            mea essent possim iriure.
          </p>
        </CardExt>
        <CardExt>
          <span>2000 ~ 2004</span>
          <h2>Computer Science</h2>
          <p className="ext-sub">International University</p>
          <p>
            Lisque persius interesset his et, in quot quidam persequeris vim, ad
            mea essent possim iriure.
          </p>
        </CardExt>
        <CardExt>
          <span>2000 ~ 2004</span>
          <h2>Computer Science</h2>
          <p className="ext-sub">International University</p>
          <p>
            Lisque persius interesset his et, in quot quidam persequeris vim, ad
            mea essent possim iriure.
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
      <ButtonCV>
        Download CV{" "}
        <AiOutlineCloudDownload size={20} style={{ marginLeft: "5px" }} />
      </ButtonCV>
    </Container>
  );
}
