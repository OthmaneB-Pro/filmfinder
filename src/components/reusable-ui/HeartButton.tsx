import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";

type HeartButtonProps = {
  isActive?: boolean;
  onClick: () => void;
};

export default function HeartButton({ isActive = false, onClick }: HeartButtonProps) {
  const [active, setActive] = useState(isActive);

  const handleClick = () => {
    setActive(!active);
    onClick();
    if(!active){
        console.log("oui")
    }
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
