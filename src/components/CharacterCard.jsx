import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addFavorite, deleteFavorite } from "../redux/actions/favorites";
import Button from "./Button";

const Container = styled.article`
  width: 600px;
  display: flex;
  overflow: hidden;
  background: #ffffff;
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  @media (max-width: 40.62em) {
    flex-direction: column;
    height: initial;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  padding: 20px;
  flex: 2 1 0%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  color: #24282f;
  display: flex;
  flex-direction: column;
`;

const HeaderContent = styled.div`
  justify-content: flex-start;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  a {
    color: rgb(245, 245, 245);
  }
`;

const Section = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  span {
    color: rgb(158, 158, 158);
  }
`;

const StatusIcon = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(85, 204, 68);
  border-radius: 50%;
`;

const FavotiteIcon = styled.span`
  color: ${(props) => (props.favorite ? "red" : "rgb(158, 158, 158);")};
  font-size: 2.5rem;
  cursor: pointer;
`;
const SectionIcon = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
`;

const CharacterCard = ({ data }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state) => state);
  const [isFavorite, setIsFavorite] = useState(false);
  const first = 0;

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      dispatch(
        addFavorite({
          id: data.id,
          name: data.name,
          image: data.image,
          status: data.status,
          location: data.location?.name,
          origin: data.origin?.name,
          favorite: true,
        })
      );
    } else {
      dispatch(deleteFavorite(data.id));
    }
  };

  const checkFavorite = () => {
    const changeFavorite = favorites.filter((favorite) => {
      return favorite.id === data.id;
    });
    return changeFavorite[first]?.favorite;
  };

  return (
    <div>
      <Container>
        <ImageContainer>
          <img src={data.image} alt={data.name} />
        </ImageContainer>
        <ContentWrapper>
          <HeaderContent>
            <h2 style={{ color: "#000000" }}>{data.name}</h2>
            <span className="status">
              <StatusIcon></StatusIcon>
              {data.status}
            </span>
          </HeaderContent>
          <Section>
            <span>Last known location:</span>
            {data.location?.name}
          </Section>
          <Section>
            <span>First seen in:</span>
            {data.origin?.name}
          </Section>
          <Section>
            <span>Gender:</span>
            {data.gender}
          </Section>
          <Section>
            <span>Species:</span>
            {data.species}
          </Section>
          {data.type && (
            <Section>
              <span>type:</span>
              {data.type}
            </Section>
          )}
          <SectionIcon>
            Add to Favorites
            <FavotiteIcon favorite={checkFavorite()} onClick={handleFavorite}>
              &#x2665;
            </FavotiteIcon>
          </SectionIcon>
        </ContentWrapper>
      </Container>
      <Link to="/">
        <Button>go back</Button>
      </Link>
    </div>
  );
};

export default CharacterCard;
