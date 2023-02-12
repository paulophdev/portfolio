import { Title } from "../../assets/styles/app";
import { Container, Content } from "./styles";

import { BsBarChartLine, BsDisplay, BsBrush, BsCart3 } from "react-icons/bs";

export default function index() {
  return (
    <Container id="service">
      <Title>
        <h1>Serviços</h1>
        <p>O que eu faço?</p>
      </Title>

      <Content>
        <div className="card">
          <div className="card-icon">
            <div>
              <BsBarChartLine size={25} />
            </div>
          </div>
          <div className="card-body">
            <h1>Relatórios</h1>
            <p>
              Entrego relatórios como DRE, Planilha de Resultados e Movimento de
              Caixa, de acordo com as informações de sua empresa.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <div>
              <BsDisplay size={25} />
            </div>
          </div>
          <div className="card-body">
            <h1>Web Design</h1>
            <p>
              Desenvolvo seu site e sistema de forma rápida e efeciente, e
              garanto que a entrega final estára alinhado com suas espectativas.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <div>
              <BsBrush size={25} />
            </div>
          </div>
          <div className="card-body">
            <h1>UI/UX Design</h1>
            <p>
              Foco em tornar a experiência do usuário o mais simples e eficiente
              possível, além de tornar mais fácil a conclusão de qualquer tarefa
              que o usuário precisar.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-icon">
            <div>
              <BsCart3 size={25} />
            </div>
          </div>
          <div className="card-body">
            <h1>Loja Virtual</h1>
            <p>
              Crio sua loja virtual com todas as preferências e conveniências
              oferecidas por qualquer outra loja virtual no mercado.
            </p>
          </div>
        </div>
      </Content>
    </Container>
  );
}
