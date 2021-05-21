import React from "react";
import styled from "styled-components";

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3em;
`;

const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
  background-color: #ededed;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  color: #777777;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-shadow: 0px 1px 0px #ffffff;
  margin-left: 1em;
  &:hover {
    background: linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
    background-color: #dfdfdf;
  }
`;

const Pagination = ({ pageNumber, setPageNumber, maxPages }) => {
  const handlePrev = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const handleNext = () => {
    if (pageNumber === maxPages) return;
    setPageNumber(pageNumber + 1);
  };

  return (
    <ContainerButtons>
      <Button onClick={handlePrev}>prev page</Button>
      <Button onClick={handleNext}>next page</Button>
    </ContainerButtons>
  );
};

export default Pagination;
