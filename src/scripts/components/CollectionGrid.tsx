import { LoremIpsum } from "lorem-ipsum"
import { times } from 'lodash-es'
import { Card } from "./Cards";
import CollectionFilters from "./CollectionFilters";

const lipsum = new LoremIpsum()
let products = []

times(24, () => {
  products.push({
    title: lipsum.generateWords(Math.round(Math.random() * 3 + 1)),
    description: lipsum.generateSentences(1),
    price: {
      wholesale: 19.99,
      retail: 29.99
    },
  })
});

export default function CollectionGrid() {
  return (
    <section className="page-section collection-grid">
      <CollectionFilters />

      <div className="container collection-grid__products">
        {products.map(({ title, description, price: { wholesale, retail } }) =>
          <Card
            title={title.split(' ').map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(' ')}
            description={description}
            showCopyComponent={false}
            priceWholeSale={wholesale}
            priceRetail={retail}
            showTags={true}
          />
        )}
      </div>
    </section>
  )
}