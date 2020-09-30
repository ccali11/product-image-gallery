import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CostDiv = styled.div`
  font-size: 20px;
  margin-bottom: 25px;
`;

const SettingOnly = styled.span`
  font-size: 15px;
  margin-left: 10px;
`;

const Cost = (props) => {
  const [cost, setCost] = useState(0);

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
      ${cost}
      <SettingOnly>
        (setting only)
      </SettingOnly>
    </CostDiv>
  );
}

export default Cost;