import { times } from "lodash-es"
import { AsteriskVector } from "../components/Tags"

export function AnnouncementBar() {
  return <>
    <div className="super-header">
      <div className="super-header__marquee typography-heading color-secondary-light sm:hidden"
        role="presentation"
        aria-hidden="true"
      >
        {times(2, () =>
          <div className="super-header__marquee-content">
            {times(10, (i) => <span className="super-header__marquee-text" key={i}>Free Delivery  <AsteriskVector /></span>)}
          </div>
        )}
      </div>

      <a href="#" className="hidden super-header__text sm:block">
        <span className="inline-block uppercase font-heading text-green super-header__text-callout">
          New In:
        </span>

        <span className="inline-block ml-1 super-header__text-content">
          Exclusive new products from John Smith
        </span>
      </a>

      <nav className="hidden utility-nav sm:block">
        <ul className="utility-nav__menu">
          <li><a href="#">Recent Orders</a></li>
          <li><a href="#">Make a Payment</a></li>
        </ul>
      </nav>
    </div >
  </>
}

export default function Layouts() {
  return <>
    <AnnouncementBar />
    <h1>Page layouts</h1>
  </>

}