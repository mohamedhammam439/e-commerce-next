import { useContext } from "react";
import { Store } from "../utiles/Store";
import { Box, Button, Grid } from "@mui/material";
import styles from "../styles/OrderDetails.module.css"
import { FcOk } from "react-icons/fc";
const OrderDetails = () => {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  return (
    <div className={styles.center}>
      <h6 className={styles.welcomeOrder}><FcOk  className={styles.icon}/>Thank you ... your odrer has been resived</h6>
      <ul className={styles.ul_list}>
        <li> <h6>order number : <span className={styles.span}>xxxxx</span></h6></li>
        <li><h6>paymentMethod : <span className={styles.span}>cash on delivery</span></h6></li>
      </ul>
     
      
      <Grid container>
        <Grid container spacing={0} className={styles.head}>
          <Grid item xs={4}>
            <h5>Product</h5>
          </Grid>
          <Grid item xs={4}>
           <h5>Number of Product</h5> 
          </Grid>
          <Grid item xs={4}>
            <h5>Price</h5>
          </Grid>
        </Grid>
        {cartItems.map((item) => (
          <Grid container spacing={0} className={styles.body}>
            <Grid item xs={4} className="pl-3">
              {item.name}
            </Grid>
            <Grid item xs={4}>
              {item.quantity}
            </Grid>
            <Grid item xs={4}>
              {item.price}
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={0} className={styles.footer}>
      <Grid item xs={4}>
        <h5>Total</h5>
      </Grid>
      <Grid item xs={4}>
      <h5>{cartItems.reduce((a, c) => a + c.quantity, 0)}</h5>
      </Grid>
      <Grid item xs={4}>
      <h5>{cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}</h5>
      </Grid>
    </Grid>
    </div>
  );
};

export default OrderDetails;
