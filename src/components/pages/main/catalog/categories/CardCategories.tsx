import styled from "styled-components";

type CardCategoriesType = {
  label? : string;
  href? : string;
  image? : string;
}

export default function CardCategories({label, href, image} : CardCategoriesType) {
  return (
    <CardCategoriesStyled>
      <div className="image">
       <a href={href} ><img src={image} alt="categories" /></a>
      </div>
      <div className="categories">{label}</div>
    </CardCategoriesStyled>
  );
}

const CardCategoriesStyled = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  display: grid;
  grid-template-rows: 3fr 1fr;
  overflow: hidden;
  border: 1px solid black;
  margin-top: 30px;

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
  .categories {
    background: #25a3dd;
    color: white;
    font-family: Caflisch Script, Adobe Poetica, Sanvito, cursive;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover{
        color: #25a3dd;
        background: white;
    }
  }
`;
