import Router from 'preact-router';
import Home from '../pages/Home';
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
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

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
    <div className='relative'>

      {!navOpen &&
        <MenuToggle extraClasses={'ml-4 mt-4 mb-4'} status={true}><Bars3Icon /></MenuToggle>}

      {navOpen &&
        <div className='relative'>
          <MenuToggle invertColors={true} status={false} extraClasses={'absolute left-4 top-4'}><XMarkIcon /></MenuToggle>
          <nav className='flex flex-col flex-wrap w-full p-4 pt-20 text-white sm:space-x-3 sm:items-center sm:justify-center sm:py-6 sm:flex-row bg-water'>

            <a href="/components/" className='inline-block py-1 pl-0 text-2xl font-semibold'>
              Components
            </a>

            <a href="/layouts/" className='inline-block py-1 pl-0 text-2xl font-semibold'>
              Layouts
            </a>

            <a href="/pages/" className='inline-block py-1 pl-0 text-2xl font-semibold'>
              Pages
            </a>
          </nav>
        </div>
      }
    </div>

    <Router>
      <Home path="/" />
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
    </Router>
  </>
}