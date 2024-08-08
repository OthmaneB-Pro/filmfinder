import styled from "styled-components";
import ButtonPrimary from "../../../../reusable-ui/ButtonPrimary";
import { FaArrowRight } from "react-icons/fa";

type CardPrimaryType = {
  title: string;
  label: string;
  date : string;
}

export default function CardPrimary({title, label, date} : CardPrimaryType) {
  return (
    <CardPrimaryStyled>
      <div className="image">
        <img src="/img/affiche-avenger-afinity.jpg" alt="categories" />
      </div>
      <div>
        <div className="title">{title}</div>
        <div className="description">
          {label}
        </div>
        <div className="card-footer">
          <span>{date}</span>
          <ButtonPrimary
            className="card-button"
            label={<FaArrowRight />}
            onClick={() => {}}
          />
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
  .title {
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
  .card-button {
    width: 60px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-family: bold;
      font-size: 25px;
    }
  }
  .description {
    height: 155px;
    text-overflow: ellipsis;
    overflow-y: auto;
    scrollbar-width: none;
  }
`;
