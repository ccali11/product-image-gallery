import React from 'react';
import styled from 'styled-components';
import MetalSelector from './components/MetalSelector.jsx';
import Ratings from './components/Ratings.jsx';
import Cost from './components/Cost.jsx';
import axios from 'axios';

const ProductOptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 375px;
  height: 500px;
  border: 1px solid black;
`;

const MetalName = styled.div`
  font-size: 12px;
  border: 1px solid black;
  margin-bottom: 5px;
`;

const Name = styled.div`
  font-size: 26px;
  border: 1px solid black;
  margin-bottom: 5px;
`;

const ChooseSetting = styled.button`
  width: 100%;
  font-size: 20px;
  border: 1px solid black;
  margin-bottom: 15px;
`;

const AddToWishlist = styled.button`
  width: 100%;
  font-size: 20px;
  border: 1px solid black;
  margin-bottom: 25px;
`;

const ShippingBlurb = styled.div`
  border: 1px solid black;
  height: 80px;
  margin-bottom: 10px;
`;

const DropHint = styled.div`
  border: 1px solid black;
  height: 60px;
`;

const ProductOptions = (props) => {
  const [productData, setProductData] = useState({
    name: null,
    rating: 0,
    ratingcount: 0
  });

  useEffect(() => {
    axios.get(`http://localhost:3030/static/${props.state.pid}`)
      .then((results) => {
        setProductData({
          name: results.data.name
        });
      })
      .catch((err) => {
        console.error(err);
      })
  })

  return (
    <ProductOptionsDiv>
        <MetalName>Metal Name</MetalName>
        <Name>Product Name</Name>
        <Ratings productData={productData}/>
        <Cost state={props.state}/>
        <MetalSelector set={props.set} state={props.state}/>
        <ChooseSetting>CHOOSE THIS SETTING</ChooseSetting>
        <AddToWishlist>❤ WISH LIST</AddToWishlist>
        <ShippingBlurb>Shipping blurb here</ShippingBlurb>
        <DropHint>Drop Hint</DropHint>
      </ProductOptionsDiv>
  );
};

export default ProductOptions;