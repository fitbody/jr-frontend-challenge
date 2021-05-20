/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import CharacterCard from "../components/CharacterCard";

const Character = ({ match }) => {
  const [data, setData] = useState([]);
  const params = match.params;
  
  const getCharacter = async () => {
    await axios
    .get(`https://rickandmortyapi.com/api/character/${params.id}`)
    .then((response) => setData(response.data))
    .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCharacter(setData);
  }, []);
  
  return (
    <Container>
      <CharacterCard data={data}></CharacterCard>
    </Container>
  );
};

export default Character;
