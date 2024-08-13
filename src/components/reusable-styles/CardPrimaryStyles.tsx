import styled from "styled-components";

export const ScrollableContainer = styled.div`
  overflow-x: auto;
  scrollbar-width: none;
  display: flex;
  padding-left: 130px;
  margin-top: 50px;
  width: calc(93% - 130px);
`;

export const CarouselStyled = styled.div`
  margin-right: 50px;
  margin-bottom: 150px;
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  grid-column-gap: -10px;
  & > div {
    flex: 0 0 calc(100% / 6);
    max-width: 300px;
  }
`;