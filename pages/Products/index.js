import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Link from "next/link";

import { useContext } from "react";
import axios from "axios";
import db from "../../utiles/db";
import { Store } from "../../utiles/Store";
import Product from "../../models/Product";

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
const HomeProducts = (props) => {
  const { products } = props;
  const { dispatch } = useContext(Store);

  const addToCart = async (product) => {
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock <= 0) {
      window.alert("sorry !! Products is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
    console.log("add");
  };
  return (
    <div>
      <h1>All Products</h1>
      <Grid container md={9} spacing={1}>
        {products?.map((product) => (
          <Grid item md={3} key={product.name}>
            <Card>
              <Link href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                  ></CardMedia>
                  <CardContent>
                    <Typography>{product.name}</Typography>
                    <Typography>${product.price}</Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  className="btn-add"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default HomeProducts;
