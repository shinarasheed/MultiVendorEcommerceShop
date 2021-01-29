import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import ProductList from "../components/CorporateGifts/ProductList";
import firstbanner from "../assets/img/corporategifts/banner.png";
import secondbanner from "../assets/img/corporategifts/banner2.png";
import { corporateicons } from "../data/corporategifts";
import { ProductSectionWrapper } from "../components/Globals/ProductSectionWrapper";
import styled from "styled-components";
import ProductPagination from "../components/Pagination";
import officeequipment from "../assets/img/corporategifts/table.png";
import { ShopNowLink } from "../components/Globals/Styled";
import { ShopLink } from "../components/Home/HomeFirstSection";
import Filter from "../components/CorporateGifts/Filter";
import { getProducts } from "../actions/products";
import { connect } from "react-redux";

import {
  ProductBanner,
  ProductBanner2,
  ProductBannerWrapper,
} from "../components/Globals/ProductBanner";

export const ProductListIcons = () => {
  return (
    <ProductListWrapper>
      <article
        className="d-flex justify-content-center sidebanner"
        style={{ position: "relative", top: "-70px" }}
      >
        <img src={officeequipment} alt="product banner" />
        <div className="sidebanner-text">
          <h5>40% Off</h5>
          <ShopLink to="/corporategifts">Shop Now</ShopLink>
        </div>
      </article>
      <IconWrapper>
        {corporateicons.map((item, index) => {
          return (
            <div
              key={index}
              className="productlist-icons d-flex flex-column justify-content-center align-items-center text-center"
            >
              <div className="icon align-self-sm-stretch d-flex justify-content-center align-items-center ">
                <Link
                  to={`/products/corporategifts/${item.category.replace(
                    /\s+/g,
                    ""
                  )}`}
                >
                  <img
                    style={{ height: "50px", width: "50px" }}
                    src={item.corporateicon}
                    alt="corporate gift icons"
                  />
                </Link>
              </div>
              <p>{item.text}</p>
            </div>
          );
        })}
      </IconWrapper>
    </ProductListWrapper>
  );
};

const CorporateGifts = ({ products, getProducts }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts();
  }, [getProducts]);

  const corporategifts = products.filter(
    (product) => product.category.replace(/\s+/g, "") === "corporategifts"
  );

  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>Corporate gifts</title>
        </Helmet>

        <ProductBannerWrapper>
          <ProductBanner banner1={firstbanner}>
            <div className="text d-flex flex-column">
              <p>
                Because we care about our customer, we give you exclusive deals
                you cannot find anywhere, Look through our variety of options
              </p>
              <ShopNowLink className="align-self-end" to="/corporate-gifts">
                Shop Now
              </ShopNowLink>
            </div>
          </ProductBanner>
          <ProductBanner2 banner2={secondbanner}>
            <div className="text d-flex flex-column">
              <p>
                Because we care about our customer, we give you exclusive deals
                you cannot find anywhere, Look through our variety of options
              </p>
              <ShopNowLink className="align-self-end" to="/corporate-gifts">
                Shop Now
              </ShopNowLink>
            </div>
          </ProductBanner2>
        </ProductBannerWrapper>

        <ProductListIcons />

        <ProductSectionWrapper>
          <Filter />
          <ProductList products={corporategifts} />
        </ProductSectionWrapper>
        <ProductPagination />
      </FadeIn>
    </>
  );
};

export const ProductListWrapper = styled.section`
  width: 90vw;
  margin: 2rem auto 0 auto;
  display: grid;
  grid-template-columns: 2fr 4fr;

  .sidebanner {
    position: relative;

    .sidebanner-text {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 5rem 0 4rem 0;

      h5 {
        font-weight: bold;
        font-size: 3.5rem;
        right: 7rem;
        top: 5rem;
      }
    }
  }
`;

export const IconWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-template-rows: 116px;
  grid-auto-rows: 116px;
  gap: 15px;

  @media (max-width: 576px) {
    width: 50vw;
  }

  .icon {
    background: #f7f7f7;
    height: 100%;
  }

  .productlist-icons {
    p {
      font-size: 1.3rem;
      font-weight: 600;
      padding-top: 1rem;
    }
  }
`;

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, { getProducts })(CorporateGifts);
