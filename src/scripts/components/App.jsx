import Router from 'preact-router';
import Home from '../pages/Home.jsx';
import Components from '../pages/Components.jsx';
import { useState } from 'preact/hooks';

export function App() {
  const [navOpen, setNavOpen] = useState(false)

  function MenuToggle({ invertColors = false, extraClasses = null, status = null, children }) {
    let className = 'absolute px-4 py-2 font-semibold tracking-wider uppercase transition-all rounded-full shadow-md appearance-none hover:shadow-lg focus:shadow-lg top-4 left-4'

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
    <div className='pt-[76px]'>
      <MenuToggle status={true}>Open Menu</MenuToggle>

      {navOpen &&
        <nav className='absolute top-0 left-0 flex flex-col flex-wrap w-full p-4 pt-24 space-x-3 text-white sm:items-center sm:justify-center sm:py-6 sm:flex-row bg-water'>
          <MenuToggle extraClasses={'sm:top-1/2 sm:transform sm:-translate-y-1/2'} invertColors={true} status={false}>Close Menu</MenuToggle>

          <a href="/" className='inline-block text-lg '>
            Home
          </a>

          <a href="/components/" className='inline-block text-lg '>
            Components
          </a>
        </nav>
      }

      <Router>
        <Home path="/" />
        <Components path="/components/" />
      </Router>
    </div>
  </>
}