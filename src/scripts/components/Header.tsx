import Brandmark from './Brandmark';
import AccountIcon from './Icons/Account.svg';
import CartIcon from './Icons/Cart.svg';
import SearchIcon from './Icons/Search.svg';
import ScreenReaderText from './ScreenReaderText';
import { useEffect, useState, useRef } from 'preact/hooks';
import MobileNavigation from './MobileNavigation';
import { DisableCopyComponent } from '../lib/interfaces';
import SuperHeader from './SuperHeader';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock/lib/bodyScrollLock.es6';
import CopyWrapper from './CopyWrapper';

export function DropdownCaret(): JSX.Element {
  return (
    <span className="header__nav__menu__caret">
      <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 0.616577L4.5 3.61658L8 0.616577" stroke="#2B2B2B" />
      </svg>
    </span>
  )
}

const classes = {
  NAV_OPEN: 'is-mobile-nav-open'
}

interface HeaderProps extends DisableCopyComponent {
  hideSuperHeader?: boolean,
}

export default function Header(props: HeaderProps): JSX.Element {
  const headerRef = useRef<HTMLHeadElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    document.body.classList[mobileNavOpen ? 'add' : 'remove'](classes.NAV_OPEN)

    if (mobileNavOpen) {
      disableBodyScroll(mobileNavRef.current)
    } else {
      clearAllBodyScrollLocks();
    }
  }, [mobileNavOpen]);

  const elements = (
    <>
      {!props.hideSuperHeader && <SuperHeader disableCopy={props.disableCopy} />}
      <header className="bg-white header" ref={headerRef}>
        <nav className="header__nav" aria-label="Global">
          <div className="header__nav__menu">
            <ul className="header__nav__menu header__nav__menu--desktop">
              <li className='header__nav__menu__item'>
                <a href="/pages/collections-standard" className="header__nav__menu__link">
                  Magic Tricks
                  <DropdownCaret />
                </a>

                <ul className="header__nav__menu__dropdown">
                  <li className="header__nav__menu__dropdown__item">
                    <a href="/products/atom-rings" className="header__nav__menu__dropdown__link">Atom Rings</a>
                  </li>

                  <li className="header__nav__menu__dropdown__item">
                    <a href="/products/atom-rings" className="header__nav__menu__dropdown__link">Product 2</a>
                  </li>

                  <li className="header__nav__menu__dropdown__item">
                    <a href="/products/atom-rings" className="header__nav__menu__dropdown__link">Product 3</a>
                  </li>
                </ul>

              </li>
              <li className="header__nav__menu__item">
                <a href="/pages/collections" className="header__nav__menu__link">Books &amp; Digital</a>
              </li>
              <li className="header__nav__menu__item">
                <a href="/pages/collections" className="header__nav__menu__link">Playing Cards</a>
              </li>

            </ul>

            <div className="header__nav__menu-toggle">
              <button type="button" className="header__nav__menu-toggle-button"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <span className="sr-only">Open main menu</span>

                <svg width="16" height="12" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.83374H16V0.83374H0V2.83374ZM0 11.8337H16V9.83374H0V11.8337Z" />
                </svg>
              </button>
            </div>
          </div>
          <a href="/" className="header__logo">
            <ScreenReaderText text="Murphy's Magic" />
            <Brandmark />
          </a>
          <div className="header__actions">

            <ul className="header__nav__menu header__nav__menu--actions header__nav__menu--desktop">
              <li className='header__nav__menu__item'>
                <a href="/products/atom-rings" className="header__nav__menu__link">Brands</a>
              </li>

              <li className="header__nav__menu__item">
                <a href="#" className="header__nav__menu__link">Latest</a>
              </li>

            </ul>

            <button type="button" className='header__actions__action header__actions__action--desktop-only'>
              <ScreenReaderText text='Search' />

              <SearchIcon />
            </button>

            <a href="/pages/account-overview" className="header__actions__action header__actions__action--desktop-only">
              <ScreenReaderText text='Account' />
              <AccountIcon />
            </a>

            <a href="/pages/cart" className="header__actions__action">
              <ScreenReaderText text='Cart' />
              <CartIcon />
            </a>
          </div>
        </nav>
      </header >

      <MobileNavigation ref={mobileNavRef} closeButtonClick={() => setMobileNavOpen(false)} />
    </>
  )

  return <CopyWrapper disableCopy={props.disableCopy}>{elements}</CopyWrapper>
}