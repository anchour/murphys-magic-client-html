import { LoremIpsum } from "lorem-ipsum"
import { times } from 'lodash-es'
import { Card } from "./Cards";
import CollectionFilters from "./CollectionFilters";
import { useEffect, useState } from "preact/hooks";
import LoadingIcon from "./LoadingIcon";

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
  const [collectionProducts, setCollectionProducts] = useState(products)
  const [loadMoreClicked, setLoadMoreClicked] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (loadMoreClicked == true) {
        setCollectionProducts([...collectionProducts, ...collectionProducts]);
      }

      setLoadMoreClicked(false);
    }, 6000);
  }, [loadMoreClicked])

  return (
    <section className="page-section collection-grid">
      <CollectionFilters />

      <div className="container collection-grid__products">
        {collectionProducts.map(({ title, description, price: { wholesale, retail } }) =>
          <Card
            title={title.split(' ').map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(' ')}
            description={description}
            priceWholeSale={wholesale}
            priceRetail={retail}
            cardTags={["New", "Sale"]}
            showTags
            disableCopy
          />
        )}
      </div>

      <div className="container collection-grid__pagination">
        {loadMoreClicked ? <LoadingIcon /> : (
          <a href="#" className="btn btn--link" title="Load the next page of products" onClick={(e) => {
            e.preventDefault()

            setLoadMoreClicked(true)
          }}>
            Load More
          </a>
        )}
      </div>
    </section >
  )
}