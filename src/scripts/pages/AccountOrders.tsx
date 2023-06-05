import Details from "../components/Details"
import ordersData from '../../scripts/data/orders.json';
import slugify from "slugify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SuperHeader from "../components/SuperHeader";

interface AccountOrdersProps {
}

type LineItem = {
  title: string,
  quantity: number,
  image: string,
  price: number
}

interface OrderProps {
  date: string,
  status: string,
  quantity: number,
  subtotal: number,
  shippingAddress: string,
  orderNumber: string,
  invoiceLink?: string
  detailsLink?: string,
  trackingLink?: string,
  editLink?: string,
  lineItems: LineItem[]
}

const LineItem = (props: LineItem) => {
  const { title, quantity, image, price } = props;

  return <div className="line-item">
    <a className="line-item__image" href="#"><img src={image} alt={title} loading="lazy" width={100} height={100} /></a>

    <div>
      <div className="line-item__title"><a href="#" title={`View ${title} in the store`}>{title}</a></div>
      <div className="line-item__stat">Quantity: {quantity}</div>
      <div className="line-item__stat">Price: ${(price / 100).toFixed(2)}</div>
    </div>
  </div>

}

const Order = (props: OrderProps) => {
  const {
    date,
    status,
    subtotal,
    shippingAddress,
    orderNumber,
    invoiceLink,
    editLink,
    lineItems,
    trackingLink,
  } = props;

  return <div className="order">
    <div className="order__header">
      <div className="order-stat order__date">
        <div className="order-stat__header">Order placed</div>
        <div className="order-stat__value">{date} </div>
      </div>

      <div className="order-stat order-stat--hidden-mobile">
        <div className="order-stat__header">Order</div>
        <div className="order-stat__value">{orderNumber}</div>
      </div>

      <div className="order-stat order__subtotal">
        <div className="order-stat__header">Subtotal</div>
        <div className="order-stat__value">${(subtotal / 100).toFixed(2)}</div>
      </div>

      <div className="order-stat order-stat--hidden-mobile">
        <div className="order-stat__header">Ship to</div>
        <div className="order-stat__value">{shippingAddress}</div>
      </div>

      <div className="order__actions">
        <a href={invoiceLink} title={`View invoice for order ${orderNumber}`}>
          View invoice
        </a>

        <a href={editLink} title={`Manage order ${orderNumber}`}>
          Manage order
        </a>
      </div>
    </div>

    <div className="order__line-items">
      {lineItems.map((props: LineItem, index) =>
        <LineItem {...props} key={index} />
      )}
    </div>

    <div className="order__footer">
      <div className="order__status">
        Status:

        <div className={`order__status__badge order__status__badge--${slugify(status).toLowerCase()}`}>
          {status}
        </div>

        {trackingLink && <a href={trackingLink} target="_blank" className="order__tracking-link">Track this shipment</a>}
      </div>
    </div>
  </div >
}

const AccountOrders = (props: AccountOrdersProps) => {
  return <>
    <SuperHeader disableCopy />
    <Header disableCopy />

    <section className="page-section account-orders">
      <div className="container">
        <div className="account-sidebar">

          <Details title="Orders" summaryClassName="typography-heading-xs" open>
            <ul className="account-sidebar__list">
              <li><a href="#">Recent Orders</a></li>
              <li><a href="#">Open Orders</a></li>
              <li><a href="#">Closed Orders</a></li>
              <li><a href="#">Dropship Orders</a></li>
              <li><a href="#">Back Orders</a></li>
              <li><a href="#">Import Orders</a></li>
            </ul>
          </Details>

          {[
            "Account details",
            "Reports",
            "Product updates",
            "Payment",
            "Invoices",
            "Returns",
            "Support",
            "Resources",
          ].map((title, index) =>
            <Details title={title} key={index} summaryClassName="typography-heading-xs" />
          )}
        </div>

        <div className="account-primary-content">
          <h2 className="typography-heading-md">Orders</h2>

          <div className="account-orders__grid">
            {ordersData.map((order, index) =>
              <Order {...order} key={index} />
            )}
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
}

export default AccountOrders