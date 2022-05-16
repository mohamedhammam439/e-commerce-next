import { Grid, Typography } from "@mui/material";
import Head from "next/head";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import MainNavbar from "./Navbar";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>e-commerce</title>
      </Head>

      <MainNavbar />
      <Container fluid className="main">
        {children}
      </Container>

      <footer>
        <Grid container spacing={0} className={styles.upfooter}>
          <Grid item md={6} xs={12} className={styles.tittleside}>
            <h2>Make your online shop easier with our mobile app</h2>
            <p>
              BoroBazar makes online grocery shopping fast and easy. Get
              groceries delivered and order the best of seasonal farm fresh
              food.
            </p>
            <div className={styles.footerbtn}>
              <div className={styles.leftbtn}></div>
              <div className={styles.rightbtn}></div>
            </div>
          </Grid>
          <Grid item md={6} xs={12} className={styles.imgside}></Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs>
            <ul className={styles.footerUl}>
              <li className={styles.brand}>E-commerce</li>
              <li>We offers high-quality foods and the best delivery service, and the food market you can blindly trust</li>
              <li>icons???</li>
             
            </ul>
          </Grid>
          <Grid item xs>
            <ul className={styles.footerUl}>
              <li className={styles.footerUlTittle}>About Us</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>About Team</li>
              <li>Customer Support</li>
            </ul>
          </Grid>
          <Grid item xs>
            <ul className={styles.footerUl}>
              <li className={styles.footerUlTittle}>Our Information</li>
              <li>Privacy policy update</li>
              <li>Terms & conditions</li>
              <li>Return policy</li>
              <li>Site Map</li>
            </ul>
          </Grid>
          <Grid item xs>
            <ul className={styles.footerUl}>
              <li className={styles.footerUlTittle}>Community</li>
              <li>Announcement</li>
              <li>Answer center</li>
              <li>Discussion boards</li>
              <li>Giving works</li>
            </ul>
          </Grid>
          <Grid item xs>
            {" "}
            <ul className={styles.footerUl}>
              <li className={styles.footerUlTittle}>Subscribe Now</li>
              <li>
                Subscribe your email for newsletter and featured news based on
                your interest
              </li>

              <li>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="write message"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    send
                  </Button>
                </InputGroup>
              </li>
            </ul>
          </Grid>
        </Grid>
        <div className="footer">
          <Typography>All rights recieved by e-commerce</Typography>
          <Typography>Copyright 2022</Typography>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
