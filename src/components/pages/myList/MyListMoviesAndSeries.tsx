import { useContext, useEffect } from "react";
import { FavoriteList } from "../../../context/UserContext";
import CardPrimary from "../../reusable-ui/CardPrimary";
import { useNavigate, useParams } from "react-router-dom";
import { getList } from "../../../api/list";
import EmptyList from "./EmptyList";
import {
  CarouselStyled,
  ScrollableContainer,
} from "../../reusable-styles/CardPrimaryStyles";

export default function MyListMoviesAndSeries() {
  const { isFavorite, setIsFavorite, onDeleteFavorite } =
    useContext(FavoriteList);
  const { username } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      const fetchFavorites = async () => {
        const listReceived = await getList(username);
        setIsFavorite(listReceived);
      };
      fetchFavorites();
    }
  }, [username, setIsFavorite]);

  return (
    <ScrollableContainer>
      <CarouselStyled>
        {isFavorite.length ? "" : <EmptyList />}
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
            onDelete={() => {
              onDeleteFavorite(item.id);
            }}
          />
        ))}
      </CarouselStyled>
    </ScrollableContainer>
  );
}
