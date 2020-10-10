import React, { Component } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { numberWithCommas } from "../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { API_URL } from "../utils/constant";

export default class TotalBayarComponent extends Component {
  bayar = (totalBayar) => {
    const pesanan = {
      total_bayar: totalBayar,
      menus: this.props.carts,
    };

    axios.post(API_URL + "pesanans", pesanan).then((res) => {
      this.props.history.push("/success");
    });
  };
  render() {
    const totalBayar = this.props.carts.reduce(function (result, item) {
      return result + item.total_harga;
    }, 0);
    return (
      <>
        {/* web */}
        <div className="fixed-bottom d-none d-md-block">
          <Container>
            <Row>
              <Col md={{ size: 3, offset: 9 }} className="px-4">
                <h5>
                  Total Harga:{" "}
                  <strong className="float-right mr-2">
                    Rp. {numberWithCommas(totalBayar)}
                  </strong>
                </h5>
                <Button
                  color="primary"
                  block
                  className="mb-4 mt-2 mr-2"
                  size="lg"
                  onClick={() => this.bayar(totalBayar)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Bayar
                </Button>
              </Col>
            </Row>
          </Container>
        </div>

        {/* web */}
        <div className="d-md-none d-sm-block">
          <Container>
            <Row>
              <Col md={{ size: 3, offset: 9 }} className="px-4">
                <h5>
                  Total Harga:{" "}
                  <strong className="float-right mr-2">
                    Rp. {numberWithCommas(totalBayar)}
                  </strong>
                </h5>
                <Button
                  color="primary"
                  block
                  className="mb-4 mt-2 mr-2"
                  size="lg"
                  onClick={() => this.bayar(totalBayar)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                  Bayar
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}
