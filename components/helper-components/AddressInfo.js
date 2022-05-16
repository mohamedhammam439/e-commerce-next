import { useContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Store } from "../../utiles/Store";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";

const AddressInfo = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;
  const { setValue } = useForm();
  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("phoneNumber", shippingAddress.phoneNumber);
  });

  const handelSubmit = ({ fullName, address, phoneNumber }) => {
    e.preventDefault();
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, address, phoneNumber },
    });
    Cookies.set("shippingAddress", { fullName, address, phoneNumber });
  };
  console.log("shippingAddress", shippingAddress);
  return (
    <>
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" value={shippingAddress.address} placeholder="Enter Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="fullName" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" name="phoneNumber" placeholder="Enter Phone number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Branch</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="1">Nasr City</option>
            <option value="2">Nasr city 2</option>
            <option value="3">Nasr City 3</option>
          </Form.Select>
        </Form.Group>
        <button type="submit">submit</button>
      </Form>
    </>
  );
};

export default AddressInfo;
