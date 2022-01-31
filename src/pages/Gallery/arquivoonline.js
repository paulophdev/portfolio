import Navegacao from "../../components/Navegacao";
import {
  Card,
  Container,
  Content,
  Tag,
  TagGroup,
  Title,
} from "../../styles/general";

import "photoswipe/dist/photoswipe.css";
import "photoswipe/dist/default-skin/default-skin.css";

import { Gallery, Item } from "react-photoswipe-gallery";

import Imagem01 from "../../assets/img/projetos/arquivoonline/01.png";
import Imagem02 from "../../assets/img/projetos/arquivoonline/02.png";
import Imagem03 from "../../assets/img/projetos/arquivoonline/03.png";
import Imagem04 from "../../assets/img/projetos/arquivoonline/04.png";
import Imagem05 from "../../assets/img/projetos/arquivoonline/05.png";

export default function ArquivoOnline() {
  return (
    <>
      <Navegacao active={2} />

      <Container>
        <Content>
          <Title>Arquivo Online</Title>

          <Card>
            <p>Status do projeto: Em Desenvolvimento</p>

            <TagGroup>
              <Tag>NextJS</Tag>
              <Tag>AdonisJS</Tag>
              <Tag>Git</Tag>
              <Tag>MySql</Tag>
              <Tag>AWS S3</Tag>
            </TagGroup>

            <Gallery>
              <Item
                original={Imagem01}
                thumbnail={Imagem01}
                width="1000"
                height="500"
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Imagem01}
                    alt=""
                    width="100%"
                  />
                )}
              </Item>

              <Item
                original={Imagem02}
                thumbnail={Imagem02}
                width="1000"
                height="500"
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Imagem02}
                    alt=""
                    width="100%"
                  />
                )}
              </Item>

              <Item
                original={Imagem03}
                thumbnail={Imagem03}
                width="1000"
                height="500"
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Imagem03}
                    alt=""
                    width="100%"
                  />
                )}
              </Item>

              <Item
                original={Imagem04}
                thumbnail={Imagem04}
                width="1000"
                height="500"
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Imagem04}
                    alt=""
                    width="100%"
                  />
                )}
              </Item>

              <Item
                original={Imagem05}
                thumbnail={Imagem05}
                width="1000"
                height="500"
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={Imagem05}
                    alt=""
                    width="100%"
                  />
                )}
              </Item>
            </Gallery>
          </Card>
        </Content>
      </Container>
    </>
  );
}
