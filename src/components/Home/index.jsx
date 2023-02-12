import { useState, useEffect } from "react";
import { Container } from "./styles";

export default function index() {
  const [text, setText] = useState("Olá, Sou Paulo Henrique");

  const writeScreen = (text, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        writeScreen(text, i + 1);
      }, 100);
    }
  };

  useEffect(() => {
    writeScreen(text);
  }, []);

  return (
    <Container id="home">
      <h3>Bem Vindo(a)</h3>
      <h1>{text}</h1>
      <p>Desenvolvedor de Sites e Sistemas da Web</p>
      <a href="#contact">Fale Comigo</a>
    </Container>
  );
}
