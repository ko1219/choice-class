import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Curriculum from "./Curriculum";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`;
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px
  width: 100%;
  padding: 20px
`;

const Curriculums = () => {
  const [curriculums, setCurriculums] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/curriculums.json")
      .then((resp) => {
        setCurriculums(resp.data.data);
      })
      .catch((resp) => console.log(resp));
  }, [curriculums.length]);

  const grid = curriculums.map((curriculum, index) => {
    const { name, slug, avg_score } = curriculum.attributes;
    return <Curriculum key={index} name={name} slug={slug} avg_score={avg_score} />;
  });

  return (
    <Fragment>
      <Home>
        <Header>
          <h1>ChoiceClass</h1>
          <Subheader>Honest, unbiased curriculum reviews.</Subheader>
        </Header>
        <Grid>{grid}</Grid>
      </Home>
    </Fragment>
  );
};

export default Curriculums;
