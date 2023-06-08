import ProductCardCarousel from "../components/ProductCardCarousel"
import ProductDescription from "../components/ProductDescription"
import ProductForm from "../components/product/Form"
import ProductGallery from "../components/product/Gallery"
import BasePage from "./Base"

interface ProductPageProps {
}

const ProductPage = (props: ProductPageProps) => {
  return <BasePage>
    <section className="page-section">
      <div className="container product-container">
        <ProductGallery />
        <ProductForm />
      </div>
    </section>

    <ProductDescription />
    <ProductCardCarousel cardProps={{ showAddToCart: true, disableCopy: true }} />
  </BasePage>
}

export default ProductPage