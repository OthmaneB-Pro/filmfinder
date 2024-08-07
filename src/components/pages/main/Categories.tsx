import styled from "styled-components";
import CardCategories from "./CardCategories";

export default function Categories() {
  return (
    <CategoriesStyled>
        <CardCategories />
        <CardCategories />
        <CardCategories />
        <CardCategories />
        <CardCategories />
        <CardCategories />
        <CardCategories />
        <CardCategories />
        <CardCategories />
        <CardCategories />
    </CategoriesStyled>
  )
}

const CategoriesStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-left: 130px;
    margin-top: 50px;
`