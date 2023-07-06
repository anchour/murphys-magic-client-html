import { times } from "lodash-es"
import { AsteriskVector } from "./Tags.js"
import { DisableCopyComponent } from "../lib/interfaces"
import CopyWrapper from "./CopyWrapper"

interface SuperHeaderProps extends DisableCopyComponent {
}

export default function SuperHeader(props: SuperHeaderProps) {
  const elements = (
    <div className="super-header">
      <div className="super-header__marquee typography-heading color-secondary-light"
        role="presentation"
        aria-hidden="true"
      >
        {times(2, () =>
          <div className="super-header__marquee-content">
            {times(10, (i) => <span className="super-header__marquee-text" key={i}>Free Delivery  <AsteriskVector /></span>)}
          </div>
        )}
      </div>

      <div className="super-header__text">
        <a href="#">
          <span className="inline-block uppercase font-heading text-green super-header__text-callout">
            New In:
          </span>

          <span className="inline-block ml-1 super-header__text-content">
            Exclusive new products from John Smith
          </span>
        </a>
      </div>

      <nav className="hidden utility-nav">
        <ul className="utility-nav__menu">
          <li><a href="#">Recent Orders</a></li>
          <li><a href="#">Make a Payment</a></li>
        </ul>
      </nav>

    </div>
  )

  return props.disableCopy ? elements : (
    <CopyWrapper disableCopy={props.disableCopy}>
      {elements}
    </CopyWrapper>
  )
}