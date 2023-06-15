import BrandmarkStacked from "./BrandmarkStacked"
import Facebook from "./Icons/Facebook";
import Instagram from "./Icons/Instagram";
import Tiktok from "./Icons/Tiktok";
import Twitter from "./Icons/Twitter";
import YouTube from "./Icons/YouTube";
import { AsteriskVector } from "./Tags"
import Button from './Button';

interface FooterProps {
}

const FooterColumn = ({ children, title = null }) => {
  return children ? <details className="footer__navigation__column" open>
    <summary className="typography-heading-xs footer-navigation__header footer-navigation__header--mobile"> {title} </summary>

    <div className="footer__navigation__column-content">
      <p className="typography-heading-xs footer-navigation__header footer-navigation__header--desktop"> {title} </p>

      {children}
    </div>
  </details> : null
}

const marqueeText = ['MAGIC TRICKS', 'BOOKS &amp; DIGITAL', 'PLAYING CARDS']

const Footer = (props: FooterProps) => {
  const delimiter = <AsteriskVector fill="var(--color-secondary-light)" />;

  return <footer className="footer bg-primary-smoke color-primary-bone">
    <div className="footer__marquee-outer">
      <div className="footer__marquee" aria-hidden role="presentation">
        <div className="footer__marquee-slide">
          {[...marqueeText, ...marqueeText, ...marqueeText].map(s => <><AsteriskVector fill="var(--color-secondary-light)" /><span className="footer__marquee-item" dangerouslySetInnerHTML={{ __html: s }} /></>)}
        </div>

        <div className="footer__marquee-slide">
          {[...marqueeText, ...marqueeText, ...marqueeText].map(s => <><AsteriskVector fill="var(--color-secondary-light)" /><span className="footer__marquee-item" dangerouslySetInnerHTML={{ __html: s }} /></>)}
        </div>
      </div>
    </div>

    <nav className="footer__navigation">
      <div className="container">
        <FooterColumn title='Discover' >
          <ul className="footer-navigation">
            <li className="footer-navigation__item">
              <a className="footer-navigation__link" href="#">Magic Tricks</a>
            </li>

            <li className="footer-navigation__item">
              <a className="footer-navigation__link" href="#">Playing Cards</a>
            </li>

            <li className="footer-navigation__item">
              <a className="footer-navigation__link" href="#">Brands</a>
            </li>

            <li className="footer-navigation__item">
              <a className="footer-navigation__link" href="#">Latest</a>
            </li>
          </ul>
        </FooterColumn>

        <FooterColumn title='Contact Us'>
          <address>
            <a href="https://goo.gl/maps/EpS6PtSjdesDdTe29" target="_blank">
              11500 Gold Dredge Way,
              <br />
              Rancho Cordova, CA 95742
            </a>
          </address>

          <p className="footer-navigation__line">
            Phone: <a href="tel:1.800.853.7403">1.800.853.7403</a>
          </p>

          <div className="footer-navigation__header typography-heading-xs">
            Follow Along
          </div>

          <ul className="social-navigation">
            <li><a href="#" title="Follow along with Murphy's Magic on Tiktok"><Tiktok /></a></li>
            <li><a href="#" title="Follow along with Murphy's Magic on Instagram"><Instagram /></a></li>
            <li><a href="#" title="Follow along with Murphy's Magic on YouTube"><YouTube /></a></li>
            <li><a href="#" title="Follow along with Murphy's Magic on Facebook"><Facebook /></a></li>
            <li><a href="#" title="Follow along with Murphy's Magic on Twitter"><Twitter /></a></li>
          </ul >
        </FooterColumn>

        <FooterColumn title='Join Us'>
          <ul className="footer-navigation">
            <li className="footer-navigation__item">
              <a className="footer-navigation__link" href="#">Submit Magic</a>
            </li>

            <li className="footer-navigation__item">
              <a className="footer-navigation__link" href="#">Become a Dealer</a>
            </li>
          </ul>
        </FooterColumn>

        <div className="footer__actions">
          <Button dark variant="secondary" disableCopy> Dealer Login</Button>
        </div>
      </div>
    </nav>

    <div className="footer__utility">
      <div className="container">
        <div className="footer__brandmark">
          <BrandmarkStacked />
        </div>

        <div className="footer__links">
          <span className="footer__links__item footer__links__item--stacked-mobile">
            &copy; {(new Date()).getFullYear()} Murphy's Magic Supplies, Inc.
          </span>

          <span className="footer__links__item footer__links__item--hidden-mobile">
            {delimiter}
          </span>

          <span className="footer__links__item">
            <a href="#" title="View our privacy policy">Privacy Policy </a>
          </span>

          <span className="footer__links__item">
            {delimiter}
          </span>

          <span className="footer__links__item">
            <a href="#" title="View our accessibility statement"> Accessibility Statement</a>
          </span>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer