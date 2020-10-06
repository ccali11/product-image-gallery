import React from 'react';
import styled from 'styled-components';

const DescriptionDiv = styled.div`
  height: 20px;
  text-align: center;
  font-size: 13px;
  margin-bottom: 25px;
  z-index: 7;
`;

const renderDescription = (state) => {
  const { metal, cut, carat, productData } = state;
  const { name } = productData;

  const fullNames = {
    'yellow': 'Yellow Gold',
    'platinum': 'Platinum',
    'rose': 'Rose Gold',
    'white': 'White Gold'
  };

  const capFirst = (string) => {
    const firstCap = string.charAt(0).toUpperCase();
    const final = firstCap + string.slice(-(string.length - 1));
    return final;
  };

  const description1 = `${fullNames[metal]} ${name} Setting with a(n) ${capFirst(cut)} Cut Gem,`;
  const description2 = `Shown with a ${carat/100} Carat Stone`;

  return (
    <span>
      {description1} <br/>
      {description2}
    </span>
  );
}

const Description = (props) => {
  const state = props.state;


  return(
    <DescriptionDiv>
      {renderDescription(state)}
    </DescriptionDiv>
  );
};

export default Description;