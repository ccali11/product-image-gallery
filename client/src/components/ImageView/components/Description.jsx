import React from 'react';
import styled from 'styled-components';

const DescriptionDiv = styled.div`
height: 20px;
border: 1px solid black;
text-align: center;
`;

const Description = () => {
  return(
    <DescriptionDiv>
      Description
    </DescriptionDiv>
  );
};

export default Description;