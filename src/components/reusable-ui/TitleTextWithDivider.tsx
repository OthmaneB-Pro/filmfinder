import styled from "styled-components";

type TitleTextType = {
  className?: string;
  label: string;
};

export default function TitleTextWithDivider({
  className,
  label,
}: TitleTextType) {

  return (
    <TitleTextStyled className={className}>
      <p>{label}</p>
      <hr />
    </TitleTextStyled>
  );
}

const TitleTextStyled = styled.div`

  p {
    font-size: 30px;
    color: #25a3dd;
    font-family: "Arial AC";
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  hr {
    width: 50%;
  }
`;
