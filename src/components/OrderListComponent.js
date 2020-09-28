import React, { Component } from "react";
import { Col } from "reactstrap";

export default class OrderListComponent extends Component {
  render() {
    return (
      <Col md="3" className="mt-4">
        <h4>
          <strong>Daftar Pesanan</strong>
        </h4>
        <hr />
      </Col>
    );
  }
}
