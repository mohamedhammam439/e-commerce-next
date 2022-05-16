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
import db from "../utiles/db";
import Product from "../models/Product";
import { Store } from "../utiles/Store";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import SwiperSlider from "../components/Swiper";
import FoodSwiper from "../components/FoodSwiper";
import CuratedSwiper from "../components/CuratedSwiper";
import Image from "next/image";
// import HomeProductsTest from "../components/HomeProducts"

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


export default function Home(props) {
  const { products } = props;
  const { dispatch } = useContext(Store);
  // const [products, setProducts] = useState(null)

  const addToCart = async (product) => {
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock <= 0) {
      window.alert("sorry !! Products is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
    console.log("add");
  };

  

  // useEffect(() => {
  //   fetch('api/profile-data???')   // need api to get data
  //     .then((res) => res.json())
  //     .then((products) => {
  //       setProducts(products)
  //     })
  // }, [])

  return (
    <div className="home_page">
      <div className={styles.home_cover}></div>
      <div className="slider">
        <SwiperSlider />
      </div>
      <div className={styles.foodKinds}>
        <h3>what food you love to order</h3>
        <p className={styles.foodparagraph}>
          Here order your favorite foods from different categories
        </p>
      </div>
      <div>
        <FoodSwiper />
      </div>
      <div className={styles.bestSeller}>
        <h3>Best seller grocery near you</h3>
        <p className={styles.foodparagraph}>
          We provide best quality & fresh grocery items near your location
        </p>
      </div>
      <Grid container fluid spacing={1} className={styles.home_products}>
        {products.map((product) => (
          <Grid item md={2} key={product.name}>
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
      <div className={styles.advertise}></div>
      <div className={styles.soldProducts}>
        <h3>Popular product that we sold</h3>
        <p className={styles.foodparagraph}>
          We provide best quality & fresh grocery items near your location
        </p>
      </div>
      <Grid container fluid spacing={1} className={styles.home_products}>
        {products.map((product) => (
          <Grid item md={2} key={product.name}>
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
      <div className={styles.soldProducts}>
        <h3>Curated collections</h3>
        <p className={styles.foodparagraph}>
          We provide best quality & fresh grocery items near your location
        </p>
      </div>
      <CuratedSwiper />
     
    </div>
  );
}
