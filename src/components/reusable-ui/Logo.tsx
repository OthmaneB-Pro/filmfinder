import styled from "styled-components"

type LogoType = {
    className? : string;
}

export default function Logo({className}: LogoType) {
  return (
    <ImageStyled className={className}><img src="/img/filmFinderLogo.png" alt="FilmFinder" /></ImageStyled>
  )
}


const ImageStyled = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
`
