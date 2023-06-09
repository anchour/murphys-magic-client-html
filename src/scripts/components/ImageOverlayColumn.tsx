import { LoremIpsum } from "lorem-ipsum"

interface ImageOverlayProps {
  title?: string;
  description?: string;
  hasCTA?: boolean;
  headingLevel?: string;
  buttonText?: string;
}

const lipsum = new LoremIpsum()

const ImageOverlay = ({
  title = "Murphy's Magic",
  description = lipsum.generateParagraphs(1),
  hasCTA = true,
  headingLevel = "h3",
  buttonText = "Button text",
}: ImageOverlayProps) => {
  const HeadingTag = headingLevel as keyof JSX.IntrinsicElements;

  return (
    <>
      <div className="image-overlay__column">
        <div className="column__background">
          <img
            src="https://picsum.photos/860/475"
            loading="lazy"
            width={860}
            height={475}
            role="presentation"
            alt=""
            className="column__background--image"
          />
          <div className="column__background--overlay"></div>
        </div>

        <div className="column__content">
          <div className="column__content--wrap">
            <HeadingTag className="typography-heading typography-heading-lg">
              {title}
            </HeadingTag>

            {description && (
              <p className="column__description typography-body-sm"> {description} </p>
            )}

            {hasCTA && (
              <div className="actions">
                <a href="#" className={"btn btn--primary"}>
                  {buttonText}
                  <span className="btn__icon">
                    <svg
                      width="19"
                      height="15"
                      viewBox="0 0 19 15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.27 6.63C16.62 6.63 15.18 5.68 13.99 3.8C13.5 3.02 13.15 2.23 12.95 1.71C12.84 1.42 12.76 1.19 12.71 1.02L12.56 0.5L11.6 0.75C11.53 0.77 10.93 0.94 10.93 0.94L10.64 1.02L10.82 1.62C10.88 1.82 10.97 2.09 11.1 2.42C11.33 3.02 11.73 3.94 12.31 4.86C12.74 5.54 13.21 6.13 13.71 6.63H0V8.61H13.72C13.21 9.11 12.74 9.71 12.32 10.38C11.74 11.3 11.34 12.21 11.11 12.82C10.98 13.15 10.89 13.43 10.83 13.62L10.66 14.2L10.94 14.29C10.94 14.29 11.53 14.47 11.62 14.5L12.29 14.67L12.59 14.69L12.73 14.22C12.78 14.06 12.86 13.82 12.97 13.53C13.17 13.01 13.51 12.22 14.01 11.44C15.2 9.56 16.63 8.61 18.29 8.61H18.59V6.63H18.29H18.27Z"></path>
                    </svg>
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ImageOverlay;
