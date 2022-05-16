import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide  } from "swiper/react";
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/autoplay";
import styles from "../styles/CuratedSwiper.module.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
const CuratedSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={20}
      navigation
      autoplay={{ delay: 1000 }}
      pagination={{ clickable: false }}
      scrollbar={{ draggable: false }}
      className={styles.swiper}
    //   autoplay={true}
      breakpoints={{
        1000: {
          slidesPerView: 3,
        },
        700: {
          slidesPerView: 2,
        },
        250: {
          slidesPerView: 1,
        },
      }}
    >
     
      <SwiperSlide>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="220"
            image="/images/1 (1).webp"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Most popular item for Fast food
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Tasty and spicy fast food with different flavors.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="220"
            image="/images/2 (1).webp"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Most popular item for Fast food
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Tasty and spicy fast food with different flavors.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </SwiperSlide>
    <SwiperSlide>
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image="/images/3 (1).webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Most popular item for Fast food
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Tasty and spicy fast food with different flavors.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </SwiperSlide>
  <SwiperSlide>
  <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        height="220"
        image="/images/4 (1).webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Most popular item for Fast food
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Tasty and spicy fast food with different flavors.
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
</SwiperSlide>
     
    </Swiper>
  );
};

export default CuratedSwiper;
