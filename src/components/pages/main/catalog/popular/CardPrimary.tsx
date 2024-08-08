import styled from "styled-components";
import ButtonPrimary from "../../../../reusable-ui/ButtonPrimary";
import { FaArrowRight } from "react-icons/fa";

type CardPrimaryType = {
  title: string;
  label: string;
  date: string;
  image: string;
};

export default function CardPrimary({
  title,
  label,
  date,
  image,
}: CardPrimaryType) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${image}`;
  return (
    <CardPrimaryStyled>
      <div className="image">
        <img src={imageUrl} alt="categories" />
      </div>
      <div>
        <div className="title">{title}</div>
        <div className="description">{label}</div>
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
  height: 600px;
  position: relative;
  display: grid;
  grid-template-rows: 2fr 1fr;
  overflow: hidden;
  border: 3px solid black;
  margin-top: 30px;
  margin-left: 40px;
  padding: 10px;

  .image {
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 380px;
      object-fit: cover;
    }
  }
  .title {
    width: 300px;
    margin-bottom: 20px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Caflisch Script, Adobe Poetica, Sanvito, cursive;
    color: #25a3dd;
    text-overflow: ellipsis;
    white-space: nowrap;
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
