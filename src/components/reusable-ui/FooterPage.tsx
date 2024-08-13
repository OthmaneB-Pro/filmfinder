import styled from "styled-components";

export default function FooterMainPage() {
  return (
    <FooterStyled>
      <div className="contact">
        <h2>Contactez-moi !</h2>
        <ul>
          <li>Téléphone : 07 68 77 70 67</li>
          <li>
            Github : <a href="https://github.com/OthmaneB-Pro/">OthmaneB-Pro</a>
          </li>
          <li>
            Email :{" "}
            <a href="mailto:othmane.baar@gmail.com">othmane.baar@gmail.com</a>
          </li>
        </ul>
      </div>
      <div className="a-propos">
        <h2>À propos de moi</h2>
        <p>
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
  width: 100%;
  height: 320px;
  background-color: #25a3dd;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  font-size: 18px;
  overflow: hidden;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;

  .contact {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 200px;
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      li {
        margin-bottom: 10px;
        a {
          color: #ffdd00;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  .a-propos {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      max-width: 500px;
      text-align: center;
    }
   
  }
`;
