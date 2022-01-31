import Navegacao from "../../components/Navegacao";

import { Container, Content, Title, Card } from "../../styles/general";

import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { BsLinkedin, BsWhatsapp, BsInstagram, BsGithub } from "react-icons/bs";
import "./styles.css";

export default function Contato() {
  return (
    <>
      <Navegacao active={3} />

      <Container>
        <Content>
          <Title>
            Fale Comigo! <span>Estou aguardando seu contato.</span>
          </Title>

          <Card>
            <p>Segue minha informações de contato.</p>
            <br />
            <ul className="ListContact">
              <li>
                <AiOutlineMail />
                &nbsp;
                <a href="mailto: paulophdev@gmail.com" rel="noreferrer">
                  paulophdev@gmail.com
                </a>
              </li>
              <li>
                <AiFillPhone />
                &nbsp;(75) 99241-9101
              </li>
              <li>_______________Links Úteis_______________</li>
              <li>
                <a
                  href="https://github.com/paulophdev"
                  title="Github"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub /> Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/paulo-henrique-065b5b212/"
                  title="Linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin /> Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5575992419101"
                  title="Whatsapp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsWhatsapp /> Whatsapp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/matospaulohn/"
                  title="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsInstagram /> Instagam
                </a>
              </li>
            </ul>
          </Card>
        </Content>
      </Container>
    </>
  );
}
