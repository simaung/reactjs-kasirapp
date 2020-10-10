import React, { Component } from "react";
import { Badge, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { numberWithCommas } from "../utils/utils";
import TotalBayarComponent from "./TotalBayarComponent";

export default class CartComponent extends Component {
  render() {
    const { carts } = this.props;
    return (
      <Col md="3" className="mt-4" style={{ fontSize: "12px" }}>
        <h4>
          <strong>Daftar Pesanan</strong>
        </h4>
        <hr />
        {carts.length !== 0 && (
          <ListGroup flush>
            {carts &&
              carts.map((cart) => (
                <ListGroupItem key={cart.id}>
                  <Row>
                    <Col xs="2">
                      <h5>
                        <Badge color="success" pill>
                          {cart.jumlah}
                        </Badge>
                      </h5>
                    </Col>
                    <Col>
                      {cart.product.nama}
                      <p>Rp. {numberWithCommas(cart.product.harga)}</p>
                    </Col>
                    <Col>
                      <strong className="float-right">
                        Rp. {numberWithCommas(cart.total_harga)}
                      </strong>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
          </ListGroup>
        )}
        <TotalBayarComponent carts={carts} {...this.props} />
      </Col>
    );
  }
}
