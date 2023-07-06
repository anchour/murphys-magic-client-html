import Router from 'preact-router';
import Home from '../pages/Home';
import HomeLoggedIn from '../pages/HomeLoggedIn';
import Components from '../pages/Components';
import Pages from '../pages/Pages';
import Layouts from '../pages/Layouts';
import { useState } from 'preact/hooks';
import BecomeADealer from '../pages/BecomeADealer';
import CollectionsStandard from '../pages/CollectionsStandard';
import Collections from '../pages/Collections';
import AccountOverview from '../pages/AccountOverview';
import Contact from '../pages/Contact';
import AccountOrders from '../pages/AccountOrders';
import Cart from '../pages/Cart';
import ProductPage from '../pages/ProductPage';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import pagesData from '../data/pages.json'
import stubData from '../data/stubs.json'

export function App() {
  const [navOpen, setNavOpen] = useState(false)

  function MenuToggle({ invertColors = false, extraClasses = null, status = null, children }) {
    let className = 'w-12 h-12 p-2 font-semibold tracking-wider uppercase transition-all rounded-full shadow-md appearance-none hover:shadow-lg focus:shadow-lg'

    if (invertColors === true) {
      className += ' bg-white text-water'
    } else {
      className += ' bg-water text-white'
    }

    if (extraClasses) {
      className += ' ' + extraClasses
    }

    return <button
      className={className}
      onClick={() => {
        setNavOpen(status ? status : !navOpen)
      }}
    >{children}</button>
  }

  return <>
    {!navOpen &&
      <div className="min-h-[88px]" style={{ display: 'none' }}><MenuToggle extraClasses={'ml-4 mt-4 mb-4'} status><Bars3Icon /></MenuToggle></div>}

    {navOpen &&
      <div className='relative z-[1000] min-h-[88px]'>
        <MenuToggle invertColors status={false} extraClasses={'absolute left-4 top-4'}><XMarkIcon /></MenuToggle>
        <nav className='w-full p-4 pt-20 text-white sm:py-6 bg-water'>
          <ul className='flex flex-col flex-wrap sm:space-x-3 sm:items-center sm:justify-center sm:flex-row'>
            <li className='relative'>
              <a href="/components/" className='inline-block py-1 pl-0 text-2xl font-semibold'>
                Components
              </a>
            </li>

            <li className='relative'>
              <a href="/layouts/" className='inline-block py-1 pl-0 text-2xl font-semibold'>
                Layouts
              </a>
            </li>

            <li className='relative group'>

              <a href="/pages/" className='inline-block py-1 pl-0 text-2xl font-semibold group'>
                Pages

                <ul className='absolute left-0 p-4 pr-24 text-base font-normal rounded shadow opacity-0 pointer-events-none top-full bg-primary-dove color-secondary-water whitespace-nowrap group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto'>

                  {
                    pagesData.map(page => (
                      <li>
                        <a className="underline text-slate-500 hover:text-water focus:text-water decoration-slate-400" href={page.href} dangerouslySetInnerHTML={{ __html: page.title }} />
                      </li>
                    ))
                  }

                </ul>
              </a>
            </li>

            <li className='relative group'>
              <span className='inline-block py-1 pl-0 text-2xl font-semibold group'>
                Stubs

                <ul className='absolute left-0 p-4 pr-24 text-base font-normal rounded shadow opacity-0 pointer-events-none top-full bg-primary-dove color-secondary-water whitespace-nowrap group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto'>

                  {
                    stubData.map(page => {
                      let href = page.href

                      if (!href.includes('/index.html')) {
                        href += '/index.html'
                      }

                      return (
                        <li>
                          <a
                            className="underline text-slate-500 hover:text-water focus:text-water decoration-slate-400"
                            data-native
                            href={href}
                            dangerouslySetInnerHTML={{ __html: page.title }}
                          />
                        </li>
                      )
                    })
                  }

                </ul>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    }

    <Router>
      <Home path="/" />
      <HomeLoggedIn path="/pages/home-logged-in" />
      <Layouts path="/layouts/" />
      <Components path="/components/" />
      <Pages path="/pages/" />
      <BecomeADealer path="/pages/become-a-dealer" />
      <CollectionsStandard path="/pages/collections-standard" />
      <Collections path="/pages/collections" />
      <AccountOverview path="/pages/account-overview" />
      <Contact path="/pages/contact" />
      <AccountOrders path="/pages/account-orders" />
      <Cart path="/pages/cart" />
      <ProductPage path="/products/atom-rings" />
    </Router>
  </>
}