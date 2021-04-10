import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;

  h1 {
    font-weight: bold;
  }
`;
const TotalReviews = styled.div`
  margin-top: 60px;
  font-size: 22px;
`;
const TotalOutOf = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const Header = (props) => {
  const { name, avg_score } = props.attributes;
  const total = props.reviews.length;
  return (
    <Wrapper>
      <h1>{name}</h1>
      <div>
        <TotalReviews>{total} Reviews</TotalReviews>
        <h1>{avg_score}</h1>
        <TotalOutOf>{avg_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  );
};
export default Header;
