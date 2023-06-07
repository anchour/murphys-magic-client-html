import classnames from "classnames";
import SVGViewer from "./SVGViewer";
import LightHeroBG from "./CollectionHeroBG.svg.tsx";
import DarkHeroBG from "../../images/hero--dark-background.jpg";
import LeftAlignedBG from "../../images/hero--left-aligned-background.jpg";
import Placeholder from "../../images/icons/ico-placeholder.svg";
import classNames from "classnames";

interface HeroProps {
  title?: string;
  breadcrumbs?: null | JSX.Element;
  description?: string;
  style?: 'light' | 'dark';
  alignment?: 'left' | 'center';
  hasCTA?: boolean;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  buttonText?: string;
  hasBackground?: boolean;
  hasBrandElement?: boolean;
  brandElement?: string;
  mobileLayout?: 'stacked' | 'overlay';
  mobileImage?: JSX.Element;
  image?: JSX.Element;
  children?: JSX.Element | JSX.Element[];
  buttons?: JSX.Element | JSX.Element[];
  tags?: JSX.Element | JSX.Element[];
}

const Hero = ({
  title = "Murphy's Magic",
  breadcrumbs = null,
  description = "Where the fun comes free",
  style = "light",
  alignment = "center",
  hasCTA = false,
  headingLevel = "h1",
  buttonText = "Button text",
  hasBackground = false,
  hasBrandElement = false,
  brandElement = Placeholder,
  mobileLayout = 'overlay',
  image = null,
  mobileImage,
  buttons,
  children,
  tags,
}: HeroProps) => {
  const HeadingTag = headingLevel as keyof JSX.IntrinsicElements;

  function BackgroundImage() {
    let BGImage = null;

    if (hasBackground) {
      if (style === "dark" || alignment === "left") {
        let bgProps: React.ImgHTMLAttributes<HTMLImageElement> = {
          className: "hero__background--image",
          src: DarkHeroBG,
          alt: "Become a Dealer",
          width: 1729,
          height: 973,
          loading: "lazy",
        };

        if (alignment === "left") {
          bgProps.src = LeftAlignedBG;
          bgProps.alt = "Bridging ordinary";
        }

        BGImage = <img {...bgProps} />;
      } else {
        BGImage = <LightHeroBG />;
      }
    }

    // If an image is passed in, use that instead of the background
    if (image) {
      BGImage = image
    }

    return BGImage
  }

  const heroProps = {
    className: classnames("hero hero--page",
      `hero--mobile-${mobileLayout}`,
      {
        [`hero--${style}`]: style,
        [`hero--align-${alignment}`]: alignment,
      }
    )
  }

  return (
    <>
      <section {...heroProps}>
        <div className="hero__inner">
          {hasBackground &&
            <div className={classNames('hero__background', { 'hero__background--desktop': mobileImage })}><BackgroundImage /></div>
          }

          {mobileImage && (
            <div className="hero__background hero__background--mobile">{mobileImage}</div>
          )}

          {alignment === "left" && hasBrandElement &&
            <SVGViewer
              svgClass={"hero__brand-element"}
              filePath={brandElement ? brandElement : Placeholder}
            />
          }

          <div className="container">
            {alignment === "center" && hasBrandElement &&
              <SVGViewer
                svgClass={"hero__brand-element"}
                filePath={brandElement ? brandElement : Placeholder}
              />
            }

            <div className="hero__content">
              {tags}

              <div>
                <HeadingTag className="hero__title typography-heading typography-heading-lg">
                  {title}
                </HeadingTag>

                {breadcrumbs && (
                  <div className="hero__breadcrumbs">{breadcrumbs}</div>
                )}

                {description && (
                  <p className="hero__description"> {description} </p>
                )}
              </div>

              {hasCTA || buttons && (
                <div className="actions">
                  {buttons}
                  {hasCTA && (
                    <a href="#" className={"btn btn--secondary btn--" + style}>
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
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {children}
      </section>
    </>
  );
};
export default Hero;
