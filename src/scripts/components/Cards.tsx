import { Tag } from "./Tags"

export function CardTags({ tags }: { tags: string[] }) {
  return (
    <div className="card__tags">
      {tags.map(tag => <Tag key={tag} variant='label'>{tag}</Tag>)}
    </div>
  )
}


export function Card({ showTags = false }: { showTags?: boolean }) {
  return <a href="#" className="card"

  >
    <div className="card__thumbnail">
      <img src="https://source.unsplash.com/random/300x300" loading="lazy" width={300} height={300} role="presentation" />
    </div>

    <div className="card__content">
      <h3 className="card__title">Card title</h3>
      <p className="card__description">Card description</p>
    </div>


    {showTags && <CardTags tags={['Type', 'Skill Level']} />}

  </a>
}

export default function Cards() {
  return <>
  </>
}