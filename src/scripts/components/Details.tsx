import classNames from "classnames";

interface DetailsProps {
  title: string,
  children?: any,
  open?: boolean,
  summaryClassName?: string,
}

const Caret = () => <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1L8 7L15 1" stroke="#2B2B2B" />
</svg>


const Details = (props: DetailsProps) => {
  const detailsProps = {
    className: classNames('accordion'),
    open: props.open,
  }

  const summaryProps = {
    className: classNames('accordion__title', props.summaryClassName),
  }

  return <details {...detailsProps}>
    <summary {...summaryProps}>
      {props.title} <div className="accordion__caret">
        <Caret />
      </div>
    </summary>


    <div className="accordion__content">
      {props.children}
    </div>
  </details>
}

export default Details