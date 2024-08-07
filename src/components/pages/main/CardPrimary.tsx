import styled from "styled-components";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import { FaArrowRight } from "react-icons/fa";

export default function CardPrimary() {
  return (
    <CardPrimaryStyled>
      <div className="image">
          <img src="/img/affiche-avenger-afinity.jpg" alt="categories" />
      </div>
      <div>
      <div className="title">Avenger</div>
      <div className="description">Les Avengers sont une équipe de super-héros issus des comics Marvel. Réunis par Nick Fury, ils se battent pour protéger la Terre contre des menaces globales. Leur formation initiale inclut Iron Man, Thor, Hulk, Captain America, Black Widow et Hawkeye. Ensemble, ils affrontent des ennemis puissants comme Loki, Ultron et Thanos. Leur courage et leur union font d'eux les défenseurs ultimes de l'humanité.</div>
      <div className="card-footer">
        <span>2024</span>
        <ButtonPrimary className="card-button" label={<FaArrowRight />} onClick={() => {}}/>
        </div>
    </div>
    </CardPrimaryStyled>
  );
}

const CardPrimaryStyled = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
  display: grid;
  grid-template-rows: 2fr 3fr;
  overflow: hidden;
  border: 1px solid black;
  margin-top: 30px;
  margin-left: 40px;
  padding: 10px;

  .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .title{
    margin-bottom: 20px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Caflisch Script, Adobe Poetica, Sanvito, cursive;
    color: #25a3dd;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .card-button{
    width: 60px;

  }
  .card-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;

    span{
        font-family: bold ;
        font-size: 25px;
    }
  }
  .description{
    height: 155px;
    text-overflow: ellipsis;
    overflow-y: auto;
    scrollbar-width: none;
  }
`;
