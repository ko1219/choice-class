import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
  padding-top: 10px;
  margin: 15px 15px;
`;
const CurriculumName = styled.div`
  padding: 20px 0 10px 0;
  font-weight: bold;
`;
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;

  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`;

const Curriculum = ({ name, avg_score, slug, ...props }) => {
  return (
    <Card>
      <CurriculumName>{name}</CurriculumName>
      <div className="curriculum-score">{avg_score}</div>
      <LinkWrapper>
        <Link to={`/curriculums/${slug}`}>View Curriculum</Link>
      </LinkWrapper>
    </Card>
  );
};

export default Curriculum;
