import { DisableCopyComponent } from "../lib/interfaces"
import CopyWrapper from "./CopyWrapper"

const pages = [
  { name: 'All Products', href: '#', current: false },
  { name: 'Magic Tricks', href: '#', current: true },
]

interface BreadcrumbsProps extends DisableCopyComponent {
  excludeHomeLink?: boolean,
  pages?: { name: string, href: string, current?: boolean }[]
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
  const breadcrumbs = props.pages.length ? props.pages : pages;

  return <CopyWrapper disableCopy={props.disableCopy}>
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol role="list" className="breadcrumb__list">
        {!props.excludeHomeLink &&
          <li className="breadcrumb__item">
            <a href="#" className="breadcrumb__link">
              Home
            </a>
          </li>}
        {breadcrumbs.map((page, index) => (
          <li key={page.name} className="breadcrumb__item">
            {props.excludeHomeLink && index > 0 &&
              <svg
                className="hero__breadcrumb__delimiter"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
              </svg>}
            <a
              href={page.href}
              className="breadcrumb__link"
              aria-current={page.current ? 'page' : undefined}
            >
              {page.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  </CopyWrapper>
}

export default Breadcrumbs