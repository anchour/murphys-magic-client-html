import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import SuperHeader from "../components/SuperHeader";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


const ContactForm = () => {
  return (
    <div className="container px-4 mx-auto">
      <h1> FUCK! </h1>
      <form>
        <div className="form-control">

          <label className="form-control__label" htmlFor="name">
            Name
          </label>

          <input
            className="form-control__input"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />

        </div>
      </form>
    </div>
  )
}

const ContactPage = () => {
  return (
    <>
      <SuperHeader />
      <Header />

      <main role="main">
        <Hero title="Contact Us" description="We're here for you." />

        <ContactForm />
      </main>

      <MailingListSignup />
      <Footer />
    </>
  );
};

export default ContactPage;
