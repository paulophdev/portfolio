import Navegacao from "../../components/Navegacao";

import Profile from "../../assets/img/pp.jpg";

import {
  Container,
  Content,
  Title,
  Card,
  BlockquoteGeral,
} from "../../styles/general";
import "./styles.css";
import { Link } from "react-router-dom";

import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function Apresentacao() {
  return (
    <>
      <Navegacao active={1} />

      <Container>
        <Content>
          <Title>
            Hello World! <span>A tecnologia move o mundo!</span>
          </Title>

          <Card>
            <div className="ImagemProfile">
              <img src={Profile} alt="Paulo Henrique do Nascimento Matos" />
            </div>
            <h1 className="title-h1">Sobre Mim</h1>
            <p className="paragraph-p">
              Olá, sou Paulo Henrique!
              <br />
              Trabalho com programação um pouco mais do que três anos, durante
              esse período desenvolvi e participei do desenvolvimento de dezenas
              de projetos dos mais amplos nichos.
              <br />
              Nos últimos anos venho acomulando experiência em tecnologia,
              desenvolvimento de software, trabalho em equipe e muito mais.
              <br />
              Uma das minhas melhores habilidades e a que mais me orgulho é a
              capacidade de lhe dar com os clientes e conseguir entender suas
              necessidades, mesmo quando o projeto ainda é uma ideia na cabeça
              do cliente.
              <br />
              Ainda há muito para saber sobre mim, mas antes de entrar em
              contato comigo dê uma olhada nos{" "}
              <Link to="/projetos" className="color-a-ajust">
                meus projetos.
              </Link>
              <br />
              <BlockquoteGeral>
                <p>
                  <ImQuotesLeft />
                  &nbsp;A primeira regra de qualquer tecnologia utilizada nos
                  negócios é que a automação aplicada a uma operação eficiente
                  aumentará a eficiência. A segunda é que a automação aplicada a
                  uma operação ineficiente aumentará a ineficiência.&nbsp;
                  <ImQuotesRight />
                </p>
                <cite>Bill Gates</cite>
              </BlockquoteGeral>
            </p>
          </Card>
        </Content>
      </Container>
    </>
  );
}
