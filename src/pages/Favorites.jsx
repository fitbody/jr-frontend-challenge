import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../components/Container";
import Card from "../components/Card";
import Title from "../components/Title";
import Button from "../components/Button";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3em 0;
`;

const Favorites = () => {
  const { favorites } = useSelector((state) => state);
  return (
    <>
      <HeaderContainer>
        <Title primary>Favorites</Title>
      </HeaderContainer>
      <HeaderContainer>
        <Button>go back</Button>
      </HeaderContainer>
      <Container>
        {favorites.map((character) => (
          <Card key={character.id} data={character} resume={true} />
        ))}
        {!favorites.length && (
          <div style={{ color: "#ffffff" }}>you have no favorites added</div>
        )}
      </Container>
    </>
  );
};

export default Favorites;
