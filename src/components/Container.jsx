import React from "react";
import styled from "styled-components";

  const Wrapper = styled.div`
    background: #24282f;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4.5rem 0px;
    background: rgb(36, 40, 47);
    min-height: 100vh;
    @media (max-width: 40.62em) {
    padding: 1.5rem;
  }
`;

  const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1920px;
  `;
const Container = ({ children }) => {
  return (
    <Wrapper>
      <CardsContainer>
        {children}
      </CardsContainer>
    </Wrapper>
  );
};

export default Container;
