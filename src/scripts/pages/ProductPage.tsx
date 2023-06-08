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
  </BasePage>
}

export default ProductPage