import React, { Component } from "react";
import { ProductSectionWrapper } from "../../components/Globals/ProductSectionWrapper";
import Filter from "../../components/Livebid/Filter";
import ProductList from "../../components/CorporateGifts/ProductList";
import FadeIn from "react-fade-in";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { getProducts } from "../../actions/products";

class Categories extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getProducts();
  }
  render() {
    const category = this.props.match.params.category;
    const subcategory = this.props.match.params.subcategory;

    const theproducts = this.props.products.filter(
      (product) =>
        product.category.replace(/\s+/g, "").toLowerCase() ===
        category.toLowerCase()
    );

    const categories = theproducts.filter(
      (product) =>
        product.subcategory.replace(/\s+/g, "").toLowerCase() ===
        subcategory.toLowerCase()
    );

    return (
      <>
        <FadeIn transitionDuration="600">
          <Helmet>
            <title>{`${category}/${subcategory.toLowerCase()}`}</title>
          </Helmet>

          <ProductSectionWrapper>
            <Filter />
            <ProductList products={categories} />
          </ProductSectionWrapper>
        </FadeIn>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});
export default connect(mapStateToProps, { getProducts })(Categories);
