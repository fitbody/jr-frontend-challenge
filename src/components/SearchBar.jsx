import React from "react";
import styled from "styled-components";

const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3em;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #ffffff;
  color: #000000;
  border-style: solid;
  border-radius: 0px;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
`;

const SearchBar = ({ setSearchText }) => {
  return (
    <ContainerInput>
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchText(e.target.value)}
      />
    </ContainerInput>
  );
};

export default SearchBar;
