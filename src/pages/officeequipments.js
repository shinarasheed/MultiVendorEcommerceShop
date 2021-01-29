import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import ProductList from "../components/OfficeEquipments/ProductList";
import styled from "styled-components";
import { officeicons } from "../data/officeequipments";
import { rating } from "../data/productscategoty";
import productcategory from "../data/productscategoty";
import { ProductSectionWrapper } from "../components/Globals/ProductSectionWrapper";
import strip from "../assets/img/office_equipmentstrip1.png";
import ProductPagination from "../components/Pagination";
import firstbanner from "../assets/img/officeequipments/banner.png";
import secondbanner from "../assets/img/officeequipments/banner2.png";
import officeequipment from "../assets/img/corporategifts/table.png";
import { ShopNowLink } from "../components/Globals/Styled";
import { ShopLink } from "../components/Home/HomeFirstSection";

import {
  ProductBanner,
  ProductBanner2,
  ProductBannerWrapper,
} from "../components/Globals/ProductBanner";

export const OfficeFilter = () => {
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
            {productcategory.officeequipments.map((item, index) => (
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

export const ProductListIcons = () => {
  return (
    <ProductListWrapper>
      <article
        className="sidebanner"
        style={{ marginRight: "10rem", position: "relative", top: "-60px" }}
      >
        <img src={officeequipment} alt="product banner" />
        <div className="sidebanner-text">
          <h5>40% Off</h5>
          <ShopLink to="/office-equipments">Shop Now</ShopLink>
        </div>
      </article>
      <article className="d-flex flex-column justify-content-between">
        <div className="officeicons">
          {officeicons.map((item, index) => {
            return (
              <div
                key={index}
                className="productlist-icons d-flex flex-column justify-content-center align-items-center text-center"
              >
                <div className="icon align-self-sm-stretch d-flex justify-content-center align-items-center ">
                  <Link
                    to={`/officequipments/${item.category.replace(/\s+/g, "")}`}
                  >
                    <img
                      style={{ height: "40px", width: "40px" }}
                      src={item.officeicon}
                      alt="corporate gift icons"
                    />
                  </Link>
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <div>
          <img className="img-fluid" src={strip} alt="strip" />
        </div>
      </article>
    </ProductListWrapper>
  );
};

const OfficeEquipments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>Office equipments</title>
        </Helmet>

        <ProductBannerWrapper>
          <ProductBanner banner1={firstbanner}>
            <div className="product-description">
              <h6>Limited Offer</h6>
              <h5>HP Laptop</h5>
              <p>25% Off</p>
            </div>
            <div className="text d-flex flex-column">
              <p>
                Because we care about our customer, we give you exclusive deals
                you cannot find anywhere, Look through our variety of options
              </p>
              <ShopNowLink className="align-self-end" to="/office-equipments">
                Shop Now
              </ShopNowLink>
            </div>
          </ProductBanner>

          <ProductBanner2 banner2={secondbanner}>
            <div className="product-description-2">
              <h5>3 in 1</h5>
              <h6>
                Scanner Printer <br /> Photocopier
              </h6>
              <p>25% Off</p>
            </div>
            <div className="text d-flex flex-column">
              <p>
                Because we care about our customer, we give you exclusive deals
                you cannot find anywhere, Look through our variety of options
              </p>
              <ShopNowLink className="align-self-end" to="/office-equipments">
                Buy Now
              </ShopNowLink>
            </div>
          </ProductBanner2>
        </ProductBannerWrapper>

        <ProductListIcons />
        <ProductSectionWrapper style={{ marginTop: "5rem" }}>
          <OfficeFilter />
          <ProductList />
        </ProductSectionWrapper>
        <ProductPagination />
      </FadeIn>
    </>
  );
};

export const ProductListWrapper = styled.section`
  width: 74vw;
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

  .officeicons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-template-rows: 126px;
    grid-auto-rows: 126px;
    column-gap: 10px;
    row-gap: 4rem;

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
  }
`;

export default OfficeEquipments;
