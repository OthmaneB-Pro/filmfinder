import { useContext, useEffect } from "react";
import { FavoriteList } from "../../../context/FavoriteList";
import CardPrimary from "../../reusable-ui/CardPrimary";
import { useNavigate, useParams } from "react-router-dom";
import { getList } from "../../../api/list";
import styled from "styled-components";

export default function MyListMoviesAndSeries() {
  const { isFavorite, setIsFavorite } = useContext(FavoriteList);
  const { username } = useParams();
  const navigate = useNavigate();

  const handleDelete = (idProduct : number) => {
    const newFavorite = isFavorite.filter((product) => product.id !== idProduct)
    setIsFavorite(newFavorite)
    console.log(isFavorite)
  }

  useEffect(() => {
    if (username) {
      const fetchFavorites = async () => {
        const listReceived = await getList(username);
        setIsFavorite(listReceived);
      };
      fetchFavorites();
    }
  }, [username]);

  return (
    <ScrollableContainer>
      <MyListStyled>
        {isFavorite.map((item) => (
          <CardPrimary
            key={item.id}
            title={item.title}
            label={item.overview}
            date={item.release_date}
            image={item.poster_path}
            onClick={() => {
              navigate(`/${item.title}`);
            }}
            onFavorite={() => {}}
            isInMyList={true}
            onDelete={() => {handleDelete(item.id)}}

          />
        ))}
      </MyListStyled>
    </ScrollableContainer>
  );
}

const ScrollableContainer = styled.div`
  overflow-x: auto;
  scrollbar-width: none;
  display: flex;
  padding-left: 130px;
  margin-top: 50px;
  width: calc(93% - 130px);
`;

const MyListStyled = styled.div`
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
