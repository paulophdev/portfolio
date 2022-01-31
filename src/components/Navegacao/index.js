import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

import { BsLinkedin, BsWhatsapp, BsInstagram, BsGithub } from "react-icons/bs";

import { Container, ContentNav, ContentLinks } from "./styles";

export default function Navegacao({ active }) {
  return (
    <Container>
      <div>
        <Link to="/">
          <img src={Logo} alt="Paulo Dev" width={130} />
        </Link>
      </div>
      <ContentNav>
        <Link to="/" className={active === 1 ? `active` : ``}>
          Apresentação
        </Link>
        <Link to="/projetos" className={active === 2 ? `active` : ``}>
          Projetos
        </Link>
        <Link to="/contato" className={active === 3 ? `active` : ``}>
          Contato
        </Link>
      </ContentNav>
      <ContentLinks>
        <a
          href="https://github.com/paulophdev"
          title="Github"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub color="#6b518f" />
        </a>
        <a
          href="https://www.linkedin.com/in/paulo-henrique-065b5b212/"
          title="Linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin color="#0177b5" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5575992419101"
          title="Whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <BsWhatsapp color="#26d367" />
        </a>
        <a
          href="https://www.instagram.com/matospaulohn/"
          title="Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram color="#e42d27" />
        </a>
      </ContentLinks>
    </Container>
  );
}
