import React from "react";
import { Col, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { numberWithCommas } from "../utils/utils";

const MenusComponent = ({ menu, addCart }) => {
  return (
    <Col md="4" xs="6" className="mb-4">
      <Card className="shadow" onClick={() => addCart(menu)}>
        <CardImg
          top
          width="100%"
          src={
            "/assets/images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>
            {menu.nama} <strong>({menu.kode})</strong>
          </CardTitle>
          <CardText>Rp. {numberWithCommas(menu.harga)}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MenusComponent;
