import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'

export default function SearchButton() {
  return (
    <SearchButtonStyle className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Recherchez" />
          <button type="submit" className="searchButton">
            <FaSearch />
          </button>
        </div>
      </SearchButtonStyle>
  )
}

const SearchButtonStyle = styled.div`
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
`