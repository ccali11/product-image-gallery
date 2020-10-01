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
  margin: auto;
`;

const Thumbnail = styled.img`
  width: 100%;
  object-fit:cover;
  border-radius: 5px;
  transition: .75s;
  border: ${props => (props.selected ? '2px solid #3e9f8e' : '2px solid #FFFFFF')};
`;

const Thumb = (props) => {

  return (
    <ThumbDiv>
      <Thumbnail selected={props.selected} src={props.source} />
    </ThumbDiv>
  );
};

export default Thumb;