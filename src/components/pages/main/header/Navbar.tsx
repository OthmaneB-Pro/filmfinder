import styled from "styled-components";
import { useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

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
      <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Recherchez" />
          <button type="submit" className="searchButton">
            <FaSearch />
          </button>
        </div>
      </div>
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

  .search {
    width: 100%;
    position: relative;
    display: flex;
  }
  .searchTerm {
    width: 50%;
    border-radius: 5px 0 0 5px;
    padding: 5px;
    border: 3px solid #bebec7;
    border-right: none;
  }
  .searchButton {
    width: 40px;
    height: 36px;
    border: 1px solid white;
    background: white;
    text-align: center;
    color: #bebec7;
    border: 1px solid #bebec7;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
  }
  .wrap {
    width: 20%;
    position: relative;
    margin-left: 10px;
    top: 5px;
  }
`;
