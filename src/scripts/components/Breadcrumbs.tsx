const pages = [
  { name: 'All Products', href: '#', current: false },
  { name: 'Magic Tricks', href: '#', current: true },
]

interface BreadcrumbsProps {
  excludeHomeLink?: boolean
}

const Breadcrumbs = ({ excludeHomeLink = false }: BreadcrumbsProps) => {
  return <>
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        {!excludeHomeLink &&
          <li>
            <div>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                Home
              </a>
            </div>
          </li>}
        {pages.map((page, index) => (
          <li key={page.name}>
            <div className="breadcrumb__item">
              {excludeHomeLink && index > 0 &&
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
                className=""
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  </>
}

export default Breadcrumbs