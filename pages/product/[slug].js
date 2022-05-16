import { Grid, List, ListItem, Typography } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Product from "../../models/Product";
import db from "../../utiles/db";
import { Store } from "../../utiles/Store";


export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}


const Details = (props) => {
  const { dispatch } = useContext(Store);

  const { product } = props;
  if (!product) {
    return <div>Ooooooops!! page not found</div>;
  }
  const addToCart = async () => {
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock <= 0) {
      window.alert("sorry !! Products is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
    console.log("add");
  };
 
  return (
    <div className="container">
      <Link href="/">
        <a className="back-link">back to Products</a>
      </Link>

      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={450}
            height={450}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1">{product.name}</Typography>{" "}
            </ListItem>
            <ListItem>Category: {product.category} </ListItem>
            <ListItem>Brand: {product.brand} </ListItem>
            <ListItem>
              Rating: {product.rating} of {product.numReviews}{" "}
            </ListItem>
            <ListItem>Description: {product.description} </ListItem>
            <ListItem>
              Status:{" "}
              {product.countInStock > 0
                ? `only ${product.countInStock} left!`
                : "not avilable"}{" "}
            </ListItem>
            
            <ListItem>
              <Button size="lg" className="add-button" onClick={addToCart}>
                Add To Cart
              </Button>{" "}
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;

