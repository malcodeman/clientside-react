import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ChevronLeftIcon from "./img/chevron-left.svg";
import ChevronRightIcon from "./img/chevron-right.svg";
import BellIcon from "./img/bell.svg";
import UserIcon from "./img/user.jpg";
import Brand from "./components/Brand/Brand";
import Brands from "../../../../json/brands.json";
import BrandLogo from "./img/gucci.png";

const HeaderSection = styled.header`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const NavSection = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

const Nav = styled.nav`
  height: 64px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justif-items: space-between;
  padding: 0 2rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  text-transform: uppercase;
  @media (min-width: 576px) {
    justify-self: center;
  }
`;

const Search = styled.input`
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: none;
  padding: .4rem;
  @media (min-width: 576px) {
    display: block;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const UserBox = styled.div`
  display: flex;
  justify-self: flex-end;
`;

const UserBoxIcon = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const Notifications = styled(Link)`
  margin-right: 1rem;
`;

const UserProfile = styled(Link)`
  border-radius: 50%;
`;

const BrandsContainer = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BrandsBox = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
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
              <Search placeholder="Search Shiff" />
              <Logo to="/">Shiff</Logo>
              <UserBox>
                <Notifications to="/">
                  <UserBoxIcon src={BellIcon} />
                </Notifications>
                <UserProfile to="/">
                  <UserBoxIcon src={UserIcon} />
                </UserProfile>
              </UserBox>
            </Nav>
          </Container>
        </NavSection>
        <BrandsContainer>
          <Icon src={ChevronLeftIcon} />
          <BrandsBox>
            {this.state.brands
              .slice(0, this.state.limit)
              .map(brand => (
                <Brand key={brand.id} logo={BrandLogo} name={brand.name} />
              ))}
          </BrandsBox>
          <Icon src={ChevronRightIcon} />
        </BrandsContainer>
      </HeaderSection>
    );
  }
}

export default Header;
