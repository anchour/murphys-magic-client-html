import { Tag } from "./Tags"
import CollectionHeroBG from './CollectionHeroBG.svg.tsx'
import { DisableCopyComponent } from "../lib/interfaces"
import CopyWrapper from "./CopyWrapper"

interface CollectionHeroProps extends DisableCopyComponent {
  title?: string, breadcrumbs?: null | JSX.Element, description?: string
}

const tags = [
  'Card Magic', 'Close Up Magic', 'Mentalism', 'Street', 'Stage',
  'Card Magic', 'Close Up Magic', 'Mentalism', 'Street', 'Stage',
]

const CollectionHero = ({ title = 'Magic Tricks', breadcrumbs = null, description = 'Wizardry at your fingertips', ...props }: CollectionHeroProps) => {
  return <CopyWrapper disableCopy={props.disableCopy} buttonText="Collection Hero">
    <section className="hero hero--collection hero--light">
      <div className="hero__inner">

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
        </div>

        <div className="hero__tags-outer container-padding-left hide-scrollbars">
          <ul className="hero__tags container-padding-right">
            {tags.map(tag =>
              <li key={tag} className="hero__tag">
                <Tag variant='lg has-thumbnail' href="#" disableCopy>
                  <div className="tag__thumbnail">
                    <img src='https://picsum.photos/300/300' loading="lazy" width={150} height={150} role="presentation" />
                  </div>

                  {tag}
                </Tag >
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  </CopyWrapper>
}
export default CollectionHero