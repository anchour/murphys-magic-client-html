interface PagesProps {
}

const Pages = (props: PagesProps) => {
  return <div className="flex justify-center p-4 text-lg">
    <ul>
      <li>
        <a className="underline decoration-slate-400" href="/pages/become-a-dealer/">Become A Dealer</a>
      </li>
    </ul>
  </div>
}

export default Pages