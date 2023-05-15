import { useRef } from "preact/hooks"
import { Tag } from "./Tags"
import CopyComponent from "./CopyComponent"

export function CardTags({ tags }: { tags: string[] }) {
  return (
    <div className="card__tags">
      {tags.map(tag => <Tag component="div" key={tag} variant='simple invert' disableCopy={true}>{tag}</Tag>)}
    </div>
  )
}

export function Card({ showTags = false, cardTags = null }: { showTags?: boolean, cardTags?: any }) {
  const ref = useRef(null)

  return <div className="relative group" ref={ref}>
    <a href="#" className="card">
      <div className="card__thumbnail">
        {cardTags && <div className="card__image-tags">{cardTags}</div>}

        <img src="https://source.unsplash.com/random/300x300" loading="lazy" width={300} height={300} role="presentation" />
      </div>

      <div className="card__content">
        <h3 className="card__title typography-body-lg">Card title</h3>
        <p className="card__description">Card description</p>

        {/* Card prices */}
        <div className="flex space-x-3 card__price typography-body-sm">
          <span className="color-secondary-light">
            Wholesale $19.99
          </span>

          <span aria-hidden role="presentation">|</span>

          <span>
            Retail $29.99
          </span>
        </div>

        {showTags && <CardTags tags={['Type', 'Skill Level']} />}
      </div>
    </a>

    <CopyComponent onClick={() => { navigator.clipboard.writeText(ref.current?.querySelector('a').outerHTML) }} />
  </div>
}

export default function Cards() {
  return <>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <Card cardTags={<Tag variant="label secondary" disableCopy={true}>New</Tag>} showTags={true} />

      <Card showTags={true} />
    </div >
  </>
}