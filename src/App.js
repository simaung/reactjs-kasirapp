import React, { Component } from "react";
import "./App.css";
import { Col, Container, Row } from "reactstrap";
import {
  HeaderComponent,
  CategoriesComponent,
  OrderListComponent,
  MenusComponent,
} from "./components";
import { API_URL } from "./utils/constant";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoryChoosen: "Makanan",
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
  render() {
    const { menus, categoryChoosen } = this.state;
    return (
      <div>
        <HeaderComponent />
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
                      <MenusComponent key={menu.id} menu={menu} />
                    ))}
                </Row>
              </Col>
              <OrderListComponent />
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
