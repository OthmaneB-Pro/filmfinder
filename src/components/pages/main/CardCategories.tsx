import styled from "styled-components";

export default function CardCategories() {
  return (
    <CardCategoriesStyled>
      <div className="image">
       <a href="/" ><img src="/img/affiche-avenger-afinity.jpg" alt="categories" /></a>
      </div>
      <div className="categories">Action</div>
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
