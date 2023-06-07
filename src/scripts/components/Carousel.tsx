import { Splide, SplideProps, SplideSlide, SplideTrack } from "@splidejs/react-splide"

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
    },
    hasTrack: false,
  };

  const wrapperProps = {
    className: props.className
  }

  return <div {...wrapperProps}>
    <Splide {...splideProps}>
      <SplideTrack>
        {
          props.children.map((c, index) =>
            <SplideSlide key={`carousel-slide-${index}`}>{c}</SplideSlide>
          )
        }
      </SplideTrack>

      <div className="carousel__pagination">
        <div className="container">
          <ul className="splide__pagination"></ul>
        </div>
      </div>
    </Splide>
  </div>

}

export default Carousel