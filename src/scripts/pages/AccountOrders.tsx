import Details from "../components/Details"
import ordersData from '../../scripts/data/orders.json';
import { useState } from "react";

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
  editLink?: string,
  lineItems: LineItem[]
}

const LineItem = (props: LineItem) => {
  const { title, quantity, image, price } = props;

  return <div className="line-item">
    <div className="line-item__image">
      <img src={image} alt={title} />
    </div>
    <div className="line-item__title">{title}</div>
    <div className="line-item__quantity">{quantity}</div>
  </div>

}

const Order = (props: OrderProps) => {
  const {
    date,
    status,
    quantity,
    subtotal,
    shippingAddress,
    orderNumber,
    invoiceLink,
    detailsLink,
    editLink,
    lineItems,
  } = props;

  return <div className="order">
    <div className="order__header">
      <div className="order-stat">
        <div className="order-stat__header">Order placed</div>
        <div className="order-stat__value">{date} </div>
      </div>

      <div className="order-stat">
        <div className="order-stat__header">Order</div>
        <div className="order-stat__value">{orderNumber}</div>
      </div>

      <div className="order-stat">
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
  </div >
}

const AccountOrders = (props: AccountOrdersProps) => {
  return <section className="page-section account-orders">
    <div className="container">
      <div className="account-sidebar">
        <Details title="Orders">
          <ul className="account-sidebar__list">
            <li><a href="#">Recent Orders</a></li>
            <li><a href="#">Open Orders</a></li>
            <li><a href="#">Closed Orders</a></li>
            <li><a href="#">Dropship Orders</a></li>
            <li><a href="#">Back Orders</a></li>
            <li><a href="#">Import Orders</a></li>
          </ul>
        </Details>

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
}

export default AccountOrders