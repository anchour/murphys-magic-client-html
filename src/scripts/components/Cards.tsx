import { useRef } from "preact/hooks"
import { Tag } from "./Tags"
import CopyComponent from "./CopyComponent"
import { DisableCopyComponent } from "../lib/interfaces"
import Button from "./Button"
import { formatMoney } from "../lib/currency"

export interface CardProps extends DisableCopyComponent {
  showTags?: boolean,
  cardTags?: any,
  title?: string,
  image?: string,
  description?: string,
  priceWholeSale?: number,
  priceRetail?: number,
  showAddToCart?: boolean,
}

export function CardTags({ tags }: { tags: string[] }) {
  return (
    <div className="card__tags">
      {tags.map(tag => <Tag component="div" key={tag} variant='simple invert' disableCopy>{tag}</Tag>)}
    </div>
  )
}

export function Card({
  showTags = false,
  cardTags = null,
  title = null,
  description = null,
  priceWholeSale = null,
  priceRetail = null,
  showAddToCart,
  disableCopy
}: CardProps) {
  const ref = useRef(null)

  const elements = (
    <a href="#" className="card">
      <div className="card__thumbnail">
        {cardTags && <div className="card__image-tags">{cardTags}</div>}

        <img src="https://source.unsplash.com/random/300x300" loading="lazy" width={300} height={300} role="presentation" />
      </div>

      <div className="card__content">
        <h3 className="card__title typography-body-lg">{title ? title : 'Card title'}</h3>
        <p className="card__description">{description ? description : 'Card description'}</p>

        {/* Card prices */}
        <div className="flex space-x-3 card__price typography-body-sm">
          {priceWholeSale && <span className="color-secondary-light">
            Wholesale {formatMoney(priceWholeSale)}
          </span>}

          {priceRetail && priceWholeSale && <span aria-hidden role="presentation">|</span>}

          {priceRetail && <span> Retail {formatMoney(priceRetail)} </span>}
        </div>

        {showTags && <CardTags tags={['Type', 'Skill Level']} />}
      </div>

      {showAddToCart &&
        <form method="post" action="/cart/add" className="card__add-to-cart">
          <Button disableCopy className="card__add-to-cart__submit" variant="primary">Add to Cart </Button>
        </form>
      }
    </a >
  );

  return disableCopy ? elements : <div className="relative group" ref={ref}>
    {elements}
    <CopyComponent onClick={() => { navigator.clipboard.writeText(ref.current?.querySelector('a').outerHTML) }} />
  </div>
}

export default function Cards() {
  return <>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <Card cardTags={<Tag variant="label secondary" disableCopy>New</Tag>} showTags />

      <Card showTags />
    </div >
  </>
}