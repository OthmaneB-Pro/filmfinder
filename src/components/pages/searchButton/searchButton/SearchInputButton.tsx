import styled from "styled-components";

type SearchInputButtonProps = {
  name: string;
  setName: (value: string) => void;
};

export default function SearchInputButton({
  name,
  setName,
}: SearchInputButtonProps) {
  return (
    <SearchInputStyled>
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </SearchInputStyled>
  );
}

const SearchInputStyled = styled.div`
  margin-top: 30px;
  
  display: flex;
  justify-content: center;
  input {
    padding: 10px;
    width: 300px;
    border-radius: 10px;
    border: 2px solid #25a3dd;
  }
`;
