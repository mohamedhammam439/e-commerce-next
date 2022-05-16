import { Box, Button, Grid } from "@mui/material";
import { useContext } from "react";
import { Store } from "../utiles/Store";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Checkout.module.css";
import CheckoutInfo from "../components/CheckoutInfo";
import { useRouter } from "next/router";

const Checkout = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const router = useRouter();
  console.log("cartItems", cartItems);
  return (
    <>
      <Grid container spacing={2} className={styles.mt_30}>
        <Grid item md={9}>
          <Box className={styles.checkout_orders}>
            {" "}
            <CheckoutInfo />
          </Box>
        </Grid>
        <Grid item md={3}>
          <Box className={styles.checkout_orders}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <h5>Product</h5>
              </Grid>
              <Grid item xs={4} className={styles.center}>
                <h5>Subtotal</h5>
              </Grid>
            </Grid>
            {cartItems.length === 0 ? (
              <p className={styles.emptyCart}>Your Cart is empty</p>
            ) : (
              <div>
                {" "}
                {cartItems.map((item) => (
                  <Grid
                    container
                    spacing={2}
                    className={styles.product_item}
                    key={item._id}
                  >
                    <Grid item xs={3}>
                      {" "}
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={40}
                        height={40}
                      />
                    </Grid>

                    <Grid item xs={5}>
                      <div> {item.name} </div>
                    </Grid>
                    <Grid item xs={4} className={styles.center}>
                      <h6> ${item.price * item.quantity} </h6>
                    </Grid>
                  </Grid>
                ))}
              </div>
            )}
            <Grid container spacing={2} className={styles.product_count}>
              <Grid item xs={8}>
                <h5>Total</h5>
              </Grid>
              <Grid item xs={4} className={styles.center}>
                <h5>
                  {" "}
                  ${""}
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}{" "}
                </h5>
              </Grid>
            </Grid>
            {cartItems.length === 0 ? (
              <Button className="btn add-button" size="lg" disabled>
                Order Now
              </Button>
            ) : (
              <Button
                className="btn add-button"
                onClick={()=>router.push("/OrderDetails")}
                size="lg"
              >
                Order Now
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Checkout;
