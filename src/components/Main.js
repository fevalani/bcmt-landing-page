import { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import {
  LogoYoutube,
  Reader,
  Mail,
  Easel,
  Book,
  TrendingUp,
  ListCircle,
  Business,
  Library,
  Newspaper,
  Desktop,
} from "react-ionicons";

export default function Main() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container position={scrollPosition}>
      <div className="comming-soon">
        Site Oficial em construção
        <Loader className="three-dots" type="ThreeDots" color="#000" height={40} width={40} />
      </div>
      <span>Links Úteis:</span>
      <div className="grid-links">
        <a
          className="button-59"
          href="http://www.speedyshare.com/drive/s/GE5dIu8EwESJEkySydikUPmB4JODOo"
          target="_blank"
        >
          Apresentação
          <Easel color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="https://siga.ufrj.br/sira/temas/zire/frameConsultas.jsp?mainPage=/repositorio-curriculo/1CCECD3F-92A4-F79D-6769-A55A93A1EB26.html"
          target="_blank"
        >
          Distribuição curricular BCMT
          <Reader color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="https://portal.ufrj.br/Portal/acesso?cid=87055"
          target="_blank"
        >
          Portal do Aluno UFRJ
          <Desktop color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="http://www.speedyshare.com/drive/s/0vsIZnsKyG6bnFTdRxJdH6E2VnApPZ"
          target="_blank"
        >
          Manual do Calouro 21.1
          <Newspaper color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="http://www.speedyshare.com/drive/s/Grv0INohKs6Qai8yU5627qYrN5mHYy"
          target="_blank"
        >
          Regulamento
          <Book color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="http://www.speedyshare.com/drive/s/vi4XIzRWHGjejVd2GrEpapiiIABNIZ"
          target="_blank"
        >
          Objetivos
          <TrendingUp color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="http://www.speedyshare.com/drive/s/5QBLKWh8rMhtksmzBgVYjQyGa4KYjh"
          target="_blank"
        >
          Disciplinas e Exigências
          <ListCircle color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="http://www.speedyshare.com/drive/s/1dcRCLwiVj3TQ1ldqIyxhyEpXkXZzM"
          target="_blank"
        >
          Coordenação
          <Business color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="http://www.speedyshare.com/drive/s/KoTP3XN5clxfDmWmLr4905LmF93aGm"
          target="_blank"
        >
          Analista de Sup. à Decisão
          <Library color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="https://siga.ufrj.br/sira/temas/zire/frameConsultas.jsp?mainPage=/repositorio-curriculo/91D11513-92A4-F799-1817-75D69383A7B9.html"
          target="_blank"
        >
          Distribuição curricular: Análise
          <Reader color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="http://www.speedyshare.com/drive/s/RKygH17IoLiwJnfPJluLxpfVUwzeeh"
          target="_blank"
        >
          Sensoriamento remoto e Geoprocessamento
          <Library color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="https://siga.ufrj.br/sira/repositorio-curriculo/distribuicoes/8C768E10-92A4-F79B-6A3A-191E92752891.html"
          target="_blank"
        >
          Distribuição curricular: Sensoriamento
          <Reader color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="http://www.speedyshare.com/drive/s/q0YlyDxYyMTetaJCFEUzgEw6aQluk0"
          target="_blank"
        >
          Ciências da Terra e Patrimônio Natural
          <Library color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="https://siga.ufrj.br/sira/repositorio-curriculo/F04BDFF5-92A4-F79A-5A68-EF48B3805A33.html"
          target="_blank"
        >
          Distribuição curricular: Patrimônio
          <Reader color={"#00253F"} height="70px" width="70px" />
        </a>

        <a className="button-59" href="https://siac.ufrj.br/" target="_blank">
          11ª SIAc
          <Mail color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="http://www.speedyshare.com/drive/s/wWqHD61SnM3ocBRf7gkaIQ1jG49JaD"
          target="_blank"
        >
          Contatos
          <Mail color={"#00253F"} height="70px" width="70px" />
        </a>

        <a
          className="button-59"
          href="https://www.youtube.com/channel/UCuF83xF3xC2mwcW6aGU9KfQ"
          target="_blank"
        >
          Nosso Canal
          <LogoYoutube color={"#00253F"} height="70px" width="70px" />
        </a>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;

  padding: 40px 20px;
  margin-top: ${({ position }) => (position <= 160 ? "0px" : "200px")};

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
      border: 2px solid #00253f;
      box-shadow: 0px 0px 3px #c9cfc7;

      background-color: #f0f4f7;

      font-size: 20px;
      font-weight: bold;

      margin-bottom: 25px;
      padding: 10px;

      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
    }

    & > a:hover {
      background-color: #cdd1d4;
    }
  }

  @media (min-width: 768px) {
    .button-59 {
      min-width: 170px;
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
