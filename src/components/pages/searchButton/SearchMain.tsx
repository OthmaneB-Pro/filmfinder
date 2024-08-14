import FooterMainPage from "../../reusable-ui/FooterPage";
import HeaderSearch from "./headerSearch/HeaderSearch";
import SearchButtonPage from "./searchButton/SearchButtonPage";

export default function SearchMain() {
  return (
    <div>
      <HeaderSearch />
      <SearchButtonPage />
      <FooterMainPage />
    </div>
  );
}
