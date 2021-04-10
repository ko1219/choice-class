import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Header from "./Header";
import ReviewForm from "./ReviewForm";
import Review from "./Review";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;
  max-width: 50%;
  width: 50%;
  float: left;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;

  &:last-child {
    background: black;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }
`;
const Main = styled.div`
  padding-left: 50px;
`;

const Curriculum = (props) => {
  const [curriculum, setCurriculum] = useState({});
  const [reviews, setReviews] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const slug = props.match.params.slug;

    axios
      .get(`/api/v1/curriculums/${slug}`)
      .then((resp) => {
        setCurriculum(resp.data);
        setReviews(resp.data.included);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, []);

  const handleChange = (e) => {
    setReview(Object.assign({ ...review, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const curriculum_id = parseInt(curriculum.data.id);
    axios
      .post("/api/v1/reviews", { ...review, curriculum_id })
      .then((resp) => {
        const included = [...curriculum.included, resp.data.data];
        setReviews([...reviews, resp.data.data]);
        setCurriculum({ ...curriculum, included });
        setReview({ title: "", description: "", score: 0 });
      })
      .catch((resp) => {});
  };

  const setRating = (score) => {
    setReview({ ...review, score });
  };

  let total,
    average = 0;
  let userReviews;

  if (reviews && reviews.length > 0) {
    total = reviews.reduce((total, review) => total + review.attributes.score, 0);
    average = total > 0 ? parseFloat(total) / reviews.length : 0;

    userReviews = reviews.map((review, index) => {
      return <Review key={index} is={review.id} attributes={review.attributes} />;
    });
  }

  return (
    <Wrapper>
      {loaded && (
        <Fragment>
          <Column>
            <Main>
              <Header attributes={curriculum.data.attributes} reviews={curriculum.included} average={average} />
              {userReviews}
            </Main>
          </Column>
          <Column>
            <ReviewForm name={curriculum.data.attributes.name} review={review} handleChange={handleChange} handleSubmit={handleSubmit} setRating={setRating} />
          </Column>
        </Fragment>
      )}
    </Wrapper>
  );
};
export default Curriculum;
