import CardCarouselBackgroundSVG from "./CardCarouselBackgroundSVG"
import { Card } from "./Cards"
import Carousel, { CarouselProps } from "./Carousel"

interface ProductCardCarouselProps {
}

const ProductCardCarousel = (props: ProductCardCarouselProps) => {

  const carouselProps: CarouselProps = {
    pagination: (
      <div className="product-cards-carousel__pagination">
        <ul className="splide__pagination"></ul>
      </div>
    ),
    splideProps: {
      options: {
        arrows: false,
        gap: '0.5rem',
        perPage: 1,
        mediaQuery: 'min',
        padding: {
          right: '2rem',
        },
        rewind: true,

        breakpoints: {
          640: {
            perPage: 2,
          },
          768: {
            perPage: 3,
          },
          1280: {
            perPage: 4,
          }
        }
      }
    }
  }

  return <div className="product-cards-carousel">
    <div className="product-cards-carousel__bg">
      <CardCarouselBackgroundSVG />
    </div>
    <div className="container">
      <Carousel {...carouselProps}>
        <Card disableCopy title='Magic Cards Set' priceRetail={2999} priceWholeSale={1999} />
        <Card disableCopy title='The Vault Set' priceRetail={2999} priceWholeSale={1999} />
        <Card disableCopy title='Magic Cards Set' priceRetail={2999} priceWholeSale={1999} />
        <Card disableCopy title='The Vault Set' priceRetail={2999} priceWholeSale={1999} />
        <Card disableCopy title='Magic Cards Set' priceRetail={2999} priceWholeSale={1999} />
        <Card disableCopy title='The Vault Set' priceRetail={2999} priceWholeSale={1999} />
      </Carousel>
    </div>
  </div>
}

export default ProductCardCarousel