import FooterMainPage from "../../reusable-ui/FooterPage";
import GenresCards from "./GenresCards";
import HeaderGenres from "./header/HeaderGenres";

export default function GenresMoviesPage() {
  return (
    <div>
      <HeaderGenres/>
      <GenresCards/>
      <FooterMainPage/>
    </div>
  )
}
