import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Title from "./Title";

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

const Hero = () => {
  return (
    <Container>
      <Title>The Rick and Morty API</Title>
      <Button isFavorite={true}>Favorites</Button>
    </Container>
  );
};

export default Hero;
