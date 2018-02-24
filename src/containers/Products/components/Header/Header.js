import React from "react";
import styled from "styled-components";
import ChevronLeftIcon from "./img/chevron-left.svg";
import ChevronRightIcon from "./img/chevron-right.svg";
import Brand from "./components/Brand/Brand";
import Brands from "../../../../json/brands.json";
import BrandLogo from "./img/gucci.png";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

const HeaderSection = styled.header`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const NavSection = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 1.8rem;
  text-transform: uppercase;
`;

const BrandsContainer = styled.div`
  margin: 0 auto;
  max-width: 900px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

class Header extends React.Component {
  state = {
    brands: Brands,
    limit: 6
  };
  render() {
    return (
      <HeaderSection>
        <NavSection>
          <Container>
            <Nav>
              <Logo>Shiff</Logo>
            </Nav>
          </Container>
        </NavSection>
        <BrandsContainer>
          <Icon src={ChevronLeftIcon} />
          {this.state.brands
            .slice(0, this.state.limit)
            .map(brand => (
              <Brand key={brand.id} logo={BrandLogo} name={brand.name} />
            ))}
          <Icon src={ChevronRightIcon} />
        </BrandsContainer>
      </HeaderSection>
    );
  }
}

export default Header;
