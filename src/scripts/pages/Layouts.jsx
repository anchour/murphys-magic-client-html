import SuperHeader from '../components/SuperHeader';
import CollectionGrid from '../components/CollectionGrid';
import Header from '../components/Header';

export default function Layouts() {
  return <>
    <h1>Page layouts</h1>
    
    <SuperHeader />
    <Header />
    <TextImageSplit />
    <TextImageSplit order="image-first" />
    <CollectionGrid />
  </>
}