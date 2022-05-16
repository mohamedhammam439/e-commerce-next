import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Link from "next/link";
import { Store } from "../utiles/Store";
import { useContext, useState } from "react";
import { Badge } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CartList from "./CartList";

const MainNavbar = (anchor) => {
  const { state } = useContext(Store);
  const { cart } = state;
  const [openDrawer, setOpenDrawer] = useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer({ ...openDrawer, [anchor]: open });
  };
  return (
    <Navbar className="navbar" bg="light" expand="lg" fixed>
      <Container fluid>
        <Link href="/">
          <a>
            <Navbar.Brand className="brand">E-commerce</Navbar.Brand>
          </a>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link href="/">
              <Nav.Link href="#action1">Home</Nav.Link>
            </Link>
            <Link href="/Products">
              <Nav.Link href="#action2">Shopping</Nav.Link>
            </Link>

            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav.Link
            href="#"
            className="custom-ml"
            onClick={toggleDrawer("right", true)}
          >
            {cart.cartItems.length > 0 ? (
              <Badge badgeContent={cart.cartItems.length}>Cart</Badge>
            ) : (
              "Cart"
            )}
          </Nav.Link>
          <Drawer
            anchor="right"
            open={openDrawer["right"]}
            onClose={toggleDrawer("right", false)}
          >
            <CartList />
          </Drawer>
          <Nav.Link href="#">Login</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
