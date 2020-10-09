import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Media } from "reactstrap";

export default class Success extends Component {
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
