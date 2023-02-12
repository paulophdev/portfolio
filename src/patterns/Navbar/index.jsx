import { Container } from "./styles";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function index() {
  const [toggle, setToggle] = useState(false);

  function setActive(link) {
    const elements = document.getElementsByClassName("menu-item");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("active");
    }
    link.classList.add("active");
    setToggle(false);
  }

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
          <a
            href="#home"
            className="menu-item active"
            onClick={(e) => setActive(e.target)}
          >
            Principal
          </a>
        </div>
        <div>
          <a
            href="#about"
            className="menu-item"
            onClick={(e) => setActive(e.target)}
          >
            Sobre Mim
          </a>
        </div>
        <div>
          <a
            href="#service"
            className="menu-item"
            onClick={(e) => setActive(e.target)}
          >
            O que Faço
          </a>
        </div>
        <div>
          <a
            href="#experience"
            className="menu-item"
            onClick={(e) => setActive(e.target)}
          >
            Experiência
          </a>
        </div>
        <div>
          <a
            href="#contact"
            className="menu-item"
            onClick={(e) => setActive(e.target)}
          >
            Contato
          </a>
        </div>
      </div>
    </Container>
  );
}
