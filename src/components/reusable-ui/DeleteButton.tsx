import { IoIosCloseCircleOutline } from "react-icons/io";
import styled from "styled-components";

type DeleteButtonProps = {
    onClick: () => void;
  };

export default function DeleteButton({onClick} : DeleteButtonProps) {
  return (
    <DeleteButtonStyled onClick={onClick}>
      <IoIosCloseCircleOutline />
    </DeleteButtonStyled>
  );
}

const DeleteButtonStyled = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 32px;
  }
  &:hover svg {
    color: #ff0404;
  }
`;
