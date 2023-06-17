import { Title } from "../../assets/styles/app";
import { Card, Container, Content } from "./styles";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
  AiOutlineLink,
  AiOutlineCloudDownload,
  AiOutlineDownload,
  AiOutlineCopy,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Contacts from "../../../contacts";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CV from "../../assets/docs/CV.pdf";

export default function index() {
  const notify = () =>
    toast.success("Conteúdo Copiado!", {
      position: "top-right",
      autoClose: 1000,
    });

  return (
    <Container id="contact">
      <ToastContainer />
      <Title>
        <h1>Contato</h1>
        <p>Entre em Contato</p>
      </Title>

      <Content>
        <a href={Contacts.github} target="_blank">
          <Card>
            <div>
              <AiFillGithub />
            </div>
            <div>Github</div>
            <div>
              <AiOutlineLink />
            </div>
          </Card>
        </a>
        <a href={Contacts.instagram} target="_blank">
          <Card>
            <div>
              <AiFillInstagram />
            </div>
            <div>Instagram</div>
            <div>
              <AiOutlineLink />
            </div>
          </Card>
        </a>
        <a href={Contacts.linkedin} target="_blank">
          <Card>
            <div>
              <AiFillLinkedin />
            </div>
            <div>Linkedin</div>
            <div>
              <AiOutlineLink />
            </div>
          </Card>
        </a>
        <a href={Contacts.facebook} target="_blank">
          <Card>
            <div>
              <AiFillFacebook />
            </div>
            <div>Facebook</div>
            <div>
              <AiOutlineLink />
            </div>
          </Card>
        </a>
        <a href={CV} download>
          <Card>
            <div>
              <AiOutlineCloudDownload />
            </div>
            <div>Download CV</div>
            <div>
              <AiOutlineDownload />
            </div>
          </Card>
        </a>
        <a href={`mailto:${Contacts.email}`}>
          <Card title={Contacts.email}>
            <div>
              <AiOutlineMail />
            </div>

            <div>{Contacts.email}</div>

            <div>
              <AiOutlineCopy />
            </div>
          </Card>
        </a>
        <a href={`tel:${Contacts.phone}`}>
          <Card title={Contacts.phone}>
            <div>
              <AiOutlineWhatsApp />
            </div>
            <div>{Contacts.phone}</div>
            <div>
              <AiOutlineCopy />
            </div>
          </Card>
        </a>
      </Content>
    </Container>
  );
}
