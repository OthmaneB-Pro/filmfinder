import { useContext, useEffect } from "react"
import { FavoriteList } from "../../../context/FavoriteList"
import CardPrimary from "../../reusable-ui/CardPrimary"
import { useNavigate, useParams } from "react-router-dom"
import { getList } from "../../../api/list"

export default function MyListMoviesAndSeries() {
    const {isFavorite, setIsFavorite} = useContext(FavoriteList)
    const {username} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        console.log("Username:", username); 
        if (username) {
          const fetchFavorites = async () => {
            const listReceived = await getList(username);
            setIsFavorite(listReceived);
            console.log("listReceived", listReceived);
          };
          fetchFavorites();
        }
      }, [username]);

  return (
    <div>
        {isFavorite.map((item) => (
             <CardPrimary
             key={item.id}
             title={item.title}
             label={item.overview}
             date={item.release_date}
             image={item.poster_path}
             onClick={() => {navigate(`/${item.title}`)}}
             onAddFavorite={() => {}}
           />
        ))}
    </div>
  )
}

