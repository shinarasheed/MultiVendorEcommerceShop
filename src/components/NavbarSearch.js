import React, { Component } from "react";

export default class NavbarSearch extends Component {
  render() {
    return (
      <>
        <form>
          <input
            type="text"
            placeholder="Search for Templates, Pictures, Music and More"
          />
        </form>
      </>
    );
  }
}
