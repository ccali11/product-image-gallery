import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CaratSelectorDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 50px;
  border: 0;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
`;

const CaratOptionSpan = styled.span`
  position: relative;
  display: inline;
`;

const CaratOptions = styled.input`
  margin: 0px 65px 0px 65px;
  &:checked ${CaratOptionSpan} {
    background-color: red;
  }
`;

const CaratLabel = styled.span`
  opacity: 0;
  position: absolute;
  top: 25px;
  left: 47px;
  width: 50px;
  text-align: center;
  transition: .5s;
  ${CaratOptionSpan}:hover & {
    opacity: 100;
  }
`;

const Label = styled.span`
  position: absolute;
  font-size: 13px;
`;

const Label1 = styled(Label)`

`;

const Label2 = styled(Label)`
  right: 20px;
`;

const CaratSelector = (props) => {
  const [radioCarat, setRadioCarat] = useState(150);

  const clickHandler = {
    50: () => { setRadioCarat(50) },
    100: () => { setRadioCarat(100) },
    150: () => { setRadioCarat(150) },
    200: () => { setRadioCarat(200) }
  }

  useEffect(() => {
    props.set.setCarat(radioCarat);
  }, [radioCarat]);

  return (
    <CaratSelectorDiv>
      <form>
        <Label1>1/2 Carat</Label1>
        <CaratOptionSpan>
          <CaratOptions type='radio' name='carat-option' onClick={clickHandler['50']}/>
          <CaratLabel>1/2</CaratLabel>
        </CaratOptionSpan>
        <CaratOptionSpan>
          <CaratOptions type='radio' name='carat-option' onClick={clickHandler['100']}/>
          <CaratLabel>1</CaratLabel>
        </CaratOptionSpan>
        <CaratOptionSpan>
          <CaratOptions type='radio' name='carat-option' onClick={clickHandler['150']}/>
          <CaratLabel>1 1/2</CaratLabel>
        </CaratOptionSpan>
        <CaratOptionSpan>
          <CaratOptions type='radio' name='carat-option' onClick={clickHandler['200']}/>
          <CaratLabel>2</CaratLabel>
        </CaratOptionSpan>
        <Label2>2 Carat</Label2>
      </form>
    </CaratSelectorDiv>
  );
};

export default CaratSelector;