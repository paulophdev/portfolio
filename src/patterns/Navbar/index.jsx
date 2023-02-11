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
        <div className="active">Principal</div>
        <div>Sobre Mim</div>
        <div>O que Faço</div>
        <div>Experiência</div>
        <div>Portifólio</div>
        <div>Contato</div>
      </div>
    </Container>
  );
}
