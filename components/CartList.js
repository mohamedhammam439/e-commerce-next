import { useContext } from "react";
import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Store } from "../utiles/Store";
import { Button } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
const CartList = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const removeItem = (item) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: item });
  };
  const handelIncrement = (item) => {
    dispatch({ type: "INCREMENT", payload: item });
  };
  const handelDecrement = (item) => {
    dispatch({ type: "DECREMENT", payload: item });
  };
  return (
    <div className="cartList">
      {cartItems.length === 0 ? (
        <div>
          <div className="cartHead">
            {" "}
            <h4>Shopping Cart</h4>
          </div>
          <div className="emptyCart">
            <h5>the cart is empty</h5>
          </div>
        </div>
      ) : (
        <div className="itemsList">
          <div className="cartHead">
            {" "}
            <h4>Shopping Cart</h4>
          </div>
          <div className="cartContent">
            {cartItems.map((item) => (
              <Grid
                container
                spacing={2}
                className="productcart"
                key={item._id}
              >
                <Grid item xs={4}>
                  <Link href={`/product/${item.slug}`} passHref>
                    <a>
                      {" "}
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={75}
                        height={75}
                      />
                    </a>
                  </Link>
                </Grid>
                <Grid item xs={4}>
                  <Link href={`/product/${item.slug}`} passHref>
                    <a>
                      <div> {item.name} </div>
                    </a>
                  </Link>
                  <div> {item.category} </div>
                  <div className="productCount">
                    {" "}
                    {item.quantity <= 1 ? (
                      <button className="dec-button" disabled>
                        -
                      </button>
                    ) : (
                      <button
                        className="dec-button"
                        onClick={() => handelDecrement(item)}
                      >
                        -
                      </button>
                    )}
                    <span className="item-number">{item.quantity}</span>{" "}
                    <button
                      className="inc-button"
                      onClick={() => handelIncrement(item)}
                    >
                      +
                    </button>
                  </div>
                </Grid>
                <Grid item xs={3}>
                  <h4> ${item.price} </h4>
                </Grid>
                <Grid item xs={1}>
                      <AiFillDelete className="dele-icon"  onClick={() => removeItem(item)}/>
                 
                </Grid>
              </Grid>
            ))}
          </div>
          <div className="cartFooter">
            <div className="productCount">
              <h6>Number Of Items</h6>
              <h6>
                {" "}
                {cartItems.reduce((a, c) => a + c.quantity, 0)}
                {""} items
              </h6>
            </div>
            <div className="productCount">
              <h6>Subtotal</h6>
              <h4>
                {" "}
                ${""}
                {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}{" "}
              </h4>
            </div>
            <Link href="/Checkout" passHref>
              <a>
                <Button className="btn add-button" size="lg">
                  Check Out
                </Button>
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
