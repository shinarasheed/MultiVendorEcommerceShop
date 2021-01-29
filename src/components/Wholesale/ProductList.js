import React, { Component } from "react";
import Product from "./Product";
import styled from "styled-components";
import { connect } from "react-redux";
import { getProducts } from "../../actions/products";
import Spinner from "../Globals/Spinner/Spinner";

class WholesaleProductList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getProducts();
  }
  render() {
    const wholesaleproducts = this.props.products.filter(
      (product) => product.category.replace(/\s+/g, "") === "wholesale"
    );
    return (
      <>
        {this.props.products.length === 0 ? (
          <Spinner />
        ) : (
          <WholesaleProductWrapper>
            {wholesaleproducts.map((product, index) => {
              return <Product product={product} key={index} />;
            })}
          </WholesaleProductWrapper>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, { getProducts })(WholesaleProductList);

const WholesaleProductWrapper = styled.section`
width: 70%;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(21rem,1fr));
grid-template-rows: 318px;
grid-auto-rows: 318px;
row-gap: 5rem;
margin-top: 5rem;
margin-bottom: 5rem;

    @media (max-width: 576px) {
      width: 65vw;
    }
  }

  .buy__now__link {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #333;
    text-decoration: none;
    color: #333;
    padding: 0.8rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    border: 1px solid #91d8f7;
    margin-top: 4px;

    &:hover {
      text-decoration: none;
      color: #333;
    }

    span {
     display: inline-block;
    margin-left: 5px;
    color: #91d8f7;
    font-size: 1.3rem;
    font-family: 'Roboto', sans-serif;
    font-weight:500;
    }

    .cart{
    fill: #91d8f7;
    font-size:20px;
    }


  }
    .add__remove__section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  

    margin-bottom: 2px;

     
    p {
      border: 1px solid #ddd;

      padding: 0.2rem 2rem;
    }

    p:last-child {
      display: flex;
      justify-content: space-between;
      font-size: 1.5rem;
      font-weight: bold;
    }

    
`;
