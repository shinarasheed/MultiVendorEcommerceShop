import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import FadeIn from "react-fade-in";
import ProductList from "../components/Lighting/ProductList";
import banner1 from "../assets/img/lights/slide1.png";
import banner2 from "../assets/img/lights/slide2.png";
import banner3 from "../assets/img/lights/1.png";
import smallbanner1 from "../assets/img/lights/banner1.png";
import smallbanner2 from "../assets/img/lights/banner2.png";
import smallbanner3 from "../assets/img/lights/banner3.png";
import Banner from "../Slideshows/Lightingbannerslide";
import LightingSlideShow from "../Slideshows/LightingSlideShow";
import { lightingicons } from "../data/lighting";
import { rating } from "../data/productscategoty";
import productcategory from "../data/productscategoty";
import { ProductSectionWrapper } from "../components/Globals/ProductSectionWrapper";
import ProductPagination from "../components/Pagination";
import strip from "../assets/img/lights/strip.png";
import { LightingshopLink } from "../Slideshows/Lightingbannerslide";

export const LightingFilter = () => {
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
            {productcategory.lightings.map((item, index) => (
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
      <article>
        <LightingSlideShow
          slide1={smallbanner1}
          slide2={smallbanner2}
          slide3={smallbanner3}
        />
      </article>
      <article className="d-flex flex-column justify-content-center">
        <div className="officeicons d-flex justify-content-between">
          {lightingicons.map((item, index) => {
            return (
              <div
                key={index}
                className="productlist-icons d-flex flex-column justify-content-center align-items-center text-center"
              >
                <div className="icon align-self-sm-stretch d-flex justify-content-center align-items-center ">
                  <Link to={`/lighting/${item.category.replace(/\s+/g, "")}`}>
                    <img
                      style={{ height: "50px", width: "50px" }}
                      src={item.icon}
                      alt="corporate gift icons"
                    />
                  </Link>
                </div>
                <p>{item.text}</p>
                <div className="line"></div>
              </div>
            );
          })}
        </div>
      </article>
    </ProductListWrapper>
  );
};

const Lighting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>Lighting</title>
        </Helmet>

        <ProductBanner>
          <Banner banner1={banner1} banner2={banner2} />
          <article className="small-banner">
            <img src={banner3} alt="banner" />
            <div className="small-banner-text">
              <LightingshopLink to="/lighting">Shop Now</LightingshopLink>
            </div>
          </article>
        </ProductBanner>

        <ProductListIcons />
        <div className="strip-section d-flex justify-content-center my-5">
          <img className="img-fluid" src={strip} alt="strip" />
        </div>
        <ProductSectionWrapper>
          <LightingFilter />
          <ProductList />
        </ProductSectionWrapper>

        <ProductPagination />
      </FadeIn>
    </>
  );
};

export const ProductListWrapper = styled.section`
  width: 80vw;
  margin: 2rem auto 0 auto;
  display: grid;
  grid-template-columns: 40% 55%;
  gap: 5rem;

  .officeicons {
    .productlist-icons {
      background: #f7f7f7;
      width: 100px;
      height: 100px;

      &:not(:last-child) {
        margin-right: 1rem;
      }

      p {
        font-size: 11px;
        font-weight: 600;
        padding-top: 1rem;
      }
    }
  }
`;

export const ProductBanner = styled.section`
  width: 80vw;
  margin: 2rem auto 6rem auto;
  display: grid;
  grid-template-columns: 67.2% 30%;
  column-gap: 2rem;

  .small-banner {
    position: relative;
  }

  .small-banner-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: flex-end;
    padding: 2rem 0 2rem 2rem;
  }

  & img {
    width: 100%;
  }
`;

export default Lighting;
