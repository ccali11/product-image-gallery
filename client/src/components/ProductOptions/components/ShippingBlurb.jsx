import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const TruckIcon = styled.img`
  float: left;
  width: 70px;
  margin-top: 10px;
  margin-right: 10px;
`;

const ShippingBlurbDiv = styled.div`
  font-size: 13px;
  height: 80px;
  margin-bottom: 10px;
`;

const ShipDate = styled.span`
  font-weight: 800;
  color: #3e9f8e;
`;

const ShippingBlurb = () => {
  const date = new Date();
  date.setDate(date.getDate() + 3);

  return (
    <ShippingBlurbDiv>
          <TruckIcon src='https://radiant-dearth.s3.us-east-2.amazonaws.com/icons/my-truck.png'/>
            Free Shipping. Free 30 Day Returns.<br/>
            Order Now for Delivery <br/>
            by <ShipDate>{moment(date).format('dddd, MMMM Do')}</ShipDate>
    </ShippingBlurbDiv>
  );
};

export default ShippingBlurb;