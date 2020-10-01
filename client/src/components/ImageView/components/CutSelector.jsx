import React from 'react';
import styled from 'styled-components';

const DropdownDiv = styled.div`
position:relative;
display: inline-block;
`;

const CutSelectorButton = styled.button`
position: relative;
display: flex;
height: 35px;
width: 100%;
border: 1px solid lightgrey;
justify-content: center;
align-items: center;
`;

const CutMenu = styled.div`
display: none;
position: absolute;
top: -180px;
border: 1px solid lightgrey;
background-color: white;
z-index: 1;
min-width: 100%;
${DropdownDiv}:hover & {
  display: block;
}
`;

const CutDiv = styled.div`
height: 30px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
&:hover {
  background-color: lightgrey;
}
`;

const cuts = [
  'Asscher',
  'Emerald',
  'Oval',
  'Pear',
  'Princess',
  'Round'
];

const CutSelector = (props) => {
  const set = props.set;
  const state = props.state;

  const capFirst = (string) => {
    const firstCap = string.charAt(0).toUpperCase();
    const final = firstCap + string.slice(-(string.length - 1));
    return final;
  };

  const clickHandler = {
    Asscher: () => { set.setCut('asscher') },
    Emerald: () => { set.setCut('emerald') },
    Oval: () => { set.setCut('oval') },
    Pear: () => { set.setCut('pear') },
    Princess: () => { set.setCut('princess') },
    Round: () => { set.setCut('round') }
  };

  return (
    <DropdownDiv>
      <CutMenu>
        <CutDiv onClick={clickHandler[cuts[0]]}>{cuts[0]}</CutDiv>
        <CutDiv onClick={clickHandler[cuts[1]]}>{cuts[1]}</CutDiv>
        <CutDiv onClick={clickHandler[cuts[2]]}>{cuts[2]}</CutDiv>
        <CutDiv onClick={clickHandler[cuts[3]]}>{cuts[3]}</CutDiv>
        <CutDiv onClick={clickHandler[cuts[4]]}>{cuts[4]}</CutDiv>
        <CutDiv onClick={clickHandler[cuts[5]]}>{cuts[5]}</CutDiv>
      </CutMenu>
      <CutSelectorButton>
        View with: {capFirst(state.cut)}
      </CutSelectorButton>
    </DropdownDiv>
  );
};

export default CutSelector;