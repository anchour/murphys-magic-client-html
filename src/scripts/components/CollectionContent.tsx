import { LoremIpsum } from "lorem-ipsum";
import CopyWrapper from "./CopyWrapper";
import { DisableCopyComponent } from "../lib/interfaces";

const lipsum = new LoremIpsum();

export default ({ copyButtonText = 'Collection Content', ...props}: DisableCopyComponent) => (
  <CopyWrapper disableCopy={props.disableCopy} copyButtonText={copyButtonText}>
    <div className="page-section--tall text-column__one--centered bg-background-bone">
      <div className="container">
        <div className="content">
          <h2 className="typography-heading typography-heading-md">
            World's best magic tricks & playing cards
          </h2>

          <h3 className="typography-body-md">Card Magic Tricks</h3>
          <p className="typography-body-xs">
            {lipsum.generateParagraphs(1)}
          </p>

          <h3 className="typography-body-md">Playing Cards</h3>
          <p className="typography-body-xs">
            {lipsum.generateParagraphs(1)}
          </p>

          <h3 className="typography-body-md">Basic Flourishes</h3>
          <p className="typography-body-xs">
            {lipsum.generateParagraphs(1)}
          </p>

          <h3 className="typography-body-md">Advance Sleights</h3>
          <p className="typography-body-xs">
            {lipsum.generateParagraphs(1)}
          </p>

          <h3 className="typography-body-md">Beginner Magic</h3>
          <p className="typography-body-xs">
            {lipsum.generateParagraphs(1)}
          </p>

          <h3 className="typography-body-md">Intermediate Magic</h3>
          <p className="typography-body-xs">
            {lipsum.generateParagraphs(1)}
          </p>
        </div>
      </div>
    </div>
  </CopyWrapper>
)