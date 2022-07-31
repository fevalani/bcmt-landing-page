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
  Calendar,
} from "react-ionicons";
import { useNavigate } from "react-router-dom";

import content from "../assets/content/content.js";

export default function Main({ setSelectedTitle }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  let navigate = useNavigate();

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

  function selectIcon(icon) {
    if (icon === "Easel") {
      return <Easel color={"#00253F"} height="70px" width="70px" />;
    } else if (icon === "LogoYoutube") {
      return <LogoYoutube color={"#00253F"} height="70px" width="70px" />;
    } else if (icon === "Reader") {
      return <Reader color={"#00253F"} height="70px" width="70px" />;
    } else if (icon === "Mail") {
      return <Mail color={"#00253F"} height="70px" width="70px" />;
    } else if (icon === "Book") {
      return <Book color={"#00253F"} height="70px" width="70px" />;
    } else if (icon === "TrendingUp") {
      return <TrendingUp color={"#00253F"} height="70px" width="70px" />;
    } else if (icon === "ListCircle") {
      return <ListCircle color={"#00253F"} height="70px" width="70px" />;
    } else if (icon === "Business") {
      return <Business color={"#00253F"} height="70px" width="70px" />;
    } else if (icon === "Library") {
      return <Library color={"#00253F"} height="70px" width="70px" />;
    } else if (icon === "Newspaper") {
      return <Newspaper color={"#00253F"} height="70px" width="70px" />;
    } else if (icon === "Desktop") {
      return <Desktop color={"#00253F"} height="70px" width="70px" />;
    } else {
      return <Calendar color={"#00253F"} height="70px" width="70px" />;
    }
  }

  return (
    <Container position={scrollPosition}>
      <div className="comming-soon">
        Site Oficial em construção
        <Loader className="three-dots" type="ThreeDots" color="#000" height={40} width={40} />
      </div>
      <span>Por enquanto alguns links úteis:</span>

      <div className="grid-links">
        {content.map((element, i) => {
          if (element.href === "") {
            return (
              <Button
                onClick={() => {
                  setSelectedTitle(element.title);
                  navigate("/content");
                }}
                key={i}
              >
                {element.title}
                {selectIcon(element.icon)}
              </Button>
            );
          } else {
            return (
              <a className="button-59" href={element.href} target="_blank" rel="noreferrer" key={i}>
                {element.title}
                {selectIcon(element.icon)}
              </a>
            );
          }
        })}

        <a
          className="button-59"
          href="https://www.youtube.com/channel/UCuF83xF3xC2mwcW6aGU9KfQ"
          target="_blank"
          rel="noreferrer"
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

const Button = styled.button`
  height: 200px;
  width: 200px;

  border-radius: 10px;
  border: 2px solid #00253f;
  box-shadow: 0px 0px 3px #c9cfc7;

  background-color: #f0f4f7;

  font-size: 20px;
  font-weight: bold;
  font-family: inherit;

  margin-bottom: 25px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  :hover {
    background-color: #cdd1d4;
  }

  @media (min-width: 768px) {
    min-width: 170px;
  }
`;
