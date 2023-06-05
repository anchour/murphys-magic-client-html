import BenefitsGrid from "../components/BenefitsGrid";
import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import TextCallout from "../components/TextCallout";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { ContactForm } from "../pages/Contact";

import ArtOfUnkown from "../../images/icons/ico-art-of-unkown.svg";

const GetStartedContent = () => {
  return (
    <div className="contact-content">
      <div className="contact-content__header">
        <h2 className="typography-heading-md">
          Let's get started.
        </h2>

        <p className="typography-body-sm">
          Fill out this form and we’ll be in touch.
          <br></br>
          Or, give us a ring: (000) 000-0000.
        </p>
      </div>
    </div>
  )
}

interface BecomeADealerPageProps {}

const BecomeADealerPage = (props: BecomeADealerPageProps) => {
  return (
    <>
      <Header disableCopy />

      <main role="main">
        <Hero
          title="Become a Dealer"
          description="Grow your business, change the world"
          style="dark"
          hasBackground
        />
        <TextCallout />
        <Hero
          title="Bridging the ordinary with the extraordinary"
          description="For 40+ years Murphy’s has been teaming up with Dealers to bring mystery and magic to the masses."
          style="dark"
          alignment="left"
          hasCTA
          headingLevel="h2"
          buttonText="Apply now"
          hasBackground
          hasBrandElement
          brandElement={ArtOfUnkown}
        />
        <BenefitsGrid />

        <div className="container form-container page-section--tall">
          <GetStartedContent />
          <ContactForm />
        </div>
      </main>

      <MailingListSignup />
      <Footer />
    </>
  );
};

export default BecomeADealerPage;
