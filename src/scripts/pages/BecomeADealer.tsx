import BenefitsGrid from "../components/BenefitsGrid";
import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import SuperHeader from "../components/SuperHeader";
import TextCallout from "../components/TextCallout";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Button from "../components/Button";

import Unkown from "../../images/icons/ico-art-of-unkown.svg";

const GetStartedForm = () => {
  return <form method="post" action="" className="contact-form">
    <div className="contact-form__body">

      <div className="form-group">
        <label className="form-label" htmlFor="fname">
          First Name
        </label>

        <input
          className="form-input"
          type="text"
          name="fname"
          id="fname"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="lname">
          Last Name
        </label>

        <input
          className="form-input"
          type="text"
          name="lname"
          id="lname"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">
          Email
        </label>

        <input
          className="form-input"
          type="email"
          name="email"
          id="email"
          placeholder="email@address.com"
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="phone">
          Phone Number
        </label>

        <input
          className="form-input"
          type="tel"
          name="phone"
          id="phone"
          placeholder="(123) 456-7890"
        />
      </div>

      <div className="form-group contact-form__message-field">
        <label className="form-label" htmlFor="message">
          Message
        </label>

        <textarea
          className="form-textarea"
          name="message"
          id="message"
          rows={4}
          placeholder="Your Message"
        ></textarea>
      </div>

    </div>

    <div className="contact-form__footer">
      <Button component="button" type="submit" variant="primary" disableCopy>
        Send message
      </Button>
    </div>
  </form>
}

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
      <SuperHeader />
      <Header />

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
          brandElement={Unkown}
        />
        <BenefitsGrid />

        <div className="container form-container page-section--tall">
          <GetStartedContent />
          <GetStartedForm />
        </div>
      </main>

      <MailingListSignup />
      <Footer />
    </>
  );
};

export default BecomeADealerPage;
