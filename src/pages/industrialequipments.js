import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import ProductList from "../components/IndustrialEquipments/ProductList";
import firstbanner from "../assets/img/industrialequipments/banner.png";
import secondbanner from "../assets/img/industrialequipments/banner2.png";
import { rating } from "../data/productscategoty";
import productcategory from "../data/productscategoty";
import { ProductSectionWrapper } from "../components/Globals/ProductSectionWrapper";
import ProductPagination from "../components/Pagination";
import { ShopNowLink } from "../components/Globals/Styled";
import { getProducts } from "../actions/products";
import { connect } from "react-redux";

import {
  ProductBanner,
  ProductBanner2,
  ProductBannerWrapper,
} from "../components/Globals/ProductBanner";

const EquipmentFilter = () => {
  return (
    <article className="filter-section">
      <form>
        <div
          style={{
            padding: "3rem",
          }}
        >
          <h5>Product Category</h5>
          <div>
            {productcategory.officefurnitures.map((item, index) => (
              <div key={index} className="d-flex align-items-center mb-3">
                <input type="checkbox" name={item.text} id={item.text} />
                <label htmlFor={item.text}>{item.text}</label>
              </div>
            ))}
          </div>
        </div>

        <article
          style={{
            padding: "3rem",
          }}
        >
          <div className="minmax-filter">
            <h5>Sort by Price</h5>
            <div className="d-flex">
              <input
                type="text"
                name="minimum"
                id="minimum"
                placeholder="Minimum"
              />
              <input
                type="text"
                name="maximum"
                id="maximum"
                placeholder="Maximum"
              />
            </div>
          </div>

          <div className="filter">
            <h5>Average Rating</h5>
            <div>
              {rating.map((item, index) => (
                <div key={index} className="d-flex align-items-center mb-3">
                  <input type="checkbox" name={item.text} id={item.text} />
                  <label htmlFor={item.text}>
                    <img src={item.rating} alt="rating" /> <span>& above</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </article>
      </form>
    </article>
  );
};

const IndustrialEquipments = ({ products, getProducts }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts();
  }, [getProducts]);

  const industrialequipments = products.filter(
    (product) => product.category.replace(/\s+/g, "") === "industrialequipments"
  );

  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>Industrial equipments</title>
        </Helmet>

        <ProductBannerWrapper>
          <ProductBanner banner1={firstbanner}>
            <div
              style={{ paddingLeft: "6rem" }}
              className="home-product-description justify-content-center align-items-start"
            >
              <h5
                className="d-flex flex-column"
                style={{ color: "#fff", marginTop: "6rem" }}
              >
                <span style={{ fontWeight: "100", fontSize: "3.2rem" }}>
                  Drilling <br /> Machine
                </span>
                <span style={{ fontSize: "3rem" }}> 25% Off</span>
              </h5>
            </div>
            <div className="text d-flex flex-column">
              <p>
                Because we care about our customer, we give you exclusive deals
                you cannot find anywhere, Look through our variety of options
              </p>
              <ShopNowLink
                className="align-self-end"
                to="/industrial-equipments"
              >
                Shop Now
              </ShopNowLink>
            </div>
          </ProductBanner>
          <ProductBanner2 banner2={secondbanner}>
            <div className="home-product-description justify-content-center">
              <h5 className="d-flex flex-column" style={{ color: "#fff" }}>
                <span style={{ fontWeight: "100", fontSize: "3.2rem" }}>
                  Monogram <br /> Machine
                </span>
                <span style={{ fontSize: "3rem" }}> 25% Off</span>
              </h5>
            </div>
            <div className="text d-flex flex-column">
              <p>
                Because we care about our customer, we give you exclusive deals
                you cannot find anywhere, Look through our variety of options
              </p>
              <ShopNowLink
                className="align-self-end"
                to="/industrial-equipments"
              >
                Shop Now
              </ShopNowLink>
            </div>
          </ProductBanner2>
        </ProductBannerWrapper>

        <ProductSectionWrapper>
          <EquipmentFilter />
          <ProductList products={industrialequipments} />
        </ProductSectionWrapper>
        <ProductPagination />
      </FadeIn>
    </>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, { getProducts })(IndustrialEquipments);
