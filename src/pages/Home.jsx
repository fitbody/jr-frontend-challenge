import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const Home = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCharacters(pageNumber, setData);
  }, [pageNumber]);

  const getCharacters = async (page, setData) => {
    setIsLoading(true);
    await axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Hero />
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        maxPages={data?.info?.count}
      />
      <Container>
        {isLoading ? (
          <ReactLoading />
        ) : (
          data.results?.map((character) => (
            <Card key={character.id} data={character} />
          ))
        )}
      </Container>
    </div>
  );
};

export default Home;
