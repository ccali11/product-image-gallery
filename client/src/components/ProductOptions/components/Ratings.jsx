import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const RatingDiv = styled.div`
  border: 1px solid black;
  margin-bottom: 25px;
`;

const RatingCount = styled.span`
  font-size: 12px;
  transition: 0.75s;
  margin-left: 10px;
  &:hover {
    color: #3e9f8e;
  }
`;

const Ratings = (props) => {
  return (
    <RatingDiv>
      <StarRatings
        rating={Number(props.productData.rating)}
        starRatedColor="rgb(92,162,148)"
        starEmptyColor="rgb(150,150,150)"
        starDimension="15px"
        starSpacing="0"
        numberOfStars={5}
      />
      <RatingCount>({props.productData.ratingcount})</RatingCount>
    </RatingDiv>
  );
};

export default Ratings;