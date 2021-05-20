import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers(setData);
  }, []);

  const getUsers = async (setData) => {
    await axios
      .get(`https://rickandmortyapi.com/api/character/?page=1`)
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <Hero />
      <Container>
        {data.results?.map((character) => (
          <Card
            key={character.id}
            data={character}
          />
        ))}
      </Container>
    </div>
  );
};

export default Home;
