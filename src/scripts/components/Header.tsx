import Brandmark from './Brandmark';
import AccountIcon from './Icons/Account.svg';
import CartIcon from './Icons/Cart.svg';
import SearchIcon from './Icons/Search.svg';
import ScreenReaderText from './ScreenReaderText';
import { useEffect, useState, useRef } from 'preact/hooks';
import CopyComponent from './CopyComponent';
import MobileNavigation from './MobileNavigation';
import { DisableCopyComponent } from '../lib/interfaces';
import SuperHeader from './SuperHeader';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock/lib/bodyScrollLock.es6';

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
          <div className="flex flex-1 header__nav__menu">
            <ul className="header__nav__menu header__nav__menu--desktop">
              <li className="header__nav__menu__item">

                <a href="#" className="header__nav__menu__link">Product
                  <DropdownCaret />
                </a>

                <ul className="header__nav__menu__dropdown">
                  <li className="header__nav__menu__dropdown__item">
                    <a href="#" className="header__nav__menu__dropdown__link">Product 1</a>
                  </li>
                  <li className="header__nav__menu__dropdown__item">
                    <a href="#" className="header__nav__menu__dropdown__link">Product 2</a>

                  </li>
                  <li className="header__nav__menu__dropdown__item">
                    <a href="#" className="header__nav__menu__dropdown__link">Product 3</a>
                  </li>
                </ul>

              </li>
              <li className="header__nav__menu__item">
                <a href="#" className="header__nav__menu__link">Features</a>
              </li>
              <li className="header__nav__menu__item">
                <a href="#" className="header__nav__menu__link">Company</a>
              </li>

            </ul>

            <div className="flex header__nav__menu-toggle lg:hidden">
              <button type="button" className="header__nav__menu-toggle-button -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <span className="sr-only">Open main menu</span>

                <svg width="16" height="12" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.83374H16V0.83374H0V2.83374ZM0 11.8337H16V9.83374H0V11.8337Z" />
                </svg>
              </button>
            </div>
          </div>
          <a href="/" className="header__logo -m-1.5 p-1.5">
            <ScreenReaderText text="Murphy's Magic" />
            <Brandmark />
          </a>
          <div className="flex justify-end flex-1 header__actions">
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

        <div className="header__mobile-menu lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10 header__mobile-menu--backdrop"></div>

          <div className="fixed inset-y-0 left-0 z-10 w-full px-6 py-6 overflow-y-auto bg-white header__mobile-menu--content">
            <div className="flex items-center justify-between header__mobile-menu--header">
              <div className="flex flex-1 header__mobile-menu--header--menu-button">
                <button type="button" className="header__mobile-menu--header--menu-button__button -m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Close menu</span>
                  <svg className="w-6 h-6 header__mobile-menu--header--menu-button__button-icon" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <a href="#" className="header__mobile-menu--header--logo -m-1.5 p-1.5">
                <ScreenReaderText text="Murphy's Magic" />
                <Brandmark />
              </a>
              <div className="flex justify-end flex-1 header__mobile-menu--header--user">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 header__mobile-menu--header--user-login">Log in <span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
            <div className="mt-6 space-y-2 header__mobile-menu--links">
              <a href="#" className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg header__mobile-menu--links-item hover:bg-gray-50">Product</a>
              <a href="#" className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg header__mobile-menu--links-item hover:bg-gray-50">Features</a>
              <a href="#" className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg header__mobile-menu--links-item hover:bg-gray-50">Company</a>
            </div>
          </div>
        </div>
      </header >

      <MobileNavigation ref={mobileNavRef} closeButtonClick={() => setMobileNavOpen(false)} />
    </>
  )

  return props.disableCopy ? elements : (
    <div className="relative group">
      <CopyComponent onClick={() => navigator.clipboard.writeText(headerRef.current?.outerHTML)} />

      {elements}
    </div>
  )
}