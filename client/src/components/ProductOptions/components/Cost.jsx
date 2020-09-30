import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

  return (
    <CostDiv>
      Cost
      <SettingOnly>
        (setting only)
      </SettingOnly>
    </CostDiv>
  );
}

export default Cost;