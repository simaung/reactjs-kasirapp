import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import { numberWithCommas } from "../utils/utils";

const ModalCartComponent = ({
  showModal,
  handleClose,
  cartsDetail,
  jumlah,
  keterangan,
  totalHarga,
  tambah,
  kurang,
  changeHandler,
  handleSubmit,
  hapusPesanan,
}) => {
  if (cartsDetail) {
    return (
      <Modal isOpen={showModal} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>
          {cartsDetail.product.nama}{" "}
          <strong>(Rp. {numberWithCommas(cartsDetail.product.harga)})</strong>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Total Harga</Label>
              <p>Rp. {numberWithCommas(totalHarga)}</p>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Jumlah</Label>
              <br />
              <Button
                color="primary"
                size="sm"
                className="mr-2"
                onClick={() => kurang()}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <strong>{jumlah}</strong>
              <Button
                color="primary"
                size="sm"
                className="ml-2"
                onClick={() => tambah()}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Keterangan</Label>
              <Input
                type="textarea"
                name="keterangan"
                placeholder="Contoh: Pedas kasih setengah"
                value={keterangan}
                onChange={(event) => changeHandler(event)}
              />
            </FormGroup>

            <Button color="primary">Simpan</Button>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => hapusPesanan(cartsDetail.id)}>
            <FontAwesomeIcon icon={faTrash} /> Hapus Pesanan
          </Button>
        </ModalFooter>
      </Modal>
    );
  } else {
    return (
      <Modal isOpen={showModal} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>Kosong</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleClose}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
};

export default ModalCartComponent;
