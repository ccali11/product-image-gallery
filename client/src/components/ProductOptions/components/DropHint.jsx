import React from 'react';
import styled from 'styled-components';

const DropHintDiv = styled.div`
  height: 60px;
`;

const DropHintTxt = styled.div`
  margin-top: 15px;
  margin-left: 60px;
  transition: .5s;
  &:hover {
    color: #3e9f8e;
  }
`;

const HeartEnvelope = styled.img`
  height: 40px;
  float: left;
`;

const DropHint = () => {
  return (
    <DropHintDiv>
      <HeartEnvelope src='https://radiant-dearth.s3.us-east-2.amazonaws.com/icons/drop-hint.png' />
      <DropHintTxt>
        Drop Hint
      </DropHintTxt>
    </DropHintDiv>
  );
}

export default DropHint;