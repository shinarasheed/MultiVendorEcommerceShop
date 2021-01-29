import React, { Component } from "react";
import officeequipments from "../../data/officeequipments";
import { ProductSectionWrapper } from "../../components/Globals/ProductSectionWrapper";
import { OfficeFilter } from "../../pages/officeequipments";
import ProductList from "../../components/OfficeEquipments/ProductList";
import FadeIn from "react-fade-in";
import { Helmet } from "react-helmet";

class Categories extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const category = this.props.match.params.category;
    const categories = officeequipments.filter(
      (product) =>
        product.category.replace(/\s+/g, "").toLowerCase() ===
        category.toLowerCase()
    );

    return (
      <>
        <FadeIn transitionDuration="600">
          <Helmet>
            <title>{category}</title>
          </Helmet>

          <ProductSectionWrapper>
            <OfficeFilter />
            <ProductList officeequipments={categories} />
          </ProductSectionWrapper>
        </FadeIn>
      </>
    );
  }
}

export default Categories;
