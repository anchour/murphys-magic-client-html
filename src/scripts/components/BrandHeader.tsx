import { DisableCopyComponent } from "../lib/interfaces"
import Button from "./Button"
import CopyWrapper from "./CopyWrapper"
import DropGraphic from "./graphics/DropGraphic"
import EstGraphic from "./graphics/EstGraphic"

interface BrandHeaderProps extends DisableCopyComponent {
}

const BrandHeader = (props: BrandHeaderProps) => {
  return <CopyWrapper disableCopy={props.disableCopy}>
    <section className="brand-header page-section page-section--tall">

      <div className="container">
        <div className="brand-header__grid">
          <div className="brand-header__graphic brand-header__graphic--one color-secondary-earth" role="presentation" aria-hidden>
            <EstGraphic />
          </div>

          <div className="brand-header__content">
            <h2 className="typography-quote">We are the largest distributor of magic supplies in the world. Come journey into the mysterious.</h2>
            <Button variant="secondary" className="brand-header__button brand-header__button--desktop" href="#" disableCopy>Find a Dealer</Button>
          </div>

          <div className="brand-header__graphic brand-header__graphic--two" role="presentation" aria-hidden>
            <div className="responsive-embed">
              <div className="responsive-embed__scale" style={{ paddingTop: '123.45679012%' }}></div>
              <div className="responsive-embed__item">
                <DropGraphic />
              </div>
            </div>
          </div>

          <div className="brand-header__actions-mobile">
            <Button variant="secondary" className="brand-header__button brand-header__button--mobile" href="#" disableCopy>
              Find a Dealer
            </Button>
          </div>
        </div>
      </div>
    </section>
  </CopyWrapper >
}

export default BrandHeader