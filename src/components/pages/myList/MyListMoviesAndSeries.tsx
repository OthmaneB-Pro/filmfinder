import { useContext } from "react"
import { FavoriteList } from "../../../context/FavoriteList"
import CardPrimary from "../../reusable-ui/CardPrimary"

export default function MyListMoviesAndSeries() {
    const {isFavorite} = useContext(FavoriteList)
  return (
    <div>
        {isFavorite.map((item) => (
             <CardPrimary
             key={item.id}
             title={item.title}
             label={item.overview}
             date={item.release_date}
             image={item.poster_path}
             onClick={() => {}}
             onAddFavorite={() => {}}
           />
        ))}
    </div>
  )
}

