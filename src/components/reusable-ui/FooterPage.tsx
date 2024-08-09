import styled from "styled-components";

export default function FooterMainPage() {
  return (
    <FooterStyled>
      <div className="contact">
        <ul>
          <h3>Contactez-moi !</h3>
          <li>Téléphone : 07 68 77 70 67</li>
          <li>
            Github : <a href="https://github.com/OthmaneB-Pro/">OthmaneB-Pro</a>
          </li>
          <li>
            Email :{" "}
            <a href="mailto:othmane.baar@gmail.com"> othmane.baar@gmail.com</a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="a-propos">
        <p>
          <h3>À propos de moi</h3>
          Je me présente, Othmane BAAR, développeur frontend spécialisé en React
          et TypeScript. Fort de mon expertise, je suis disponible pour des
          missions freelance en régie. N'hésitez pas à me contacter pour
          collaborer sur vos projets web.
        </p>
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  width: 98.9%;
  height: 320px;
  background-color: #25a3dd;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 22px;
  padding: 10px;
  overflow: hidden;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.2);
  .contact {
    display: flex;
    justify-content: end;
  }
  .a-propos {
    width: 500px;
    display: flex;
    text-align: center;
  }
`;
