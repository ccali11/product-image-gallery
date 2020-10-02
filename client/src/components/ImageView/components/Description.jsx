import React from 'react';
import styled from 'styled-components';

const DescriptionDiv = styled.div`
height: 20px;
border: 1px solid black;
text-align: center;
`;

const renderDescription = (state) => {
  const { metal, cut, carat, productData } = state;
  const { name } = productData;

  return (
    <span>
      Description
    </span>
  );
}

const Description = (props) => {
  const state = props.state;


  return(
    <DescriptionDiv>
      {}
    </DescriptionDiv>
  );
};

export default Description;