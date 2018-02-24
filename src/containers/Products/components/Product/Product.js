import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductBox = styled.div`
  height: 100%;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8)),
    url(${props => props.image});
  background-size: cover;
`;

const ProductInfo = styled.div``;


const DaysLeft = styled.span`
  padding: 0.1rem 0.5rem;
  background-color: #fff;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 0.8rem;
  display: inline-block;
  margin-bottom: 0.4rem;
`;

const Name = styled.span`
  text-transform: uppercase;
  color: #fff;
  display: block;
  font-size: 1rem;
`;

const AverageRetailPrice = styled.span`
  font-size: 1rem;
  padding: 0.6rem 0;
`;

const Price = styled.span`
  font-weight: 400;
  margin-right: 0.4rem;
`;

const Product = props => {
  return (
    <ProductContainer>
      <ProductBox image={props.image}>
        <ProductInfo>
          <DaysLeft>{props.days_left} days left</DaysLeft>
          <Name>
            {props.index}. {props.name}
          </Name>
        </ProductInfo>
      </ProductBox>
      <AverageRetailPrice>
        <Price>${props.price}</Price>
        Average Retail Price
      </AverageRetailPrice>
    </ProductContainer>
  );
};

export default Product;
