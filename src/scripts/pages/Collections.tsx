import SuperHeader from "../components/SuperHeader"
import Header from "../components/Header"
import MailingListSignup from "../components/MailingListSignup"
import Hero from "../components/Hero"
import IconsGrid from '../components/IconsGrid';
import CollectionGrid from '../components/CollectionGrid';
import TextCallout from '../components/TextCallout';
import Footer from '../components/Footer';

interface CollectionsPageProps {
}

const CollectionsPage = (props: CollectionsPageProps) => {
  return <>
    <SuperHeader />
    <Header />

    <main role="main">
      <Hero />
      <IconsGrid />
      <TextCallout text='“The street’s my stage and Murphy’s gives me the perfect products to surprise and delight my audiences. It’s the ideal mix of quality, price, and production execution. Want the best? Get this stuff.”' buttonUrl='#' buttonText='Shop Street Magic' />
      <CollectionGrid />
    </main >
    
    <MailingListSignup />
    <Footer />
  </>
}

export default CollectionsPage