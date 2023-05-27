import SuperHeader from "../components/SuperHeader";
import Header from "../components/Header";
import { useRef, useState } from "preact/hooks";
import Footer from "../components/Footer";
import MailingListSignup from "../components/MailingListSignup";
import { formatMoney } from "../lib/currency";
import cart from '../data/cart.json';
import { DisableCopyComponent } from "../lib/interfaces";
import { CartLineItemType, CartLineItemOptionType } from "../lib/types";
import Button from "../components/Button";

interface CartLayoutProps extends DisableCopyComponent {
}

const cartSubtotal = cart.lineItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

const QuantityControl = ({ quantity, title }: { quantity: number, title?: string }) => {
  const [inputQuantity, setInputQuantity] = useState(quantity)

  return <div className="quantity-control">

    <label className="sr-only" htmlFor="Quantity-1">
      Quantity
    </label>

    <button
      className="quantity-control__button quantity-control__button--minus"
      name="minus"
      type="button"
      onClick={() => setInputQuantity(Math.max(0, inputQuantity - 1))}
    >
      <span className="sr-only">Decrease quantity for {title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        role="presentation"
        className="icon icon-minus"
        fill="none"
        viewBox="0 0 10 2"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M.5 1C.5.7.7.5 1 .5h8a.5.5 0 110 1H1A.5.5 0 01.5 1z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
    <input
      className=" quantity-control__input"
      type="number"
      name="updates[]"
      value={inputQuantity}
      min="0"
      aria-label={`Quantity for ${title}`}
      id="Quantity-1"
      data-product-key="45024251150618:16a3dd1e1996b033d6555cb9e9d38e9f"
      data-key="quantity"
      data-index="1"
    />
    <button
      className="quantity-control__button quantity-control__button--plus"
      name="plus"
      type="button"
      onClick={() => setInputQuantity(inputQuantity + 1)}
    >
      <span className="sr-only"
      >Increase quantity for {title}</span
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        role="presentation"
        className="icon icon-plus"
        fill="none"
        viewBox="0 0 10 10"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1 4.51a.5.5 0 000 1h3.5l.01 3.5a.5.5 0 001-.01V5.5l3.5-.01a.5.5 0 00-.01-1H5.5L5.49.99a.5.5 0 00-1 .01v3.5l-3.5.01H1z"
          fill="currentColor"
        ></path>
      </svg>
    </button>
  </div>
}

const CartLineItem = (props: CartLineItemType) => {
  const {
    title,
    imageUrl,
    productUrl = '#',
    price,
    quantity,
    sku,
    index,
    options = [],
    availableStock,
  } = props;

  const XIcon = <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.52867 1L1 1.51643L6.988 7.50568L1 13.4838L1.52867 14L7.51667 8.02192L13.5047 14L14.0333 13.4838L8.04534 7.50568L14.0333 1.51643L13.5047 1L7.51667 6.97808L1.52867 1Z" fill="#2B2B2B" stroke="#2B2B2B" />
  </svg>


  const ProductImage = ({ className = '' }: { className?: string }) => (
    <a href={productUrl} className={`cart-line-item__link ${className}`}>
      <img
        className="cart-line-item__image"
        src={imageUrl}
        loading="lazy"
        width={200}
        height={200}
      />
    </a>
  )

  return (
    <tr className="cart-line-item">
      <td className="cart-line-item__cell cart-line-item__cell--image cart-line-item__cell--desktop-only">
        <ProductImage />
      </td>

      <td
        className="cart-line-item__cell cart-line-item__cell--product-contents"
      >
        <ProductImage className="cart-line-item__image--mobile-only" />
        <div>

          <a
            href={productUrl}
            className="cart-line-item__name"
          >
            {title}
          </a>

          <div className="cart-product-details">
            <div className="cart-product-details__item">
              <h4 id={`list-options-${index}`} className="sr-only">Product options</h4>
              <ul role="list" aria-describedby={`list-options-${index}`}>
                {options.map(({ label, value }, index) =>
                  <li role="listitem" key={index}>
                    <strong>{label}:</strong>
                    {value}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </td>

      <td className="cart-line-item__cell cart-line-item__cell--sku">
        <div className="cart-line-item__label cart-line-item__mobile-only">
          SKU
        </div>

        {sku}
      </td>

      <td className="cart-line-item__cell cart-line-item__cell--available">
        <div className="cart-line-item__label cart-line-item__mobile-only">
          Available
        </div>

        {availableStock}
      </td>

      <td className="cart-line-item__cell cart-line-item__cell--quantity">
        <div className="cart-line-item__quantity-wrapper">
          <QuantityControl title={title} quantity={quantity} />
        </div>

        <a href="#" className="cart-line-item__remove cart-line-item__remove--mobile" title={`Remove ${title} from your cart.`}>
          {XIcon}
        </a>
      </td>

      <td className="cart-line-item__cell cart-line-item__cell--price">
        <label
          className="cart-line-item__label cart-line-item__mobile-only"
          htmlFor="Quantity-1"
        >
          Price
        </label>

        <span
          className="price price--end"
          data-key="original_line_price"
          data-product-key="45024251150618:16a3dd1e1996b033d6555cb9e9d38e9f"
        >
          {formatMoney(price)}
        </span>
      </td>

      <td className="cart-line-item__cell cart-line-item__cell--total">
        <label
          className="cart-line-item__label cart-line-item__mobile-only"
          htmlFor="Quantity-1"
        >
          Total
        </label>

        <span
          className="price price--end"
          data-key="original_line_price"
          data-product-key="45024251150618:16a3dd1e1996b033d6555cb9e9d38e9f"
        >
          {formatMoney(price * quantity)}
        </span>
      </td>

      <td className="cart-line-item__cell cart-line-item__cell--desktop-only">
        <a
          href="/cart/change?id=45024251150618:16a3dd1e1996b033d6555cb9e9d38e9f&amp;quantity=0"
          className="cart-line-item__remove"
          aria-label={`Remove ${title} from cart`}
        >
          {XIcon}
        </a>
      </td>
    </tr>
  )
}

const CartFooter = (props: CartLayoutProps) => {
  return <div className="cart-footer">
    <div className="cart-footer__content">
      <div className="cart-footer__content__item">
        <div className="cart-footer__content__item__label typography-body-md">
          Total Weight
        </div>

        <div className="cart-footer__content__item__value typography-body-md">
          0.22lbs
        </div>
      </div>

      <div className="cart-footer__content__item">
        <div className="cart-footer__content__item__label typography-body-md">
          Shipping
        </div>

        <div className="cart-footer__content__item__value typography-body-md">
          Calculated at next step
        </div>

      </div>

      <div className="cart-footer__content__item">
        <div className="cart-footer__content__item__label typography-body-md">
          Taxes
        </div>

        <div className="cart-footer__content__item__value typography-body-md">
          Calculated at next step
        </div>
      </div>

      <div className="cart-footer__content__item cart-footer__content__item--subtotal">
        <div className="cart-footer__content__item__label typography-body-md">
          Subtotal
        </div>

        <div className="cart-footer__content__item__value typography-body-md">
          {formatMoney(cartSubtotal)}
        </div>
      </div>
    </div>

    <Button component="button" type="submit" variant={['block', 'primary']} disableCopy>
      Check Out
    </Button>
  </div>
}

const CartTable = (props: CartLayoutProps) => {
  const containerRef = useRef(null)

  return <div className="relative">
    <div className="container cart-outer" ref={containerRef}>
      <h1 className="typography-heading-md">MY CART</h1>

      <table className="cart-table">
        <thead className="cart-table__header bg-background-bone typography-body-md">
          <tr>
            <th className="caption-with-letter-spacing" colSpan={2} scope="col">
              Product
            </th>

            <th className="cart-table__cell" colSpan={1} scope="col">SKU</th>
            <th className="cart-table__cell" colSpan={1} scope="col">Available</th>
            <th className="cart-table__cell" colSpan={1} scope="col">Quantity</th>
            <th className="cart-table__cell" colSpan={1} scope="col">Price</th>
            <th className="cart-table__cell" colSpan={1} scope="col">Total</th>
            <th className="cart-table__cell" colSpan={1} scope="col">
              <div className="sr-only"> Actions </div>
            </th>
          </tr>
        </thead>

        <tbody className="cart-table__body">
          {cart.lineItems.map((lineItem, index) =>
            <CartLineItem {...lineItem} index={index} key={index} />
          )}
        </tbody>
      </table>

      <CartFooter />
    </div>
  </div>

}

const CartPage = () => <>
  <SuperHeader />
  <Header />
  <CartTable />
  <MailingListSignup />
  <Footer />
</>


export default CartPage
