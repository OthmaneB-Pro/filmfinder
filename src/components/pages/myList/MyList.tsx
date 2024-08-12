import FooterPage from "../../reusable-ui/FooterPage";
import HeaderList from "./header/HeaderList";
import MyListMoviesAndSeries from "./MyListMoviesAndSeries";

export default function MyList() {
  return (
    <div>
      <HeaderList />
      <MyListMoviesAndSeries/>
      <FooterPage/>
    </div>
  )
}
