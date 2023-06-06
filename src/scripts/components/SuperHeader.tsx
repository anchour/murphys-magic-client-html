import { useRef } from "preact/hooks"
import { times } from "lodash-es"
import CopyComponent from "./CopyComponent"
import { AsteriskVector } from "./Tags.js"
import { DisableCopyComponent } from "../lib/interfaces"

interface SuperHeaderProps extends DisableCopyComponent {
}

export default function SuperHeader(props: SuperHeaderProps) {
  const ref = useRef(null)

  const elements = <>

    <div className="super-header" ref={ref}>
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

      <nav className="hidden utility-nav sm:block">
        <ul className="utility-nav__menu">
          <li><a href="#">Recent Orders</a></li>
          <li><a href="#">Make a Payment</a></li>
        </ul>
      </nav>

    </div>

  </>

  return props.disableCopy ? elements : (
    <div className="relative">
      {elements}
      <CopyComponent onClick={() => {
        navigator.clipboard.writeText(ref.current.outerHTML)
      }} />
    </div>
  )
}