import React, { Component } from "react";
import Product from "./Product";
import styled from "styled-components";
import { connect } from "react-redux";
import { getProducts } from "../../actions/products";
import Spinner from "../Globals/Spinner/Spinner";

class ProductList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getProducts();
  }
  render() {
    const livebidproducts = this.props.products.filter(
      (product) => product.category.replace(/\s+/g, "") === "livebid"
    );
    return (
      <>
        {this.props.products.length === 0 ? (
          <Spinner />
        ) : (
          <Wrapper>
            {livebidproducts.map((product, index) => {
              return <Product product={product} key={index} />;
            })}
          </Wrapper>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, { getProducts })(ProductList);
export const Wrapper = styled.section`
  width: 77vw;
  margin: 5rem auto 5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-template-rows: 318px;
  grid-auto-rows: 318px;
  row-gap: 5rem;

  @media (max-width: 576px) {
    width: 65vw;
  }
`;
