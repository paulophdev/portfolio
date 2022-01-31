import Navegacao from "../../components/Navegacao";

import ArquivoOnline from "../../assets/img/projetos/arquivoonline.png";
import MedCash from "../../assets/img/projetos/medcash.png";
import Performar from "../../assets/img/projetos/performar.png";

import {
  Card,
  Container,
  Content,
  Title,
  TagGroup,
  Tag,
} from "../../styles/general";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Projetos() {
  return (
    <>
      <Navegacao active={2} />

      <Container>
        <Content>
          <Title>
            Meu Trabalho! <span>Coneça um pouco do que eu faço.</span>
          </Title>

          <Card>
            <p>Tecnologias que trabalho.</p>

            <TagGroup>
              <Tag>PHP</Tag>
              <Tag>JavaScript</Tag>
              <Tag>HTML5</Tag>
              <Tag>CSS3</Tag>
              <Tag>SQL</Tag>
              <Tag>MySql</Tag>
              <Tag>ReactJS</Tag>
              <Tag>AdonisJS</Tag>
              <Tag>Git</Tag>
              <Tag>NextJS</Tag>
              <Tag>Node</Tag>
            </TagGroup>

            <div className="CardGroup">
              <Link to="/gallery/arquivoonline" className="CardMax">
                <div className="CardHead">
                  <img src={ArquivoOnline} alt="Arquivo Online" />
                </div>
                <div className="CardBody">
                  <h2>Arquivo Online</h2>
                  <p>
                    Upload de arquivos com uma estrutura de pastas específica
                    para atender a demanda jurídica, sistema de privilégios de
                    acesso e um blog interno.
                  </p>
                </div>
              </Link>

              <Link to="/gallery/performar" className="CardMax">
                <div className="CardHead">
                  <img src={Performar} alt="Performar" />
                </div>
                <div className="CardBody">
                  <h2>Performar Soluções</h2>
                  <p>
                    Sistema de gerenciamento financeiro, geração de relatórios
                    como DRE, Planilha de Resultados e muito mais.
                  </p>
                </div>
              </Link>

              <Link to="/gallery/medcash" className="CardMax">
                <div className="CardHead">
                  <img src={MedCash} alt="Med-Cash" />
                </div>
                <div className="CardBody">
                  <h2>Med-Cash</h2>
                  <p>
                    Sistema de cashback voltado para área média de procedimentos
                    estéticos, cada cliente recebe uma pontuação por
                    procedimento realizado.
                  </p>
                </div>
              </Link>
            </div>

            <p className="CardDesculpas">
              Durante a maior parte do meu tempo como programador estive
              desenvolvendo sites e sistemas para uma empresa, por esse motivo
              não posso publicar a maior parte dos meus trabalhos.
            </p>
          </Card>
        </Content>
      </Container>
    </>
  );
}
