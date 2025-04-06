import { Title } from "../../assets/styles/app";
import { Container, Content } from "./styles";

import { BsChatDots, BsLightbulb, BsFolderCheck, BsPuzzle } from "react-icons/bs";

export default function index() {
  return (
    <Container id="service">
      <Title>
        <h1>Diferenciais</h1>
        <p>Soft skills</p>
      </Title>

      <Content>
        <div className="card">
          <div className="card-icon">
            <div>
              <BsChatDots size={25} />
            </div>
          </div>
          <div className="card-body">
            <h1>Comunicação</h1>
            <p>
              Trabalho muito bem em equipe, sei me expressar com clareza e estou sempre pronto para contribuir com ideias que realmente agregam valor ao projeto.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <div>
              <BsLightbulb size={25} />
            </div>
          </div>
          <div className="card-body">
            <h1>Aprendizado contínuo</h1>
            <p>
              Sou movido por desafios e adoro aprender coisas novas. Atualmente, estou me aprofundando em Inteligência Artificial.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <div>
              <BsFolderCheck size={25} />
            </div>
          </div>
          <div className="card-body">
            <h1>Organização</h1>
            <p>
              Tenho um perfil altamente organizado. Documentar processos, manter padrões e estruturar entregas com clareza fazem parte da minha rotina.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <div>
              <BsPuzzle size={25} />
            </div>
          </div>
          <div className="card-body">
            <h1>Pensamento crítico</h1>
            <p>
              Analiso cenários com autonomia, questiono se necessário e proponho soluções com base no que realmente faz sentido para o projeto.
            </p>
          </div>
        </div>
      </Content>
    </Container>
  );
}
