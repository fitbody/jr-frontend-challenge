import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(50vh - 60px);
  text-align: center;
  position: relative;
  background: #ffffff;
`;

const Title = styled.h1`
  margin: 0px;
  color: rgb(32, 35, 41);
  border: none;
  font-weight: 900;
  z-index: 1;
  font-size: 5.625rem;
  @media (max-width: 40.625em){
    font-size: 3.125rem;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Title>The Rick and Morty API</Title>
      <Link to="/favorites">
        <Button>Favorites</Button>
      </Link>
    </Container>
  );
};

export default Hero;
