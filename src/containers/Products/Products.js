import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";

import { requestBrands } from "../../actions";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import LatestProducts from "../../json/latest.json";
import ProductImage from "./img/product_1.png";
import ChevronRightIcon from "./img/chevron-right.svg";
import BrandsFilter from "../../components/BrandsFilter";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`;

const Main = styled.main`
  padding: 4rem 0;
`;

const Section = styled.section`
  padding: 2rem 2rem;
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 1.8rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 256px;
  padding: 1rem 0;
  grid-gap: 1rem;
`;

const ProductsSection = styled.div`
  background-color: #f2f2f2;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const SeeAll = styled(Link)`
  font-size: 1rem;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  height: 16px;
  width: 16px;
  padding-left: 0.4rem;
`;

class Products extends React.Component {
  state = {
    latestProducts: LatestProducts
    
  };
  componentDidMount = () => {
    this.props.requestBrands();
  };
  render() {
    return (
      <ProductsSection>
        <Header />
        <BrandsFilter/>
        <Main>
          <Container>
            <Section>
              <SectionHeader>
                <Heading>Latest</Heading>
                <SeeAll to="/">
                  See all<Icon src={ChevronRightIcon} />
                </SeeAll>
              </SectionHeader>
              <Grid>
                {this.state.latestProducts.map((product, index) => (
                  <Product
                    key={product.id}
                    index={index + 1}
                    image={ProductImage}
                    days_left={product.days_left}
                    name={product.name}
                    price={product.price}
                  />
                ))}
              </Grid>
            </Section>
            <Section>
              <SectionHeader>
                <Heading>Most Viewed</Heading>
                <SeeAll to="/">
                  See all<Icon src={ChevronRightIcon} />
                </SeeAll>
              </SectionHeader>
              <Grid>
                {this.state.latestProducts.map((product, index) => (
                  <Product
                    key={product.id}
                    index={index + 1}
                    image={ProductImage}
                    days_left={product.days_left}
                    name={product.name}
                    price={product.price}
                  />
                ))}
              </Grid>
            </Section>
            <Section>
              <SectionHeader>
                <Heading>Most Wanted</Heading>
                <SeeAll to="/">
                  See all<Icon src={ChevronRightIcon} />
                </SeeAll>
              </SectionHeader>
              <Grid>
                {this.state.latestProducts.map((product, index) => (
                  <Product
                    key={product.id}
                    index={index + 1}
                    image={ProductImage}
                    days_left={product.days_left}
                    name={product.name}
                    price={product.price}
                  />
                ))}
              </Grid>
            </Section>
          </Container>
        </Main>
      </ProductsSection>
    );
  }
}

const mapStateToProps = state => {
  return {
    brands: state.brands.brands
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestBrands: () => dispatch(requestBrands())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
