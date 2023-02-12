import { Title } from "../../assets/styles/app";
import { Container, Content } from "./styles";

import { BsPalette, BsDisplay, BsBrush, BsCart3 } from "react-icons/bs";

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
              <BsPalette size={25} />
            </div>
          </div>
          <div className="card-body">
            <h1>Graphic Design</h1>
            <p>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
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
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
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
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
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
            <h1>Virtual store</h1>
            <p>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure.
            </p>
          </div>
        </div>
      </Content>
    </Container>
  );
}
