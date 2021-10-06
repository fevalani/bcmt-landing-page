import styled from "styled-components";
import Loader from "react-loader-spinner";
import { LogoYoutube, Reader, Newspaper } from "react-ionicons";

export default function Main() {
  return (
    <Container>
      <div className="comming-soon">
        Site Oficial em construção
        <Loader className="three-dots" type="ThreeDots" color="#000" height={40} width={40} />
      </div>
      <span>Links Úteis:</span>
      <div className="grid-links">
        <a
          href="https://siga.ufrj.br/sira/temas/zire/frameConsultas.jsp?mainPage=/repositorio-curriculo/1CCECD3F-92A4-F79D-6769-A55A93A1EB26.html"
          target="_blank"
        >
          Grade curricular
          <Reader color={"#000000"} height="70px" width="70px" />
        </a>
        <a href="https://www.youtube.com/channel/UCuF83xF3xC2mwcW6aGU9KfQ" target="_blank">
          Nosso Canal
          <LogoYoutube color={"#000000"} height="70px" width="70px" />
        </a>
        <a href="#" target="_blank">
          Exemplo
          <Newspaper color={"#000000"} height="70px" width="70px" />
        </a>
        <a href="#" target="_blank">
          Exemplo
          <Newspaper color={"#000000"} height="70px" width="70px" />
        </a>
        <a href="#" target="_blank">
          Exemplo
          <Newspaper color={"#000000"} height="70px" width="70px" />
        </a>
        <a href="#" target="_blank">
          Exemplo
          <Newspaper color={"#000000"} height="70px" width="70px" />
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;

  padding: 40px 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    font-size: 30px;
    text-decoration: underline;
  }

  .comming-soon {
    font-weight: bold;
    font-size: 65px;
    color: #000;

    display: flex;
    align-items: flex-start;

    margin-bottom: 40px;

    .three-dots {
      margin-left: 5px;
      margin-top: 10px;
    }
  }

  .grid-links {
    width: 100%;
    height: 100%;

    margin-top: 60px;

    display: grid;
    grid-gap: 50px;
    grid-template-columns: auto auto;
    justify-content: space-evenly;

    & > a {
      height: 200px;
      width: 200px;

      border-radius: 10px;

      background-color: #f1faee;

      font-size: 25px;
      font-weight: bold;

      margin-bottom: 25px;
      padding: 10ox;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }

  @media (max-width: 900px) {
    .comming-soon {
      font-size: 45px;
    }
  }

  @media (max-width: 650px) {
    .comming-soon {
      font-size: 25px;

      .three-dots {
        margin-left: 5px;
        margin-top: 0px;
        margin-bottom: 5px;
      }
    }

    .grid-links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
