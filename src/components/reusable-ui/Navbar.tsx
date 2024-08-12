import styled from "styled-components";
import SearchButton from "../pages/main/header/SearchButton";
import { FaHouse } from "react-icons/fa6";
import { useContext } from "react";
import { FavoriteList } from "../../context/FavoriteList";

export default function Navbar() {
  const { username } = useContext(FavoriteList);
  return (
    <ListeStyled>
      <li>
        <a href="/main/:username"><FaHouse /></a>
      </li>
      <li>
        <a href="/movies/:username">Films</a>
      </li>
      <li>
        <a href="/series/:username">Séries</a>
      </li>
      <li>
        <a href="/myList/:username">Votre liste : {username}</a>
      </li>
      <SearchButton />
    </ListeStyled>
  );
}

const ListeStyled = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #25a3dd;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  z-index: 1;

  li {
    float: left;
    border-right: 1px solid #bbb;
  }

  li:last-child {
    border-right: none;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: white;
    color: #25a3dd;
  }
`;
