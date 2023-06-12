import { useState } from "preact/hooks"
import { DisableCopyComponent } from "../lib/interfaces"

interface QuantityInputProps extends DisableCopyComponent {
}

const QuantityInput = (props: QuantityInputProps) => {
  const [quantity, setQuantity] = useState(1)

  return <>
  <label htmlFor="quantity" className="form-label">Quantity</label>
    <div className="quantity-input">
      <button onClick={() => setQuantity(Math.max(quantity - 1, 1))} className="quantity-input__button quantity-input__button--decrement" type="button" aria-label="Decrement quantity">
        &minus;
      </button>

      <input type="text" id="quantity" className="quantity-input__field form-input" value={quantity} pattern="[0-9]*" inputMode="numeric" />

      <button
        onClick={() => setQuantity(quantity + 1)}
        className="quantity-input__button quantity-input__button--increment"
        type="button"
        aria-label="Increment quantity"
        dangerouslySetInnerHTML={{ __html: '&plus;' }}
      />
    </div>
  </>
}

export default QuantityInput