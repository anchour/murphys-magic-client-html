import { Splide, SplideProps, SplideSlide } from "@splidejs/react-splide"

interface CarouselProps {
  className?: string,
  children: JSX.Element[]
}

const Carousel = (props: CarouselProps) => {
  if (!props.children) {
    return;
  }

  const splideProps: SplideProps = {
    options: {
      type: 'loop',
      arrows: false,
      pagination: true,
    }
  };

  const wrapperProps = {
    className: props.className
  }

  return <div {...wrapperProps}>
    <Splide {...splideProps}>
      {
        props.children.map((c, index) =>
          <SplideSlide key={`carousel-slide-${index}`}>{c}</SplideSlide>
        )
      }
    </Splide>
  </div>

}

export default Carousel