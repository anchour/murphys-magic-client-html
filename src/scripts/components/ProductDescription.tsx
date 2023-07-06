import { DisableCopyComponent } from "../lib/interfaces"
import CopyWrapper from "./CopyWrapper"
import { Tag } from "./Tags"

interface ProductDescriptionProps extends DisableCopyComponent {
}

const ProductDescription = (props: ProductDescriptionProps) => {
  return <CopyWrapper disableCopy={props.disableCopy} buttonText="Product Description">
    <section className="product-description page-section page-section--tall">
      <div className="container product-description__grid">
        <div className="product-description__content">
          <div className="rte">
            <p className="typography-body-md product-description__header">
              Description
            </p>

            <p className="typography-body-sm">
              ATOM RINGS is a VISUAL demonstration of SOLID THROUGH SOLID! The Apprentice Line of magic is focused toward beginners yet, many professional magicians around the world use these same tricks in their live shows. Learn magic the right way with the Apprentice Line of magic!
            </p>

            <p className="typography-body-md product-description__header">
              Effect
            </p>

            <p className="typography-body-sm">
              In this version, You show four separate, solid rings of steel. You explain how you have the ability to break down atoms and pass a SOLID RING THROUGH ANOTHER SOLID RING, linking them together!! You do the same with the other two rings. You can even hand out the rings to show they have been linked together!
            </p>

            <Tag component="div" variant='simple' disableCopy>Close-up Performer</Tag>
            <Tag component="div" variant='simple' disableCopy>Illusionist</Tag>
          </div>
        </div>

        <div className="product-description__features">

          <div className="rte">

            <p className="typography-body-md product-description__header">Features</p>

            <ul className="typography-body-sm product-description__features-list">
              <li>Easy to perform</li>
              <li>Self-working gimmick</li>
              <li>No slight of hand</li>
              <li>Easy to learn</li>
              <li>Online video instructions</li>
              <li>All props included</li>
              <li>No slight of hand</li>
              <li>Story/patter included</li>
              <li>Great quality</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  </CopyWrapper>
}

export default ProductDescription