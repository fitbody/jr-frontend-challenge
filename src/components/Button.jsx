import React from "react";
import styled from "styled-components";

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
  a {
    color: white;
  }
`;

const Button = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
