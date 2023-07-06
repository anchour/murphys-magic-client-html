import SuperHeader from "../components/SuperHeader";
import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import CollectionHero from "../components/CollectionHero";
import Breadcrumbs from "../components/Breadcrumbs";
import CollectionGrid from "../components/CollectionGrid";
import Footer from "../components/Footer";

import { LoremIpsum } from "lorem-ipsum"
import CollectionContent from "../components/CollectionContent";

interface CollectionsPageProps { }

const CollectionsPage = (props: CollectionsPageProps) => {
  return (
    <>
      <Header />

      <main role="main">
        <CollectionHero breadcrumbs={<Breadcrumbs disableCopy excludeHomeLink />} />
        <CollectionGrid />
        <CollectionContent />
      </main>

      <MailingListSignup />
      <Footer />
    </>
  );
};

export default CollectionsPage;
