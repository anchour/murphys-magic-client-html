import SuperHeader from "../components/SuperHeader"
import Header from "../components/Header"
import MailingListSignup from "../components/MailingListSignup"
import CollectionHero from '../components/CollectionHero';
import Breadcrumbs from '../components/Breadcrumbs';
import CollectionGrid from '../components/CollectionGrid';
import Footer from '../components/Footer';

interface CollectionsPageProps {
}

const CollectionsPage = (props: CollectionsPageProps) => {
  return <>
    <SuperHeader />
    <Header />

    <main role="main">
      <CollectionHero breadcrumbs={<Breadcrumbs excludeHomeLink />} />
      <CollectionGrid />
    </main >
    
    <MailingListSignup />
    <Footer />
  </>
}

export default CollectionsPage