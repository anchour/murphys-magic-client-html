import SuperHeader from '../components/SuperHeader';
import CollectionGrid from '../components/CollectionGrid';
import Header from '../components/Header';
import TextImageSplit from '../components/TextImageSplit';
import BenefitsGrid from '../components/BenefitsGrid';
import CollectionHero from '../components/CollectionHero';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Layouts() {
  return <>
    <h1>Page layouts</h1>

    <SuperHeader />
    <Header />
    <TextImageSplit />
    <TextImageSplit order="image-first" />
    <CollectionGrid />
    <BenefitsGrid />
    <CollectionHero breadcrumbs={<Breadcrumbs excludeHomeLink />} />
  </>
}
