import { SectionTitleComponent } from "../lib/interfaces"
import thumbnail from '../../images/button-thumbnail-example.jpg';
import SVGViewer from "./SVGViewer"
import { Tag } from "./Tags"

interface CtaButtonsSectionProps extends SectionTitleComponent {
}

const CtaButtonsSection = (props: CtaButtonsSectionProps) => {
  const TitleTag = props.sectionTitleLevel || 'h2'

  return <section className="cta-buttons-section page-section page-section--tall">
    <div className="container cta-buttons-section__grid">
      <div>
        <SVGViewer svgClass="cta-buttons-section__icon" filePath="/src/images/icons/ico-magic-eye-gradient.svg" />

        {props.sectionTitle && <TitleTag className="cta-buttons-section__title typography-heading-lg">{props.sectionTitle}</TitleTag>}

        <Tag href="#" disableCopy variant="md has-thumbnail">
          <div className="tag__thumbnail">
            <img src={thumbnail} loading="lazy" width={150} height={150} role="presentation" />
          </div>

          Best Sellers
        </Tag>

        <Tag href="#" disableCopy variant="md has-thumbnail">
          <div className="tag__thumbnail">
            <img src={thumbnail} loading="lazy" width={150} height={150} role="presentation" />
          </div>

          Books & Digital
        </Tag>

        <Tag href="#" disableCopy variant="md has-thumbnail">
          <div className="tag__thumbnail">
            <img src={thumbnail} loading="lazy" width={150} height={150} role="presentation" />
          </div>

          Playing Cards
        </Tag>

        <Tag href="#" disableCopy variant="md has-thumbnail">
          <div className="tag__thumbnail">
            <img src={thumbnail} loading="lazy" width={150} height={150} role="presentation" />
          </div>

          Brands
        </Tag>

        <Tag href="#" disableCopy variant="md has-thumbnail">
          <div className="tag__thumbnail">
            <img src={thumbnail} loading="lazy" width={150} height={150} role="presentation" />
          </div>

          Magic Tricks
        </Tag>

      </div>
    </div>
  </section>
}

export default CtaButtonsSection