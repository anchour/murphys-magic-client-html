import Footer from "../components/Footer"
import Header from "../components/Header"
import MailingListSignup from "../components/MailingListSignup"
import ProductForm from "../components/product/Form"
import ProductGallery from "../components/product/Gallery"

interface ProductPageProps {
}

const ProductPage = (props: ProductPageProps) => {
  return <>
    <Header showSuperHeader disableCopy />

    <section className="page-section">
      <div className="container product-container">
        <ProductGallery />
        <ProductForm />
      </div>
    </section>

    <MailingListSignup />
    <Footer />
  </>
}

export default ProductPage