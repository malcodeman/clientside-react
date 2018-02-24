import React from "react";
import styled from "styled-components";

const BrandBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const BrandLogo = styled.img`
  height: 64px;
  width: 64px;
  margin-bottom: 0.4rem;
`;

const BrandTitle = styled.span`
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const Brand = props => {
  return (
    <BrandBox>
      <BrandLogo src={props.logo} />
      <BrandTitle>{props.name}</BrandTitle>
    </BrandBox>
  );
};

export default Brand;
