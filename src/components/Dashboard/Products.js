import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import { dashboardproducts } from "../../data/dashboardproducts";
import styled from "styled-components";
import DashboardNav from "./DashboardNav";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>Dashboard</title>
        </Helmet>

        <DashboardWrapepr className="dashboard">
          <DashboardNav />

          <article className="dashboard__uploadsection">
            <h5>My Products</h5>
            <div>
              <h3 className="dashboard__uploadsection__text">products</h3>
              <Link className="dashboard__uploadsection__link" to="/upload">
                Upload Product
              </Link>
            </div>
          </article>

          <article className="dashboard__tablesection">
            <table>
              <thead>
                <tr>
                  <th>Upload Date</th>
                  <th>Product Image</th>
                  <th>Product Code</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Qnty Sold</th>
                  <th>Total Earned</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dashboardproducts.map((item, index) => (
                  <tr key={index}>
                    <td>{item.uploaddate}</td>
                    <td className="item__unitprice">
                      <img src={item.Img} alt="product" />
                    </td>
                    <td>{item.productcode}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>&#8358;{item.price}</td>
                    <td>{item.quantitysold}</td>
                    <td>&#8358;{item.totalearned}</td>
                    <td>View</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        </DashboardWrapepr>
      </FadeIn>
    </>
  );
};

const DashboardWrapepr = styled.section`
  background-color: #f1f5f8;
  padding-bottom: 4rem;

  .dashboard__uploadsection {
    width: 80vw;
    margin: 0 auto;
    margin-top: 9rem;

    h5 {
      font-size: 2.5rem;
      padding-bottom: 3rem;
      font-weight: bold;
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding-bottom: 1rem;

      h3 {
        font-size: 2rem;
        font-weight: bold;
        align-self: flex-end;
      }

      a {
        color: #fff;
        background: #243137;
        display: inline-block;
        text-decoration: none;
        padding: 0.6rem 2.5rem;
        font-size: 1.5rem;
        border-radius: 10px;
      }
    }
  }

  .dashboard__tablesection {
    background-color: #fff;
    width: 80vw;
    margin: 0 auto;
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
    font-size: 1.4rem;
  }

  table tr,
  table td {
    padding: 1rem 1rem;
  }

  table tbody tr {
    border-bottom: 2px solid #ddd;
  }

  table tbody tr {
    border-bottom: 2px solid #ddd;
  }

  table tbody tr:last-child {
    border-bottom: none;
  }
`;

export default Products;
