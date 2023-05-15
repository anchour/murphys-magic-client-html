import { times } from "lodash-es"
import SuperHeader from '../components/SuperHeader';
import CollectionGrid from '../components/CollectionGrid';
import Header from '../components/Header';

export default function Layouts() {
  return <>
    <h1>Page layouts</h1>
    
    <TextImageSplit />
    <TextImageSplit order="image-first" />
    <SuperHeader />
    <Header />
    <CollectionGrid />
  </>
}