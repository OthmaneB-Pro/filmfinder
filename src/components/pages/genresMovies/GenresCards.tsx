import { useParams } from "react-router-dom"

export default function GenresCards() {
  const {genre} = useParams()
  return (
    <div>
        Requete Axios pour prendre les films en genre = crime...
    </div>
  )
}
