import { LoremIpsum } from "lorem-ipsum"
import { times } from 'lodash-es'
import { Card } from "./Cards";
import CollectionFilters from "./CollectionFilters";
import { useEffect, useState } from "preact/hooks";
import LoadingIcon from "./LoadingIcon";
import { Tag } from "./Tags";
import CopyWrapper from "./CopyWrapper";
import { DisableCopyComponent } from "../lib/interfaces";

const lipsum = new LoremIpsum()
let products = []

times(24, () => {
  products.push({
    title: lipsum.generateWords(Math.round(Math.random() * 3 + 1)),
    description: lipsum.generateSentences(1),
    price: {
      wholesale: 1999,
      retail: 2999
    },
  })
});

interface CollectionGridProps extends DisableCopyComponent { }

export default function CollectionGrid(props: CollectionGridProps) {
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
    <CopyWrapper disableCopy={props.disableCopy} buttonText="Collection Grid">
      <section className="page-section collection-grid">
        <CollectionFilters disableCopy />

        <div className="container collection-grid__products">
          {collectionProducts.map(({ title, description, price: { wholesale, retail } }, index) =>
            <Card
              title={title.split(' ').map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(' ')}
              description={description}
              priceWholeSale={wholesale}
              priceRetail={retail}
              cardTags={
                index % 3 == 0 ?
                  <>
                    <Tag variant="label secondary" disableCopy>New</Tag>
                    <Tag variant="label secondary" disableCopy>Sale</Tag>
                  </>
                  : null
              }
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
      </section>
    </CopyWrapper>
  )
}