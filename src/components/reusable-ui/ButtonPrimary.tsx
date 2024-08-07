import styled from "styled-components";

type ButtonType = {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    label : string;
}

export default function ButtonPrimary({onClick, label}: ButtonType) {
  return (
    <ButtonStyled onClick={onClick}>{label}</ButtonStyled>

  )
}

const ButtonStyled = styled.button`
    padding: 10px;
    width: 335px;
    border-radius: 5px;
    background: #2996d9;
    border-color: #2996d9;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: #2996d9;
      transition: 0.5s;
    }
  
`
