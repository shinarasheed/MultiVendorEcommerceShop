import React from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import { MdComputer } from "react-icons/md";
import { FaDropbox } from "react-icons/fa";
import {
  GRID,
  EQUALGRID,
  EQUALGRID2,
  Select,
  TextInput,
  TextArea,
} from "../Globals/FormControls";
import styled from "styled-components";
import icon from "../../assets/img/99.png";
import DashboardNav from "./DashboardNav";

const ProductUpload = () => {
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>dashboard</title>
        </Helmet>

        <DashboardNav />

        <FirstSection>
          <h4>Settings</h4>
        </FirstSection>
        <SettingsWrapper className="settingsFirstSection">
          <form>
            <div className="formleft__section">
              <h5>Edit Profile</h5>
              <EQUALGRID>
                <Select>
                  <option value="Select">Select Product Category</option>
                </Select>
                <Select>
                  <option value="product">Sub Category</option>
                </Select>
              </EQUALGRID>

              <EQUALGRID>
                <TextInput type="text" placeholder="Product Title" />
                <TextInput type="text" placeholder="Brand" />
              </EQUALGRID>

              <EQUALGRID>
                <TextInput type="text" placeholder="Model" />
                <Select>
                  <option value="Color">Color</option>
                </Select>
              </EQUALGRID>

              <GRID>
                <TextArea placeholder="Product Overview"></TextArea>
              </GRID>

              <GRID>
                <TextArea placeholder="Product Description"></TextArea>
              </GRID>

              <FileWrapper className="file">
                <h6>Choose Thumbnail Image</h6>
                <article>
                  <div>
                    <input type="file" name="computer" id="computer" />
                    <label htmlFor="computer">
                      <MdComputer className="file-icon" /> From Computer
                    </label>
                  </div>
                  <div>
                    <input type="file" name="dropbox" id="dropbox" />
                    <label htmlFor="dropbox">
                      <FaDropbox className="file-icon" /> From Dropbox
                    </label>
                  </div>
                </article>
              </FileWrapper>

              <FileWrapper>
                <h6>Choose Thumbnail Image</h6>
                <article>
                  <div>
                    <input type="file" name="computer" id="computer" />
                    <label htmlFor="computer">
                      <MdComputer className="file-icon" /> From Computer
                    </label>
                  </div>
                  <div>
                    <input type="file" name="dropbox" id="dropbox" />
                    <label htmlFor="dropbox">
                      <FaDropbox className="file-icon" /> From Dropbox
                    </label>
                  </div>
                </article>
              </FileWrapper>

              <article>
                <button type="submit">Update Details</button>
              </article>
            </div>

            <div className="formright__section">
              <div>
                <h5>Measurement</h5>
                <GRID>
                  <TextInput type="text" placeholder="Weight (Kg)" />
                </GRID>

                <GRID>
                  <TextInput type="text" placeholder="Dimension(L x W x H)" />
                </GRID>

                <GRID>
                  <TextArea placeholder="What is in the Box"></TextArea>
                </GRID>
              </div>

              <div>
                <h5>Set Price</h5>
                <GRID>
                  <TextInput type="text" placeholder="Price" />
                </GRID>

                <GRID>
                  <TextInput type="text" placeholder="Set Promo Price" />
                </GRID>

                <GRID>
                  <TextInput type="text" placeholder="Promo Start Date" />
                </GRID>

                <GRID>
                  <TextInput type="text" placeholder="Promo End Date" />
                </GRID>
              </div>

              <div>
                <h5>SEO</h5>
                <GRID>
                  <TextInput type="text" placeholder="Meta Title" />
                </GRID>

                <GRID>
                  <TextInput type="text" placeholder="Meta Keywords" />
                </GRID>

                <GRID>
                  <TextArea placeholder="Meta Description"></TextArea>
                </GRID>
              </div>

              <div>
                <h5>Inventory</h5>
                <EQUALGRID2>
                  <Select>
                    <option value="Yes">Yes</option>
                  </Select>
                  <Select>
                    <option value="No">No</option>
                  </Select>
                  <TextInput type="text" placeholder="Meta Title" />
                </EQUALGRID2>
              </div>
            </div>
          </form>
        </SettingsWrapper>
      </FadeIn>
    </>
  );
};

const FileWrapper = styled.section`
  border: 2px dashed #cfddf1;
  background-color: #f1f5f8;
  margin-bottom: 1.5rem;
  border-radius: 10px;

  & h6 {
    padding-top: 1rem;
    padding-left: 1rem;
    font-weight: 600;
    font-size: 1.2rem;
  }

  & article {
    padding: 2rem;
    display: flex;
    justify-content: center;

    & div:first-child {
      border-right: 1px solid #ddd;
      padding-right: 2rem;
    }

    & div:nth-child(2) {
      margin-left: 2rem;
    }

    & input[type="file"] {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    & label {
      font-size: 1.3rem;
      text-align: center;
      line-height: 1.3;
      cursor: pointer;
      font-weight: 600;
      color: grey;
    }

    .file-icon {
      font-size: 3rem;
      margin-right: 0.5rem;
    }
  }
`;

const FirstSection = styled.section`
  border-bottom: 1px solid #ddd;
  width: 90vw;
  margin: 8rem auto 4rem auto;

  h4 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-left: 4rem;
    margin-bottom: 2rem;
  }
`;

const SettingsWrapper = styled.section`
  margin: 4rem 0;

  h5 {
    font-weight: bold;
    font-size: 1.6rem;
    color: #000;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.7rem;
    padding-bottom: 1rem;
    color: #0c74c4;
    font-family: "Open Sans", sans-serif;
  }

  a {
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 600;
    color: #0c74c4;
    display: inline-block;
    margin-bottom: 4rem;
    padding: 0.5rem 1.5rem;

    &:hover {
      font-size: 1.5rem;
      text-decoration: none;
      font-weight: 600;
      color: #0c74c4;
    }

    &:not(:last-child) {
      margin-right: 4rem;
    }
  }

  form {
    display: grid;
    width: 85vw;
    margin: 0 auto;
    grid-template-columns: 2fr 1fr;

    @media (max-width: 992px) {
      width: 60vw;
      grid-template-columns: 1fr;
    }

    @media (max-width: 768px) {
      width: 50vw;
      grid-template-columns: 1fr;
    }

    @media (max-width: 576px) {
      width: 70vw;
      grid-template-columns: 1fr;
    }
  }

  .formleft__section {
    padding-right: 8rem;
    border-right: 2px solid #ddd;
    align-self: start;

    @media (max-width: 992px) {
      padding-right: 0;
      border-right: none;
    }
  }

  .formright__section {
    padding-left: 8rem;
    @media (max-width: 992px) {
      padding-left: 0;
    }
  }

  button {
    color: #fff;
    background-color: #094a6a;
    border: none;
    text-decoration: none;
    text-align: center;
    display: inline-block;
    font-size: 1.5rem;
    padding: 0.8rem 4rem;
    font-family: "Open Sans", sans-serif;
    border-radius: 4px;
  }

  select {
    background: url(${icon});
    background-repeat: no-repeat;
    background-position: 95% center;
  }

  .address {
    margin-bottom: 3rem;
  }
`;

export default ProductUpload;
