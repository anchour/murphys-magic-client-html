interface TextCalloutProps {
  text?: string,
  children: JSX.Element | null,
  buttonUrl: string,
  buttonText: string,
}

const TextCallout = (props: TextCalloutProps): JSX.Element => {

  return <section className="text-callout bg-primary-bone">

    <div className="container">
      <div className="text-callout__content">
        <div className="text-callout__text">
          <h2 className="typography-quote">{props.text || 'Help make the world a little more wondrous.'}</h2>
        </div>

        <div className="text-callout__button">

          {
            props.buttonUrl &&
            <a href={props.buttonUrl} className="btn btn--secondary btn--lg">
              {props.buttonText ? props.buttonText : 'Learn More'}
            </a>
          }

        </div>

        <div className="text-callout__benefits">

          <div>
            <h3 className="text-callout__benefit-title typography-body-lg">Earn Customers</h3>
            <p className="typography-body-sm">We give our dealers the products needed to grow their customer base, while intriguing the world.</p>
          </div>

          <div>

            <h3 className="text-callout__benefit-title typography-body-lg">Create Value</h3>
            <p className="typography-body-sm">Murphy’s always looks to help our Dealers create value. We’re looking for partners ready to grow, together.</p>
          </div>

        </div>
      </div>

      <div className="text-callout__image">
        <img src="https://picsum.photos/600/600" loading="lazy" width={600} height={600} role="presentation" alt="" />
      </div>
    </div>
  </section>
}

export default TextCallout