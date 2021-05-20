import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

const Container = styled.article`
  width: 600px;
  height: 220px;
  display: flex;
  overflow: hidden;
  background: rgb(60, 62, 68);
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
  flex: 2 1 0%;
  width: 100%;
`;

const ContentWrapper = styled.div`
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  color: rgb(255, 255, 255);
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
  -webkit-box-pack: center;
  justify-content: center;
  span {
    color: rgb(158, 158, 158);
  }
  a {
    color: rgb(245, 245, 245);
  }
`;

const StatusIcon = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(85, 204, 68);
  border-radius: 50%;
`;

const Card = ({ data, resume }) => {
  return (
    <Container>
      <ImageContainer>
        <img src={data.image} alt={data.name} />
      </ImageContainer>
      <ContentWrapper>
        <HeaderContent>
          <Link to={`/character/${data.id}`}>
            <h2>{data.name}</h2>
          </Link>
          <span className="status">
            <StatusIcon></StatusIcon>
            {data.status}
          </span>
        </HeaderContent>
        {!resume && 
        <>
          <Section>
            <span>Last known location:</span>
            {data.location.name}
          </Section>
          <Section>
            <span>First seen in:</span>
            {data.origin.name}
          </Section>
        </>
        }
      </ContentWrapper>
    </Container>
  );
};

export default Card;
