import Button from "./Button"
import CopyWrapper from "./CopyWrapper"
import ByLine from "./graphics/ByLine"
import { DisableCopyComponent } from "../lib/interfaces"

interface TestimonialProps extends DisableCopyComponent {
}

const Testimonial = (props: TestimonialProps) => {
  return <CopyWrapper disableCopy={props.disableCopy} buttonText="Testimonial">
    <section className="testimonial bg-primary-bone">

      <div className="container">
        <div className="testimonial__content">
          <div className="testimonial__graphic color-secondary-earth" role="presentation" aria-hidden>
            <ByLine />
          </div>

          <div className="testimonial__text">
            <h2 className="testimonial__typography-quote">“The street’s my stage and Murphy’s gives me the perfect products to surprise and delight my audiences. It’s the ideal mix of quality, price, and production execution. Want the best? Get this stuff.”</h2>
            <Button variant="secondary" href="#" disableCopy>Shop Street Magic</Button>
          </div>
        </div>

        <div className="testimonial__image">
          <img src="https://picsum.photos/600/600" loading="lazy" width={600} height={600} role="presentation" alt="" />
        </div>
      </div>
    </section>
  </CopyWrapper>
}

export default Testimonial
