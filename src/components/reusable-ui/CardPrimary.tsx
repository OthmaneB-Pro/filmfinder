import styled from "styled-components";
import ButtonPrimary from "./ButtonPrimary";
import HeartButton from "./HeartButton";
import { FaArrowRight } from "react-icons/fa";
import DeleteButton from "./DeleteButton";

type CardPrimaryType = {
  title: string;
  label: string;
  date: string;
  image: string;
  onClick: () => void;
  onFavorite: () => void;
  isInMyList? : boolean;
  onDelete? : () => void ;
};

export default function CardPrimary({
  title,
  label,
  date,
  image,
  onClick,
  onFavorite,
  isInMyList,
  onDelete,
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
          {isInMyList && onDelete && <DeleteButton onClick={onDelete}/>}
          <HeartButton onClick={onFavorite} />
          <ButtonPrimary
            className="card-button"
            label={<FaArrowRight />}
            onClick={onClick}
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
  border: 3px solid grey;
  border-radius: 15px;
  box-shadow: -8px 8px 20px 0px rgba(24, 148, 209, 0.833);
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
    justify-content: start;
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
