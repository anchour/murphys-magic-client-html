import { Tag } from "./Tags"
import CollectionHeroBG from './CollectionHeroBG.svg.tsx'

interface CollectionHeroProps {
  title?: string, breadcrumbs?: null | JSX.Element, description?: string
}

const tags = [
  'Card Magic', 'Close Up Magic', 'Mentalism', 'Street', 'Stage',
  'Card Magic', 'Close Up Magic', 'Mentalism', 'Street', 'Stage',
]

const CollectionHero = ({ title = 'Magic Tricks', breadcrumbs = null, description = 'Wizardry at your fingertips' }: CollectionHeroProps) => {
  return <>
    <section className="hero hero--collection">
      <div className="hero__background">
        <CollectionHeroBG />
      </div>
      <div className="container">
        <h1 className="hero__title typography-heading-lg">
          {title}
        </h1>

        {
          breadcrumbs &&
          <div className="hero__breadcrumbs">
            {breadcrumbs}
          </div>
        }

        {description && <p className="hero__description typography-body-md"> {description} </p>}

        <ul className="hero__tags">

          {tags.map(tag =>
            <li key={tag} className="hero__tag">
              <Tag variant='lg has-thumbnail' href="#">
                <div className="tag__thumbnail">
                  <img src='https://picsum.photos/300/300' loading="lazy" width={150} height={150} role="presentation" />
                </div>

                {tag}
              </Tag >
            </li>
          )}


        </ul>
      </div>
    </section>
  </>
}
export default CollectionHero