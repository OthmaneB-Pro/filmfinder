import styled from "styled-components"
import CardPrimary from "./CardPrimary"

export default function PopularMovieAndSeries() {
  return (
    <PopularStyled>
        <CardPrimary/>
        <CardPrimary/>
        <CardPrimary/>
        <CardPrimary/>
    </PopularStyled>
  )
}


const PopularStyled = styled.div`
margin-left: 60px;
margin-right: 50px;
margin-bottom: 150px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap : -10px;

`