import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid'

export default function Pagination() {
  return (
    <nav className="pagination">
      <div className="pagination__nav pagination__nav--prev">
        <a
          href="#"
          className="pagination__link"
        >
          <ArrowLongLeftIcon className="pagination__link-icon" aria-hidden="true" />
          Previous
        </a>
      </div>
      <div className="pagination__numbers">
        <a
          href="#"
          className="pagination__link"
        >
          1
        </a>
        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
        <a
          href="#"
          className="pagination__link pagination__link--current"
          aria-current="page"
        >
          2
        </a>
        <a
          href="#"
          className="pagination__link"
        >
          3
        </a>
        <span className="inline-flex items-center px-4 pt-4 text-sm font-medium text-gray-500 border-t-2 border-transparent">
          ...
        </span>
        <a
          href="#"
          className="pagination__link"
        >
          8
        </a>
        <a
          href="#"
          className="pagination__link"
        >
          9
        </a>
        <a
          href="#"
          className="pagination__link"
        >
          10
        </a>
      </div>
      <div className="pagination__nav pagination__nav--next">
        <a
          href="#"
          className="pagination__link"
        >
          Next
          <ArrowLongRightIcon className="pagination__link-icon" aria-hidden="true" />
        </a>
      </div>
    </nav>
  )
}
