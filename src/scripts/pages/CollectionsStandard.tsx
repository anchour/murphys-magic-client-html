import SuperHeader from "../components/SuperHeader";
import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import CollectionHero from "../components/CollectionHero";
import Breadcrumbs from "../components/Breadcrumbs";
import CollectionGrid from "../components/CollectionGrid";
import Footer from "../components/Footer";

import { LoremIpsum } from "lorem-ipsum"

const lipsum = new LoremIpsum()

interface CollectionsPageProps {}

const CollectionsPage = (props: CollectionsPageProps) => {
  return (
    <>
      <Header />

      <main role="main">
        <CollectionHero breadcrumbs={<Breadcrumbs excludeHomeLink />} />
        <CollectionGrid />

        <div className="page-section--tall text-column__one--centered bg-background-bone">
          <div className="container">
            <div className="content">
              <h2 className="typography-heading typography-heading-md">
                World’s best magic tricks & playing cards
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
      </main>

      <MailingListSignup />
      <Footer />
    </>
  );
};

export default CollectionsPage;
