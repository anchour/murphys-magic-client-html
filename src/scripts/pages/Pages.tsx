import pagesData from '../data/pages.json';
interface PagesProps {
}

const Pages = (props: PagesProps) => {
  return <div className="flex justify-center p-4 text-lg">
    <ul>
      {
        pagesData.map(page => (
          <li>
            <a className="underline decoration-slate-400" href={page.href} dangerouslySetInnerHTML={{ __html: page.title }} />
          </li>
        ))
      }
    </ul>
  </div >
}

export default Pages