import { useRef } from "preact/hooks"
import { DisableCopyComponent } from "../lib/interfaces"
import Button from "./Button"
import CardCarouselBackgroundSVG from "./CardCarouselBackgroundSVG"
import { Card } from "./Cards"
import Carousel, { CarouselProps } from "./Carousel"
import { CardProps } from "./Cards"
import CopyWrapper from "./CopyWrapper"

interface ProductCardCarouselProps extends DisableCopyComponent {
  title?: string,
  titleLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  subtitle?: string,
  collectionLink?: string,
  collectionLinkText?: string,
  cardProps?: CardProps
}

const ProductCardCarousel = (props: ProductCardCarouselProps) => {

  const ViewMoreLink = () => props.collectionLink && props.collectionLinkText ? (
    <Button disableCopy className="product-cards-carousel__view-more" component="a" href={props.collectionLink} variant={'link'}>
      {props.collectionLinkText}
    </Button>
  ) : null

  const carouselProps: CarouselProps = {
    pagination: (
      <div className="product-cards-carousel__pagination">
        <ul className="splide__pagination"></ul>

        <ViewMoreLink />
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

  const TitleTag = props.titleLevel || 'h2'
  const elementRef = useRef(null)
  const elements = <div className="product-cards-carousel" ref={elementRef}>
    <div className="product-cards-carousel__bg">
      <CardCarouselBackgroundSVG />
    </div>

    <div className="container">
      <div className="product-cards-carousel__header">
        <div className="product-cards-carousel__header-left">
          {props.title && <TitleTag className="product-cards-carousel__title typography-heading-md">{props.title}</TitleTag>}
          {props.subtitle && <p className="product-cards-carousel__subtitle typography-body-sm">{props.subtitle}</p>}
        </div>

        {props.collectionLink && props.collectionLinkText ? (
          <div className="product-cards-carousel__header-right">
            <ViewMoreLink />
          </div>) : null}
      </div>

      <Carousel {...carouselProps}>
        <Card disableCopy title='Magic Cards Set' priceRetail={2999} priceWholeSale={1999} {...props.cardProps} />
        <Card disableCopy title='The Vault Set' priceRetail={2999} priceWholeSale={1999}{...props.cardProps} />
        <Card disableCopy title='Magic Cards Set' priceRetail={2999} priceWholeSale={1999} {...props.cardProps} />
        <Card disableCopy title='The Vault Set' priceRetail={2999} priceWholeSale={1999} {...props.cardProps} />
        <Card disableCopy title='Magic Cards Set' priceRetail={2999} priceWholeSale={1999} {...props.cardProps} />
        <Card disableCopy title='The Vault Set' priceRetail={2999} priceWholeSale={1999} {...props.cardProps} />
      </Carousel>
    </div>
  </div>

  return <CopyWrapper ref={elementRef}>{elements}</CopyWrapper>
}

export default ProductCardCarousel