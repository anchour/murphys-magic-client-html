import SearchIcon from "./Icons/Search.svg";

export default function MobileSearchForm() {
  return (
    <form method="get" action="" className="relative block w-full mobile-search-form">
      <label htmlFor="mobile-search-term" className="sr-only">Search</label>
      <input id="mobile-search-term" type="search" name="s" placeholder="Search" className="block w-full pl-12 text-base bg-white rounded-full text-smoke h-11 mobile-search-form__input" />

      <button type="submit" className="mobile-search-form__button absolute left-0 top-1/2 w-11 h-11 p-3 -mt-[1.375rem]">
        <span className="sr-only">Search</span>
        <SearchIcon />
      </button>
    </form>
  )
}