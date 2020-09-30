import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CostDiv = styled.div`
  font-size: 20px;
  border: 1px solid black;
  margin-bottom: 25px;
`;

const SettingOnly = styled.span`
  font-size: 10px;
  border: 1px solid black;
  margin-left: 20px;
`;

const Cost = (props) => {
  const [cost, setCost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3030/cost/${props.state.pid}/${props.state.metal}`)
      .then((cost) => {
        setCost(cost.data.cost);
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <CostDiv>
      Cost {cost}
      <SettingOnly>
        (setting only)
      </SettingOnly>
    </CostDiv>
  );
}

export default Cost;