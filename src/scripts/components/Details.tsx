import classNames from "classnames";
import { useState } from "preact/hooks";

interface DetailsProps {
  title?: string;
  children?: any;
  open?: boolean;
  className?: string;
  summaryClassName?: string;
  summaryElement?: any;
}

const Caret = () => <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1L8 7L15 1" stroke="#2B2B2B" />
</svg>


const Details = (props: DetailsProps) => {
  const [open, setOpen] = useState(props.open)

  const detailsProps = {
    className: classNames('accordion', props.className),
    open,
  }

  const summaryProps = {
    className: classNames('accordion__title', props.summaryClassName),
    onClick: () => setOpen(!open)
  }

  const summaryElements = props.summaryElement ? props.summaryElement : (
    <>
      {props.title} <div className="accordion__caret">
        <Caret />
      </div>
    </>
  )

  return <details {...detailsProps}>
    <summary {...summaryProps}>
      {summaryElements}
    </summary>


    <div className="accordion__content">
      {props.children}
    </div>
  </details>
}

export default Details