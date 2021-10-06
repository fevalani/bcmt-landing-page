import styled from "styled-components";
import backgroundImage from "../assets/images/footer-image.png";
import logoUFRJ from "../assets/images/UFRJ_Vertical_Tela_Negativo.png";
import logoCCMN from "../assets/images/logo-vertical-chapado-branco.png";

export default function Footer() {
  return (
    <Container>
      <div className="background-image"></div>
      <div className="footer-infos">
        <a href="https://ufrj.br/" target="_blank">
          <img className="logo-ufrj" src={logoUFRJ} alt="logo_universidade_ufrj" />
        </a>
        <div className="address">
          Av. Athos da Silveira Ramos, 498-530 - Cidade Universitária da Universidade Federal do Rio
          de Janeiro - Rio de Janeiro
        </div>
        <a href="https://www.ccmn.ufrj.br/" target="_blank">
          <img className="logo-ccmn" src={logoCCMN} alt="logo_ccmn" />
        </a>
      </div>
      <div className="copyright">Todos os direitos reservados</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  background-color: #003366;

  box-shadow: 0px 0px 4px black;

  display: flex;
  flex-direction: column;
  justify-content: start;

  .background-image {
    height: 40px;

    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
  }

  .footer-infos {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #fff;

    padding: 0px 20px 0px 10px;

    .logo-ufrj {
      height: 190px;

      cursor: pointer;
    }

    .address {
      width: 300px;
      text-align: center;
    }

    .logo-ccmn {
      height: 150px;

      cursor: pointer;
    }
  }

  .copyright {
    border-top: 2px solid #fff;

    padding: 2px 10px;

    font-size: 17px;
    color: #fff;
  }
`;
