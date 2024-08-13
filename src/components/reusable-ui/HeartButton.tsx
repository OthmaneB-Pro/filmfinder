import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import { useState,  } from "react";

type HeartButtonProps = {
  onClick: () => void;
  isFavorite?: boolean; 
};

export default function HeartButton({ onClick, isFavorite = false }: HeartButtonProps) {
  const [active, setActive] = useState(isFavorite);

  const handleClick = () => {
    setActive(!active);
    onClick();
  };

  return (
    <HeartButtonStyled className={active ? "active" : ""} onClick={handleClick}>
      <CiHeart />
    </HeartButtonStyled>
  );
}

const HeartButtonStyled = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 36px;
  }
  &.active svg {
    color: #ff0404;
  }
`;
