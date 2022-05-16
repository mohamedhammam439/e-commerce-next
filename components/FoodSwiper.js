import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "../styles/FoodSwiper.module.css";
import Image from "next/image";
import Link from "next/link";
const FoodSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: false }}
      className={styles.swiper}
      breakpoints={{
        1200: {
          slidesPerView: 7,
        },
        1100: {
          slidesPerView: 6,
        },
        1000: {
          slidesPerView: 5,
        },
        800: {
          slidesPerView: 4,
        },
        500: {
          slidesPerView: 3,
        },
        250: {
          slidesPerView: 2,
        },
      }}
    >
      <SwiperSlide>
        <Link href="/Products" passHref>
          <a>
            <div className={styles.center}>
              <div className={styles.foodswiper}>
                <Image 
                className={styles.zoom_image}
                  src="/images/diet-foods.webp"
                  height={120}
                  width={120}
                  alt="no image"
                />
              </div>
              <p className={styles.foodTittle}>Diet Foods</p>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="" passHref>
        <a>
          <div className={styles.center}>
            <div className={styles.foodswiper}>
              <Image 
              className={styles.zoom_image}
                src="/images/fresh-vegetables.webp"
                height={120}
                width={120}
                alt="no image"
              />
            </div>
            <p className={styles.foodTittle}>Fresh Vegetables</p>
          </div>
        </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="" passHref>
        <a>
          <div className={styles.center}>
            <div className={styles.foodswiper}>
              <Image 
              className={styles.zoom_image}
                src="/images/diet-nutrition.webp"
                height={120}
                width={120}
                alt="no image"
              />
            </div>
            <p className={styles.foodTittle}>Diet Nutrition</p>
          </div>
        </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="" passHref>
        <a>
          <div className={styles.center}>
            <div className={styles.foodswiper}>
              <Image 
              className={styles.zoom_image}
                src="/images/fast-food.webp"
                height={120}
                width={120}
                alt="no image"
              />
            </div>
            <p className={styles.foodTittle}>Fast Food Items</p>
          </div>
        </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="" passHref>
        <a>
          <div className={styles.center}>
            <div className={styles.foodswiper}>
              <Image 
              className={styles.zoom_image}
                src="/images/fruits-items.webp"
                height={120}
                width={120}
                alt="no image"
              />
            </div>
            <p className={styles.foodTittle}>Fruit Items</p>
          </div>
        </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="" passHref>
        <a>
          <div className={styles.center}>
            <div className={styles.foodswiper}>
              <Image 
              className={styles.zoom_image}
                src="/images/healthy-foods.webp"
                height={120}
                width={120}
                alt="no image"
              />
            </div>
            <p className={styles.foodTittle}>Healthy Foods</p>
          </div>
        </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="" passHref>
        <a>
          <div className={styles.center}>
            <div className={styles.foodswiper}>
              <Image 
              className={styles.zoom_image}
                src="/images/grocery-items.webp"
                height={120}
                width={120}
                alt="no image"
              />
            </div>
            <p className={styles.foodTittle}>Groceries Items</p>
          </div>
        </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="" passHref>
        <a>
          <div className={styles.center}>
            <div className={styles.foodswiper}>
              <Image 
              className={styles.zoom_image}
                src="/images/quality-milk.webp"
                height={120}
                width={120}
                alt="no image"
              />
            </div>
            <p className={styles.foodTittle}>Quality Milk</p>
          </div>
        </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="" passHref>
        <a>
          <div className={styles.center}>
            <div className={styles.foodswiper}>
              <Image 
              className={styles.zoom_image}
                src="/images/cold-drinks.webp"
                height={120}
                width={120}
                alt="no image"
              />
            </div>
            <p className={styles.foodTittle}>Cold Drinks</p>
          </div>
        </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="" passHref>
          <a>
            <div className={styles.center}>
              <div className={styles.foodswiper}>
                <Image 
                className={styles.zoom_image}
                  src="/images/beaf-steak.webp"
                  height={120}
                  width={120}
                  alt="no image"
                />
              </div>
              <p className={styles.foodTittle}>Beef Steak</p>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="" passHref>
          <a>
            <div className={styles.center}>
              <div className={styles.foodswiper}>
                <Image 
                className={styles.zoom_image}
                  src="/images/vitamin-items.webp"
                  height={120}
                  width={120}
                  alt="no image"
                />
              </div>
              <p className={styles.foodTittle}>Vitamin Items</p>
            </div>
          </a>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href="" passHref>
          <a>
            <div className={styles.center}>
              <div className={styles.foodswiper}>
                <Image 
                className={styles.zoom_image}
                  src="/images/raw-chicken.webp"
                  height={120}
                  width={120}
                  alt="no image"
                />
              </div>
              <p className={styles.foodTittle}>Row Chiken</p>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="" passHref>
          <a>
            <div className={styles.center}>
              <div className={styles.foodswiper}>
                <Image 
                className={styles.zoom_image}
                  src="/images/breakfast-item.webp"
                  height={120}
                  width={120}
                  alt="no image"
                />
              </div>
              <p className={styles.foodTittle}>Breakfast Items</p>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="" passHref>
          <a>
            <div className={styles.center}>
              <div className={styles.foodswiper}>
                <Image 
                className={styles.zoom_image}
                  src="/images/fish-items.webp"
                  height={120}
                  width={120}
                  alt="no image"
                />
              </div>
              <p className={styles.foodTittle}>Fish Items</p>
            </div>
          </a>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default FoodSwiper;
