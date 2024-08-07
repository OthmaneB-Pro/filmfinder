import styled from "styled-components"

export default function Logo() {
  return (
    <ImageStyled><img src="/img/filmFinderLogo.png" alt="FilmFinder" /></ImageStyled>
  )
}


const ImageStyled = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
`
