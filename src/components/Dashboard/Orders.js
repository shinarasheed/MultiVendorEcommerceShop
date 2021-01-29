import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import { orders } from "../../data/orders";
import styled from "styled-components";
import DashboardNav from "./DashboardNav";
import icon from "../../assets/img/01.png";
import selecticon from "../../assets/img/99.png";
import { Select, TextInput } from "../Globals/FormControls";

const Dashboard = () => {
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

          <section className="my-product">
            <h2>Orders</h2>
          </section>

          <article className="dashboard__tablesection">
            <SearchWrapper>
              <article>
                <div>
                  <label htmlFor="DateOrdered">Sort By</label>
                  <Select id="DateOrdered">
                    <option value="Date Ordered">Date Ordered</option>
                  </Select>
                </div>
                <div>
                  <label htmlFor="SortDate">Sort Date</label>
                  <div className="d-flex text-inputs">
                    <TextInput placeholder="From" />
                    <TextInput placeholder="To" />
                  </div>
                </div>
              </article>
              <form>
                <input
                  type="text"
                  placeholder="Search by Date, Product ID, Order ID, Shipped To"
                />
              </form>
            </SearchWrapper>
            <table>
              <thead>
                <tr>
                  <th>Order</th>
                  <th>Order No.</th>
                  <th>Price</th>
                  <th>Qnty Sold</th>
                  <th>Shipped to</th>
                  <th>Fulfilment Date</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((item, index) => (
                  <tr key={index}>
                    <td className="d-flex align-items-center">
                      <img src={item.Img} alt="product" />{" "}
                      <span>{item.name}</span>
                    </td>
                    <td>{item.ordernumber}</td>
                    <td>&#8358;{item.price}</td>
                    <td>{item.quantitysold}</td>
                    <td>{item.shippedto}</td>
                    <td>{item.fulfilmentdate}</td>
                    <td>&#8358;{item.total}</td>
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

const SearchWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  & article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-basis: 40%;
    gap: 1rem;

    .text-inputs {
      width: 50%;
    }

    label {
      font-size: 1.2rem;
      font-weight: bold;
    }

    select {
      background: url(${selecticon});
      background-repeat: no-repeat;
      background-position: 95% center;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      margin-bottom: 0;
    }

    input {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }

  & form {
    align-self: flex-end;
    padding: 0;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    input {
      width: 62%;
      border: 2px solid #000;
      padding: 0.8rem 0 0.8rem 2rem;
      border-radius: 5rem;
      background-image: url(${icon});
      background-repeat: no-repeat;
      background-position: calc(100% - 10px) center;
      &::placeholder {
        font-size: 1.4rem;
      }
    }
  }
`;

const DashboardWrapepr = styled.section`
  background-color: #fff;
  padding-bottom: 4rem;

  .my-product {
    width: 80vw;
    margin: 9rem auto 0 auto;

    h2 {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 5rem;
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

export default Dashboard;
