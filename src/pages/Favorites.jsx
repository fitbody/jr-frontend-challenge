import React from 'react'
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"
import Container from '../components/Container';
import Card from '../components/Card'

const Favorites = () => {
  const { favorites } = useSelector((state) => state);
  return (
    <Container>
      {favorites.map((character) => (
        <Card key={character.id} data={character} resume={true} />
      ))}
      {!favorites.length && (
        <div style={{ color: "#ffffff" }}>
          you have no favorites added{" "}
          <Link to="/" style={{ color: "grey" }}>
            go back
          </Link>
        </div>
      )}
    </Container>
  );
}

export default Favorites
