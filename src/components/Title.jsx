import React from "react";
import styled from "styled-components";

const TitleStyle = styled.h1`
  margin: 0px;
  color: ${(props) => (props.primary ? "#ffffff" : "#000000")};
  border: none;
  font-weight: 900;
  z-index: 1;
  font-size: 5.625rem;
  @media (max-width: 40.625em) {
    font-size: 3.125rem;
  }
`;
const Title = ({children, primary}) => {
  return <TitleStyle primary={primary}>{children}</TitleStyle>;
};

export default Title;
