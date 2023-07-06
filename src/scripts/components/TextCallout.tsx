import { DisableCopyComponent } from "../lib/interfaces";
import CopyWrapper from "./CopyWrapper";

interface TextCalloutProps extends DisableCopyComponent {
  text?: string;
  buttonUrl?: string;
  buttonText?: string;
  showBenefits?: boolean,
  graphic?: JSX.Element | JSX.Element[];
}

const TextCallout = ({
  text = 'Help make the world a little more wondrous.',
  buttonUrl = '#',
  buttonText = "Apply Now",
  showBenefits = true,
  graphic = null,
  ...props
}: TextCalloutProps): JSX.Element => {

  return <CopyWrapper disableCopy={props.disableCopy} copyButtonText="Text callout">
    <section className="text-callout bg-primary-bone">
      <div className="container">
        {graphic && <div className="text-callout__graphic">{graphic}</div>}

        <div className="text-callout__content">
          <div className="text-callout__text">
            <h2 className="typography-quote">{text}</h2>
          </div>

          <div className="text-callout__button">

            {
              buttonUrl &&
              <a href={buttonUrl} className="btn btn--secondary btn--lg">
                {buttonText ? buttonText : 'Learn More'}
              </a>
            }

          </div>

          {showBenefits && (
            <div className="text-callout__benefits">
              <div>
                <h3 className="text-callout__benefit-title typography-body-lg">Earn Customers</h3>
                <p className="typography-body-sm">We give our dealers the products needed to grow their customer base, while intriguing the world.</p>
              </div>

              <div>

                <h3 className="text-callout__benefit-title typography-body-lg">Create Value</h3>
                <p className="typography-body-sm">Murphy&rsquo;s always looks to help our Dealers create value. We&rsquo;re looking for partners ready to grow, together.</p>
              </div>
            </div>
          )}
        </div>

        <div className="text-callout__image">
          <img src="https://picsum.photos/600/600" loading="lazy" width={600} height={600} role="presentation" alt="" />
        </div>
      </div>
    </section>
  </CopyWrapper>
}

export default TextCallout