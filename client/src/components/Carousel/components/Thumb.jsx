import React from 'react';
import styled from 'styled-components';

const ThumbDiv = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background-color: white;
  width: 80px;
  height: 80px;
  font-size: 60px;
  margin-bottom: 15px;
  margin-left: 5px;
  margin-right: 5px;
`;

const Thumbnail = styled.img`
  width: 100%;
  object-fit:cover;
`;

const Thumb = (props) => {

  return (
    <ThumbDiv>
      <Thumbnail src={props.source} />
    </ThumbDiv>
  );
};

export default Thumb;