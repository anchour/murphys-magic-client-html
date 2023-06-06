import { Splide, SplideSlide } from "@splidejs/react-splide"

interface CarouselProps {
  children: JSX.Element[]
}

const Carousel = (props: CarouselProps) => {
  return <>
    <Splide>
      {props.children.map((c, index) => <SplideSlide key={`carousel-slide-${index}`}>{c}</SplideSlide>)}
    </Splide>
  </>
}

export default Carousel