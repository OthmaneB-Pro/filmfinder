import { useContext } from "react";
import ButtonPrimary from "../../reusable-ui/ButtonPrimary";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import styled from "styled-components";
import { FavoriteList } from "../../../context/UserContext";

export default function ButtonNextAndPrevious() {
  const { page, setPage } = useContext(FavoriteList);

  const handleClickPrevious = () => {
    {
      page === 1 ? setPage(page) : setPage(page - 1);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClickNext = () => {
    setPage(page + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ButtonNexTAndPreviousStyled>
      <ButtonPrimary
        label={<FaArrowCircleLeft />}
        onClick={handleClickPrevious}
        className="button-next-page"
      />
      <ButtonPrimary
        label={
          <>
            Page Suivante <FaArrowCircleRight />
          </>
        }
        onClick={handleClickNext}
        className="button-next-page"
      />
    </ButtonNexTAndPreviousStyled>
  );
}

const ButtonNexTAndPreviousStyled = styled.div`
  .button-next-page {
    width: 180px;
    margin-left: 40px;
    margin-top: 20px;
  }
`;
