import Button from "../Button"
import QuantityInput from "../QuantityInput"
import PricingTable from './PricingTable'
import { Tag } from "../Tags"
import Details from "../Details"

interface ProductFormProps {
}

const ProductForm = (props: ProductFormProps) => {
  return <div className="product-form-section">
    <Tag component="div" className="product-form-section__tag product-form-section__tag--desktop" variant='label secondary' disableCopy>New</Tag>
    <div className="product-form-section__inner">

    <div className="product-form-section__header">
      <h1 className="typography-section product-form-section__title">
        Atom Rings
      </h1>

      <div className="product-form-section__vendor">
        <a href="#">By Apprentice Magic</a>
      </div>
    </div>

    <form action="" className="product-form form" method="POST">

      <div className="form-field">


        <label className="form-label" htmlFor="product-form__size">Size</label>

        <div className="form-field product-form__options">
          <input id="size-xs" type="radio" className="sr-only product-form__option" name="size" value="xs" />
          <label htmlFor="size-xs"> X-Small </label>

          <input id="size-sm" type="radio" className="sr-only product-form__option" name="size" value="sm" />
          <label htmlFor="size-sm"> Small </label>

          <input id="size-md" type="radio" className="sr-only product-form__option" name="size" value="md" />
          <label htmlFor="size-md"> Medium </label>

          <input id="size-lg" type="radio" className="sr-only product-form__option" name="size" value="lg" />
          <label htmlFor="size-lg"> Large </label>

          <input id="size-xl" type="radio" className="sr-only product-form__option" name="size" value="xl" />
          <label htmlFor="size-xl"> X-Large </label>
        </div>

      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="product-form__style">Style</label>
        <select className="form-select">
          <option value="">Select a style</option>
          <option value="1">Style 1</option>
          <option value="2">Style 2</option>
          <option value="3">Style 3</option>
        </select>
      </div>

      <div className="form-field">
        <label className="form-label">Color</label>

        <div className="product-form__colors">
          <input type="radio" name="color" className="sr-only" id="color-smoke" value="smoke" aria-label="Smoke" />
          <label htmlFor="color-smoke">
            Smoke
          </label>

          <input type="radio" name="color" className="sr-only" id="color-water" value="water" aria-label="Water" />
          <label htmlFor="color-water">
            Water
          </label>

          <input type="radio" name="color" className="sr-only" id="color-light" value="light" aria-label="Light" />
          <label htmlFor="color-light">
            Light
          </label>

          <input type="radio" name="color" className="sr-only" id="color-earth" value="earth" aria-label="Eart" />
          <label htmlFor="color-earth">
            Earth
          </label>
        </div>
      </div>

      <div className="form-field">
        <div className="form-label">Bulk Discount</div>
        <PricingTable />
      </div>

      <div className="product-form-footer product-form-footer--with-quantity">
        <div className="product-form-quantity">
          <QuantityInput />

          <div className="product-form-quantity__remaining">145 in stock</div>
        </div>

        <Button disableCopy type="submit" className="product-form-footer__submit" variant="primary block">Add to cart</Button>
      </div>
    </form>

    <div className="product-form-section__details">

      <Details title="Orders" summaryClassName="typography-heading-xs" open>
        <div className="rte">
          <p> Date Added: 11/3/2022 </p>
          <p>Weight (lbs): 0.1</p>
          <p>Dimensions: 4.5 x 4.5 x 0.1</p>
          <p>⚠️ This item is potentially hazardous.</p>
        </div>
      </Details>

      <Details title="Marketing Resources" summaryClassName="typography-heading-xs">
        <div className="rte">
          <ul>
            <li><a href="#">🎬 Video Teaser #1 HD Version SD Version</a></li>
            <li><a href="#">🎬 Video Teaser #2 HD Version SD Version</a></li>
            <li><a href="#">📁 Product Photography</a></li>
            <li><a href="#">Download All</a></li>
          </ul>

        </div>
      </Details>

      <Details title="Instructions" summaryClassName="typography-heading-xs">
        <div className="rte">
          <p> Date Added: 11/3/2022 </p>
          <p>Weight (lbs): 0.1</p>
          <p>Dimensions: 4.5 x 4.5 x 0.1</p>
          <p>⚠️ This item is potentially hazardous.</p>
        </div>
      </Details>

      </div>
    </div>
  </div>
}

export default ProductForm
