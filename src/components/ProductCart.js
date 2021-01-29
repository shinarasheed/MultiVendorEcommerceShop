import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import { cartitems } from "../data/cartitems";
import DeleteIcon from "../assets/img/51.png";
import styled from "styled-components";

const ProductCart = () => {
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>cart</title>
        </Helmet>

        <ProductcartWrapper className="productcartsection">
          <h3>6 Items in Shopping Cart</h3>

          <article>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Save Item</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartitems.map((item, index) => (
                  <tr>
                    <td>
                      <article>
                        <div className="item">
                          <img src={item.Img} alt="item__picture" />
                        </div>
                        <div className="item__description">
                          <h5 className="">{item.type}</h5>
                          <p className="item__seller">Seller: {item.seller}</p>
                          <p className="item__productselection">
                            Product Selection: {item.productselection}
                          </p>
                        </div>
                      </article>
                    </td>
                    <td className="item__unitprice">&#8358;{item.unitprice}</td>
                    <td>select</td>
                    <td className="item__price">&#8358;{item.price}</td>
                    <td>save</td>
                    <td>
                      <img src={DeleteIcon} alt="delete" />
                    </td>
                  </tr>
                ))}
                <tr className="last-row">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>Sub-Total: </td>
                  <td>&#8358;657,200</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article>
            <div className="checkout-section">
              <Link to="/productcart">Continue Shopping</Link>
              <Link to="/productcart">Proceed to Checkout</Link>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Order Summary</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Delivery Charges</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="font-weight-bold">FREE </td>
                  </tr>

                  <tr>
                    <td>VAT(7.5%)</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="font-weight-bold ">&#8358;49,290</td>
                  </tr>

                  <tr>
                    <td className="font-weight-bold">Total</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className="font-weight-bold">&#8358;706,490</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </ProductcartWrapper>
      </FadeIn>
    </>
  );
};

const ProductcartWrapper = styled.section`
  background-color: #f1f5f8;

  h3 {
    font-size: 2rem;
    font-weight: bold;
    width: 80vw;
    margin: auto;
    padding: 2rem 0;
  }

  & article:nth-child(2) {
    background-color: #fff;
    width: 80vw;
    margin: 0 auto;
  }

  & article:nth-child(3) {
    width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 17rem;

    .checkout-section {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      a {
        color: #fff;

        text-decoration: none;
        text-align: center;
        display: inline-block;
        font-size: 1.6rem;
        padding: 0.7rem 0;
        text-decoration: none;
        font-family: "Open Sans", sans-serif;
        border-radius: 10px;
        border: 2px solid #094a6a;
        flex: 1;

        &:first-child {
          background-color: transparent;
          color: #333;
          margin-right: 1rem;
        }

        &:nth-child(2) {
          background-color: #094a6a;
        }
      }
    }
  }

  .table-title {
    display: flex;
    justify-content: space-between;

    a {
      color: #606c86;
      text-decoration: underline;
      font-size: 1.2rem;
    }

    h3 {
      color: #000;
      font-weight: 600;
    }
  }

  table {
    width: 100%;
    font-size: 1.3rem;
    margin-bottom: 4rem;
  }

  table thead tr {
    background-color: #cad7e6;
    color: #fff;
  }

  table th {
    padding: 1rem 1rem;
    font-weight: 100;
    color: #000;
    font-weight: bold;
    font-size: 1.6rem;
  }

  table tr,
  table td {
    padding: 1rem 1rem;
  }

  table tbody tr {
    border-bottom: 2px solid #ddd;
  }

  table tbody tr.last-row {
    border-bottom: none;
    font-size: 2rem;
    font-weight: bold;
  }

  table tr article {
    display: flex;

    h5 {
      font-size: 1.7rem;
      font-weight: 600;
      margin-bottom: 2px;
    }

    p {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  .item {
    margin-right: 5rem;

    &__unitprice,
    &__price {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;

export default ProductCart;
