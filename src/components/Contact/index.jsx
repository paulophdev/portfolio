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

export default function index() {
  return (
    <Container id="contact">
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
        <Card>
          <div>
            <AiOutlineCloudDownload />
          </div>
          <div>Download CV</div>
          <div>
            <AiOutlineDownload />
          </div>
        </Card>
        <Card>
          <div>
            <AiOutlineMail />
          </div>
          <div>{Contacts.email}</div>
          <div>
            <AiOutlineCopy />
          </div>
        </Card>
        <Card>
          <div>
            <AiOutlineWhatsApp />
          </div>
          <div>{Contacts.phone}</div>
          <div>
            <AiOutlineCopy />
          </div>
        </Card>
      </Content>
    </Container>
  );
}
