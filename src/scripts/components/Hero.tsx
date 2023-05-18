
import LightHeroBG from './CollectionHeroBG.svg.tsx';
import DarkHeroBG from '../../images/hero--dark-background.jpg';

interface HeroProps {
  title?: string, breadcrumbs?: null | JSX.Element, description?: string, style?: string
}

const Hero = ({ title = "Murphy's Magic", breadcrumbs = null, description = "Where the fun comes free", style="light" }: HeroProps) => {
  return <>
    <section className={'hero hero--page hero--' + style}>
      <div className="hero__inner">

        <div className="hero__background">
          {style === "dark" ?
            <img className="hero__background--image" src={DarkHeroBG} alt="Become a Dealer" width={1729} height={973} loading='lazy' />
           : 
           <LightHeroBG />}
        </div>
        
        <div className="container">
          <h1 className="hero__title typography-heading typography-heading-lg">
            {title}
          </h1>

          {
            breadcrumbs &&
            <div className="hero__breadcrumbs">
              {breadcrumbs}
            </div>
          }

          {description && <p className="hero__description typography-body-md"> {description} </p>}
        </div>
      </div>
    </section>
  </>
}
export default Hero