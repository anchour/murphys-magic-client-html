interface PagesProps {
}

const Pages = (props: PagesProps) => {
  return <div className="flex justify-center p-4 text-lg">
    <ul>
      <li>
        <a className="underline decoration-slate-400" href="/pages/become-a-dealer/">Become A Dealer</a>
      </li>

      <li>
        <a className="underline decoration-slate-400" href="/pages/contact/">Contact</a>
      </li>

      <li>
        <a className="underline decoration-slate-400" href="/pages/collections-standard/">Collections (Standard)</a>
      </li>

      <li>
        <a className="underline decoration-slate-400" href="/pages/collections/">Collections</a>
      </li>

      <li>
        <a className="underline decoration-slate-400" href="/pages/account-overview/">Account &raquo; Overview</a>
      </li>

      <li>
        <a className="underline decoration-slate-400" href="/pages/account-orders/">Account &raquo; Orders</a>
      </li>

      <li>
        <a className="underline decoration-slate-400" href="/products/atom-rings/">Product page</a>
      </li>
    </ul>
  </div >
}

export default Pages