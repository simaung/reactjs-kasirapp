import React, { Component } from "react";
import { Col, ListGroup, ListGroupItem } from "reactstrap";
import { API_URL } from "../utils/constant";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
  if (nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;

  return <FontAwesomeIcon icon={faCheese} className="mr-2" />;
};

export default class CategoriesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "categories")
      .then((res) => {
        const categories = res.data;
        this.setState({ categories });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, categoryChoosen } = this.props;
    return (
      <Col md="2" className="mt-4">
        <h4>
          <strong>Kategori</strong>
        </h4>
        <hr />
        <ListGroup>
          {categories &&
            categories.map((category) => (
              <ListGroupItem
                key={category.id}
                onClick={() => changeCategory(category.nama)}
                className={categoryChoosen === category.nama && "active"}
                style={{ cursor: "pointer" }}
              >
                <Icon nama={category.nama} /> {category.nama}
              </ListGroupItem>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
