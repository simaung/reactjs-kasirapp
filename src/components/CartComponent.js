import React, { Component } from "react";
import { Badge, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { numberWithCommas } from "../utils/utils";
import ModalCartComponent from "./ModalCartComponent";
import TotalBayarComponent from "./TotalBayarComponent";

export default class CartComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      cartsDetail: false,
      jumlah: 0,
      keterangan: "",
    };
  }

  handleShow = (cart) => {
    this.setState({
      showModal: true,
      cartsDetail: cart,
      jumlah: cart.jumlah,
      keterangan: cart.keterangan,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  tambah = () => {
    this.setState({
      jumlah: this.state.jumlah + 1,
    });
  };

  kurang = () => {
    if (this.state.jumlah !== 1) {
      this.setState({
        jumlah: this.state.jumlah - 1,
      });
    }
  };

  changeHandler = (event) => {
    this.setState({
      keterangan: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.keterangan);
  };

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
                <ListGroupItem
                  key={cart.id}
                  onClick={() => this.handleShow(cart)}
                >
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
            <ModalCartComponent
              handleClose={this.handleClose}
              {...this.state}
              tambah={this.tambah}
              kurang={this.kurang}
              changeHandler={this.changeHandler}
              handleSubmit={this.handleSubmit}
            />
          </ListGroup>
        )}
        <TotalBayarComponent carts={carts} {...this.props} />
      </Col>
    );
  }
}
