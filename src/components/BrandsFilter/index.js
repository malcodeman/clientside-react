import React, { Component } from "react";
import styled from "styled-components";
import Brand from "./Brand";
import ChevronRightIcon from "../../img/chevron-right.svg";
import ChevronLeftIcon from "../../img/chevron-left.svg";
import GucciLogo from "../../img/gucci.png";
import Brands from "../../json/brands.json";

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const BrandsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const BrandsBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

class BrandsFilter extends Component {
  state = {
    brands: Brands,
    limit: 6
  };
  render() {
    return (
      <BrandsContainer>
        <Icon src={ChevronLeftIcon} />
        <BrandsBox>
          {this.state.brands
            .slice(0, this.state.limit)
            .map(brand => (
              <Brand key={brand.id} logo={GucciLogo} name={brand.name} />
            ))}
        </BrandsBox>
        <Icon src={ChevronRightIcon} />
      </BrandsContainer>
    );
  }
}

export default BrandsFilter;
