import styled from "styled-components";
import image from "../assets/images/background_header.png";

export default function Header() {
  return (
    <Container>
      <div className="title">BCMT</div>
      <div className="sub-title">Bacharelado em Ciências Matemáticas e da Terra</div>
    </Container>
  );
}

const Container = styled.div`
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
    color: white;
    font-size: 75px;
    font-weight: bold;
    line-height: 69px;
  }

  .sub-title {
    width: 226px;
    color: white;

    font-size: 17px;
    text-align: center;
  }
`;
