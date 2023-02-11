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
          <a href="#home">Principal</a>
        </div>
        <div>
          <a href="#about">Sobre Mim</a>
        </div>
        <div>
          <a href="#about">O que Faço</a>
        </div>
        <div>
          <a href="#experience">Experiência</a>
        </div>
        <div>
          <a href="#portfolio">Portifólio</a>
        </div>
        <div>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </Container>
  );
}
