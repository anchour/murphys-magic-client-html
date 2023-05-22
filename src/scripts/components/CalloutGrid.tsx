import Primary from '../../images/callout-grid/callout-grid-primary.jpg';
import Secondary from '../../images/callout-grid/callout-grid-secondary.jpg';
import Tertiary from '../../images/callout-grid/callout-grid-tertiary.jpg';
import Quaternary from '../../images/callout-grid/callout-grid-quaternary.jpg';
import ArrowRight from './Icons/ArrowRight.svg';

interface CalloutGridProps {
}

const CalloutGrid = (props: CalloutGridProps) => {
  return <section className="page-section callout-grid">
    <div className="container callout-grid__grid">
      <a href="#" className="callout-grid__area callout-grid__area--primary">
        <img src={Primary} loading='lazy' width={1348} height={1661} alt='Toy & Hobby Collection' />

        <div className="callout-grid__area__title typography-heading-xs">
          Toy & hobby collection <ArrowRight />
        </div>
      </a>

      <a href="#" className="callout-grid__area callout-grid__area--secondary">
        <img src={Secondary} loading='lazy' width={1380} height={813} alt='Cult Classics' />

        <div className="callout-grid__area__title typography-heading-xs">
          Cult Classics <ArrowRight />
        </div>
      </a>

      <a href="#" className="callout-grid__area callout-grid__area--tertiary">
        <img src={Tertiary} loading='lazy' width={674} height={813} alt='New Magicians Collection' />

        <div className="callout-grid__area__title typography-heading-xs">
          New Magicians Collection <ArrowRight />
        </div>
      </a>

      <a href="#" className="callout-grid__area callout-grid__area--quaternary">
        <img src={Quaternary} loading='lazy' width={674} height={813} alt='Best Sellers' />

        <div className="callout-grid__area__title typography-heading-xs">
          Best Sellers <ArrowRight />
        </div>
      </a>
    </div>
  </section>
}

export default CalloutGrid