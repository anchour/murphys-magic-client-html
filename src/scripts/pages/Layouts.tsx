import SuperHeader from '../components/SuperHeader';
import CollectionGrid from '../components/CollectionGrid';
import Header from '../components/Header';
import TextImageSplit from '../components/TextImageSplit';
import BenefitsGrid from '../components/BenefitsGrid';
import IconsGrid from '../components/IconsGrid';
import CollectionHero from '../components/CollectionHero';
import Breadcrumbs from '../components/Breadcrumbs';
import TextCallout from '../components/TextCallout';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MailingListSignup from '../components/MailingListSignup';
import CalloutGrid from '../components/CalloutGrid'
import BrandHeader from '../components/BrandHeader';

export default function Layouts() {
  return <>
    <h1>Page layouts</h1>

    <SuperHeader />
    <Header />
    <BrandHeader />
    <TextImageSplit />
    <TextImageSplit order="image-first" />
    <CollectionGrid />
    <BenefitsGrid />
    <IconsGrid />
    <CollectionHero breadcrumbs={<Breadcrumbs excludeHomeLink />} />
    <TextCallout text='Help make the world a little more wondrous.' buttonUrl='#' buttonText='Apply Now' />
    <Hero title="Become a Dealer" description="Grow your business, change the world" style="dark"/>
    <Hero />
    <Hero title="Bridging the ordinary with the extraordinary" description="For 40+ years Murphy’s has been teaming up with Dealers to bring mystery and magic to the masses." style="dark" />
    <CalloutGrid />
    <MailingListSignup />
    <Footer />
  </>
}
