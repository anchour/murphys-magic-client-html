import Breadcrumbs from "../components/Breadcrumbs"
import ProductCardCarousel from "../components/ProductCardCarousel"
import ProductDescription from "../components/ProductDescription"
import TextImageSplit from "../components/TextImageSplit"
import ProductForm from "../components/product/Form"
import ProductGallery from "../components/product/Gallery"
import BasePage from "./Base"

interface ProductPageProps {
}

const breadcrumbPages = [
  {
    name: 'All Products',
    href: '#',
    current: false
  },
  {
    name: 'Magic Tricks',
    href: '#',
    current: false
  },
  {
    name: 'Atom Rings',
    href: '#',
    current: true
  }
];

const ProductPage = (props: ProductPageProps) => {
  return <BasePage>
    <section className="page-section product-page">
      <div className="container">
        <Breadcrumbs disableCopy excludeHomeLink pages={breadcrumbPages} />
      </div>
      <div className="container product-container">
        <ProductGallery />
        <ProductForm />
      </div>
    </section>

    <ProductDescription />
    <ProductCardCarousel title="More from Apprentice Magic" cardProps={{ showAddToCart: true, disableCopy: true }} />
    <TextImageSplit order="image-first" />
    <ProductCardCarousel title="Recently Viewed" cardProps={{ disableCopy: true }} />
  </BasePage>
}

export default ProductPage