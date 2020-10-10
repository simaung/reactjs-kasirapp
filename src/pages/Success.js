import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Media } from "reactstrap";
import axios from "axios";
import { API_URL } from "../utils/constant";

export default class Success extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const carts = res.data;
        carts.map(function (item) {
          return axios
            .delete(API_URL + "keranjangs/" + item.id)
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="mt-4 text-center">
        <Media
          src="assets/images/success.png"
          width="300px"
          style={{ margin: "auto" }}
        />
        <h2>halaman sukses</h2>
        <p>Terimakasih sudah memesan!</p>
        <Link to="/">
          <Button color="success">Kembali</Button>
        </Link>
      </div>
    );
  }
}
