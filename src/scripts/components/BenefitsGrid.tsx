import { LoremIpsum } from "lorem-ipsum"
import { times } from 'lodash-es'
import { Benefit } from "./Benefits";

const lipsum = new LoremIpsum()
let benefits = []

times(5, (index) => {
  const identifier = (index + 1).toString().padStart(2, '0');

  benefits.push({
    title: lipsum.generateWords(Math.round(Math.random() * 3 + 1)),
    description: lipsum.generateSentences(Math.round(Math.random() + 2)),
    identifier: identifier,
  })
});

export default function BenefitsGrid() {
  return (
    <section className="benefits-grid">
      <div className="container benefits-grid__title">
        <h2>Benefits of working with us</h2>
      </div>
      <div className="container benefits-grid__benefits">
        {benefits.map(({ identifier, title, description}) =>
          <Benefit
            identifier={identifier}
            title={title.split(' ').map(t => t.charAt(0).toUpperCase() + t.slice(1)).join(' ')}
            description={description}
          />
        )}
      </div>
    </section>
  )
}