import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "../styles/SwiperSlider.module.css";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
const SwiperSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: false }}
      className={styles.swiper}
      breakpoints={
       { 
         1000:{
          slidesPerView: 3
        },
        700:{
          slidesPerView: 2
        },
        250:{
          slidesPerView: 1
        }
      }
      }
    >
      <SwiperSlide>
        <Grid container spacing={0} className={styles.slide1}>
          <Grid item xs={4} className={styles.pic1}></Grid>
          <Grid item xs={8} className={styles.content}>
            <Typography className={styles.tittle}>
              Your pet choice for fresh healthy food
            </Typography>
            <Typography className={styles.paragraph}>
              Get your clean on supplies
            </Typography>
          </Grid>
        </Grid>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <Grid container spacing={0} className={styles.slide2}>
          <Grid item xs={4} className={styles.pic2}></Grid>
          <Grid item xs={8} className={styles.content}>
            <Typography className={styles.tittle}>
              Washing item with discount product{" "}
            </Typography>
            <Typography className={styles.paragraph}>
              Get your clean on supplies
            </Typography>
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid container spacing={0} className={styles.slide3}>
          <Grid item xs={4} className={styles.pic3}></Grid>
          <Grid item xs={8} className={styles.content}>
            <Typography className={styles.tittle}>
              Spring cleaning for home appliance{" "}
            </Typography>
            <Typography className={styles.paragraph}>
              Get your clean on supplies
            </Typography>
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide>
        <Grid container spacing={0} className={styles.slide4}>
          <Grid item xs={4} className={styles.pic4}></Grid>
          <Grid item xs={8} className={styles.content}>
            <Typography className={styles.tittle}>
              Fresh quality meat item with discount{" "}
            </Typography>
            <Typography className={styles.paragraph}>
              Get your clean on supplies
            </Typography>
          </Grid>
        </Grid>
      </SwiperSlide>{" "}
    </Swiper>
  );
};

export default SwiperSlider;
