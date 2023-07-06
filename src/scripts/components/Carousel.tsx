import { Splide, SplideProps, SplideSlide, SplideTrack } from "@splidejs/react-splide"
import CopyWrapper from "./CopyWrapper";

export interface CarouselProps {
  className?: string;
  children?: JSX.Element[];
  pagination?: JSX.Element;
  splideProps?: SplideProps;
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

    ...props.splideProps
  };

  const wrapperProps = {
    className: props.className
  }

  return <CopyWrapper>
    <div {...wrapperProps}>
      <Splide {...splideProps}>
        <SplideTrack>
          {
            props.children.map((c, index) =>
              <SplideSlide key={`carousel-slide-${index}`}>{c}</SplideSlide>
            )
          }
        </SplideTrack>

        {props.pagination ? props.pagination : (
          <div className="carousel__pagination">
            <div className="container">
              <ul className="splide__pagination"></ul>
            </div>
          </div>
        )}
      </Splide>
    </div>
  </CopyWrapper>

}

export default Carousel