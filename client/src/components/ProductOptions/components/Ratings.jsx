import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';

const RatingDiv = styled.div`
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

  const formattedRatings = (ratingCount) => {
    return ratingCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

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
      <RatingCount>({formattedRatings(props.productData.ratingcount)})</RatingCount>
    </RatingDiv>
  );
};

export default Ratings;