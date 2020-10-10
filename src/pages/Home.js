import React, { Component } from "react";
import "../App.css";
import { Col, Container, Row } from "reactstrap";
import {
  CategoriesComponent,
  CartComponent,
  MenusComponent,
} from "../components";
import { API_URL } from "../utils/constant";
import axios from "axios";
import swal from "sweetalert";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoryChoosen: "Makanan",
      carts: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoryChoosen)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const carts = res.data;
        this.setState({ carts });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidUpdate(prevState) {
    if (this.state.carts !== prevState.carts) {
      axios
        .get(API_URL + "keranjangs")
        .then((res) => {
          const carts = res.data;
          this.setState({ carts });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  changeCategory = (value) => {
    this.setState({
      categoryChoosen: value,
      menus: [],
    });

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  addCart = (value) => {
    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const cart = {
            jumlah: 1,
            total_harga: value.harga,
            product: value,
          };

          axios
            .post(API_URL + "keranjangs", cart)
            .then((res) => {
              swal({
                title: "Berhasil disimpan",
                text:
                  cart.product.nama + " berhasil dimasukkan kedalam pesanan",
                icon: "success",
                button: false,
                timer: 1000,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          const cart = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            product: value,
          };

          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, cart)
            .then((res) => {
              swal({
                title: "Berhasil disimpan",
                text:
                  cart.product.nama + " berhasil dimasukkan kedalam pesanan",
                icon: "success",
                button: false,
                timer: 1000,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { menus, categoryChoosen, carts } = this.state;
    return (
      <Container>
        <div className="mt-2">
          <Row>
            <CategoriesComponent
              changeCategory={this.changeCategory}
              categoryChoosen={categoryChoosen}
            />
            <Col className="mt-4">
              <h4>
                <strong>Daftar Menu</strong>
              </h4>
              <hr />
              <Row>
                {menus &&
                  menus.map((menu) => (
                    <MenusComponent
                      key={menu.id}
                      menu={menu}
                      addCart={this.addCart}
                    />
                  ))}
              </Row>
            </Col>
            <CartComponent carts={carts} {...this.props} />
          </Row>
        </div>
      </Container>
    );
  }
}
