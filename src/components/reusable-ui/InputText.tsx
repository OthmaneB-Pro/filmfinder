import styled from "styled-components";

type InputType = {
    type : string;
    value: string;
    name: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

export default function InputText({type, value, name, placeholder, onChange, required} : InputType) {
  return (
    <InputTextStyled>
      <input
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </InputTextStyled>
  );
}

const InputTextStyled = styled.div`
    input {
    display: flex;
    margin-bottom: 30px;
    padding: 10px;
    width: 310px;
    border-radius: 5px;
  }
`