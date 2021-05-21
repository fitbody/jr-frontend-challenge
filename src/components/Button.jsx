import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const ButtonContainer = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;

const Button = ({ children, isFavorite }) => {
  const history = useHistory();
  return (
    <ButtonContainer
      onClick={() => {
        isFavorite ? history.push("/favorites") : history.goBack();
      }}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
