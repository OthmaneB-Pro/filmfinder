import styled from "styled-components"

export default function LoadingPage() {
  return (
    <LoadingPageStyled>
      Chargement en cours...
    </LoadingPageStyled>
  )
}

const LoadingPageStyled = styled.div`
  height: 450px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
