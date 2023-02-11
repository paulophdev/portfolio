import { Container } from "./styles";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function index() {
  const [toggle, setToggle] = useState(false);

  return (
    <Container toggle={toggle}>
      <span className="toggle-menu">
        <AiOutlineMenu size={30} onClick={() => setToggle(true)} />
      </span>
      <div className="menu-nav">
        <span className="close-menu">
          <AiOutlineClose size={50} onClick={() => setToggle(false)} />
        </span>
        <div className="active">
          <a href="#home" onClick={() => setToggle(false)}>
            Principal
          </a>
        </div>
        <div>
          <a href="#about" onClick={() => setToggle(false)}>
            Sobre Mim
          </a>
        </div>
        <div>
          <a href="#service" onClick={() => setToggle(false)}>
            O que Faço
          </a>
        </div>
        <div>
          <a href="#experience" onClick={() => setToggle(false)}>
            Experiência
          </a>
        </div>
        <div>
          <a href="#portfolio" onClick={() => setToggle(false)}>
            Portifólio
          </a>
        </div>
        <div>
          <a href="#contact" onClick={() => setToggle(false)}>
            Contato
          </a>
        </div>
      </div>
    </Container>
  );
}
