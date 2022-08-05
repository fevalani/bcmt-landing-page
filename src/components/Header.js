import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import image from "../assets/images/background_header.png";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

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
    <Container className="header" position={scrollPosition}>
      <div className="title" onClick={() => (location.pathname !== "/" ? navigate(-1) : "")}>
        BCMT
      </div>
      <div className="sub-title">Bacharelado em Ciências Matemáticas e da Terra</div>
    </Container>
  );
}

const Container = styled.div`
  ${({ position }) => {
    if (position >= 160) {
      return `
			background-image: url(${image});
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
			background-attachment: fixed;

			max-width: 1210px;
			width: 100%;

			position: fixed;
			top: 0;
			left: auto;
			right: auto;
			z-index: 1;
			height: 50px;

			display: flex;
			align-items: center;

			box-shadow: 0px 2px 10px -2px #000;
			padding: 0 20px;

			.title {
				color: #fff;
				font-size: 35px;
				font-weight: bold;
				cursor: pointer;
			}

			.sub-title {
				display: none;
			}
		  `;
    } else {
      return `
			width: 100%;
			height: 200px;

			background-image: url(${image});
			background-position: center;
			background-size: cover;

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			box-shadow: 0px 2px 10px -2px #000;
			.title {
				color: #fff;
				font-size: 75px;
				font-weight: bold;
				line-height: 69px;
				cursor: pointer;

			}

			.sub-title {
				width: 226px;
				color: white;

				font-size: 17px;
				text-align: center;
			}`;
    }
  }}
`;
