import React, { Component } from "react";
import Product from "./Product";
import styled from "styled-components";
import { connect } from "react-redux";
import { getProducts } from "../../actions/products";
import Spinner from "../Globals/Spinner/Spinner";

class ClearanceProductList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getProducts();
  }
  render() {
    const clearanceproducts = this.props.products.filter(
      (product) => product.category.replace(/\s+/g, "") === "clearance"
    );
    return (
      <>
        {this.props.products.length === 0 ? (
          <Spinner />
        ) : (
          <Wrapper>
            {clearanceproducts.map((product, index) => {
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

export default connect(mapStateToProps, { getProducts })(ClearanceProductList);

export const Wrapper = styled.section`
  width: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: 318px;
  grid-auto-rows: 318px;
  row-gap: 5rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  column-gap: 2rem;
`;
