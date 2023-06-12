import classNames from 'classnames';
import Placeholder from '../../images/placeholder--split.jpg';
import BeginnerFriendlyIcon from '../../images/icons/BeginnerFriendly.svg';
interface TextImageSplitProps extends DisableCopyComponent {
  order?: 'content-first' | 'image-first'
  title?: string,
  description?: JSX.Element | JSX.Element[],
  buttons?: JSX.Element | JSX.Element[],
}

export default function TextImageSplit(props: TextImageSplitProps) {
  const sectionProps = {
    className: classNames('text-image-split', `text-image-split--${order}`, 'bg-background-bone', 'color-primary-smoke'),
  }

  let {
    title = 'THE MAGIC OF ANVERDI',
    description,
    buttons,
  } = props;

  if (!description) {
    description = (
      <p className="typography-body-sm">
        The extraordinary Tony Anverdi changed the magic industry decades ago, and his secrets were well hidden.Until now.Peek behind the curtain, and indulge yourself in all of Anverdi’s curious pleasures.
      </p >
    )
  }

  if (!buttons) {
    buttons = (
      <a href="#" className="btn btn--secondary">
        See Anverdi&rsquo;s Magic
      </a>
    )
  }

  return (
    <section {...sectionProps}>
      <div className="container">

        <div className="text-image-split__content">

          <h2 className="typography-h2">
            {title}
          </h2>

          <div className="rte">
            {description}
          </div>

          <div className="actions">
            {buttons}
          </div>

        </div>
        <div className="text-image-split__image">
          <div className="text-image-split__image-tag bg-secondary-water color-primary-dove typography-heading-xs">
            <div className="text-image-split__image-tag__inner">
              <span className="text-image-split__image-tag__decoration">
                <BeginnerFriendlyIcon />
              </span>

              <span className="text-image-split__image-tag__text">
                BEGINNER FRIENDLY
              </span>
            </div>
          </div>
          <img src={Placeholder} alt="Anverdi Book" width={1789} height={1289} loading='lazy' />
        </div>

      </div>
    </section>
  )
}