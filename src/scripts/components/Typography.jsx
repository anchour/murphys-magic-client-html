import { LoremIpsum } from "lorem-ipsum";
import SectionHeading from "./SectionHeading";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 2,
    min: 1
  },
  wordsPerSentence: {
    max: 30,
    min: 24
  }
});

function H1({ children }) {
  return <h1 className="typography-h1">{children}</h1>;
}

function H2({ children }) {
  return <h2 className="typography-h2">{children}</h2>;
}

function H3({ children }) {
  return <h3 className="typography-h3">{children}</h3>;
}

function H4({ children }) {
  return <h4 className="typography-h4">{children}</h4>;
}

function H5({ children }) {
  return <h5 className="typography-h5">{children}</h5>;
}

export default function () {
  return (
    <div class="grid grid-cols-2 gap-4 container">
      <div class="bg-gray-200 p-4">
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
      </div>

      <div>
        {/* General body typography */}
        <SectionHeading className="mt-8 mb-4">Body XL</SectionHeading>
        <p className="typography-body-xl">{lorem.generateParagraphs(1)}</p>
        
        <SectionHeading className="mt-8 mb-4">Body LG</SectionHeading>
        <p className="typography-body-lg">{lorem.generateParagraphs(1)}</p>
        
        <SectionHeading className="mt-8 mb-4">Body MD</SectionHeading>
        <p className="typography-body-md">{lorem.generateParagraphs(1)}</p>
        
        <SectionHeading className="mt-8 mb-4">Body SM</SectionHeading>
        <p className="typography-body-sm">{lorem.generateParagraphs(1)}</p>
        
        <SectionHeading className="mt-8 mb-4">Body XS</SectionHeading>
        <p className="typography-body-xs">{lorem.generateParagraphs(1)}</p>
        
        <SectionHeading className="mt-8 mb-4">Body 2XS</SectionHeading>
        <p className="typography-body-2xs">{lorem.generateParagraphs(1)}</p>
      </div>
    </div>
  )
}