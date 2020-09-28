import React, { Component } from "react";
import { Col } from "reactstrap";

export default class CategoriesComponent extends Component {
  render() {
    return (
      <Col md="2" className="mt-4">
        <h4>
          <strong>Kategori</strong>
        </h4>
        <hr />
      </Col>
    );
  }
}
