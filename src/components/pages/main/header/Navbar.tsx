import styled from "styled-components";
import { useParams } from "react-router-dom";
import SearchButton from "./SearchButton";

export default function Navbar() {
  const { username } = useParams();
  return (
    <ListeStyled>
      <li>
        <a href="/">Films</a>
      </li>
      <li>
        <a href="/">Séries</a>
      </li>
      <li>
        <a href="/">Votre liste : {username}</a>
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
