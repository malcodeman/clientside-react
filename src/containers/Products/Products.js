import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import LatestProducts from "../../json/latest.json";
import ProductImage from "./img/product_1.png";

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
  font-size: 1.6rem;
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
`

class Products extends React.Component {
  state = {
    latestProducts: LatestProducts
  };
  render() {
    return (
      <ProductsSection>
        <Header />
        <Main>
          <Container>
            <Section>
              <Heading>Latest</Heading>
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
              <Heading>Most Viewed</Heading>
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
              <Heading>Most Wanted</Heading>
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

export default Products;
