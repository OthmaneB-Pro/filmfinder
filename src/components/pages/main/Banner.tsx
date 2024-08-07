import styled from "styled-components"

export default function Banner() {
  return (
    <BannerStyled>
      <img src="/img/banniere_elementaire.jpeg" alt="Elementaire" />
    </BannerStyled>
  )
}

const BannerStyled = styled.div`
    height: 450px;
    position : relative;
    overflow: hidden;
    img{
        position: absolute;
    }
`