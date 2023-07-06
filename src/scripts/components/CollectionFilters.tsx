import slugify from 'slugify'
import Details from './Details'
import CopyWrapper from './CopyWrapper'
import { DisableCopyComponent } from '../lib/interfaces'

const filters = [
  {
    type: 'Product Type',
    options: [
      { name: 'Cards', value: 'card-tricks' },
      { name: 'Vanishing', value: 'vanishing-tricks' },
      { name: 'Infinity Watch', value: 'infinity-watch' },
    ]
  },
  {
    type: 'Price Range', options: [
      { name: 'Under $10', value: 'under-10' },
      { name: '$10 - $20', value: '10-20' },
      { name: '$20 - $30', value: '20-30' },
      { name: '$30 - $40', value: '30-40' },
      { name: '$40 - $50', value: '40-50' },
    ]
  },
  {
    type: 'Skill Level',
    options: [
      { name: 'Beginner', value: 'beginner' },
      { name: 'Intermediate', value: 'intermediate' },
      { name: 'Advanced', value: 'advanced' },
      { name: 'Expert', value: 'expert' },
    ]
  },
  {
    type: 'Elite Brands',
    options: [
      { name: 'Cherry Casino', value: 'cherry-casino' },
      { name: 'Black Label', value: 'black-label' },
      { name: 'Secret Tannery', value: 'seceret-tannery' },
      { name: 'Vanish', value: 'vanish' },
    ]
  }
]

interface CollectionFilterProps extends DisableCopyComponent { }

export default function (props: CollectionFilterProps) {
  const renderedFilters = filters.map(({ type, options }, index) => (
    <div key={index} className="collection-filters__filter">
      <label htmlFor={slugify(type)} className="sr-only">{type}</label>
      <select id={slugify(type)} className="form-control">
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  ))

  return (
    <CopyWrapper disableCopy={props.disableCopy}>
      <div className="container">
        <Details
          className="collection-filters collection-filters--mobile"
          summaryElement={
            <button type="button" aria-pressed="false" className="collection-filter-toggle btn btn--primary">
              Filter
            </button>
          }
        >
          <h2 className="collection-filter-label typography-heading typography-heading-xs"> Filter By</h2>

          <div className="collection-filters__wrap">
            {renderedFilters}
          </div>
        </Details>

        <div className="collection-filters collection-filters--desktop">
          {renderedFilters}
        </div>
      </div>
    </CopyWrapper>
  )
}