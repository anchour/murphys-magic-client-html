import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import SuperHeader from "../components/SuperHeader";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Button from "../components/Button";


const ContactForm = () => {
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

const ContactContent = () => {
  return (
    <div className="contact-content">
      <div className="contact-content__header">
        <h2 className="typography-heading-md">
          GET IN TOUCH
        </h2>

        <p className="typography-body-sm">
          Fill out this form and we'll be in touch. If that's not personal enough, we're always available by phone.
        </p>
      </div>

      <div className="contact-content__information">
        <div className="contact-content__information__column">
          <p>
            <strong>Phone</strong>

            <br />
            Toll Free Phone: (800) 853-7403
            Phone: (916) 853-9292
            Fax: (916) 853-9494
            Toll Free Fax: (866) 853-0866
          </p>
        </div>

        <div className="contact-content__information__column">
          <p>
            <strong> Address </strong>
            <br />
            <address>
              11500 Gold Dredge Way
              <br />

              Rancho Cordova, CA 95742
            </address>
          </p>

          <p>
            <strong> Contact Hours </strong>
            <br />

            Hours: 7:30 - 4:30 PM (PST)
          </p>
        </div>
      </div>


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

        <div className="container contact-page-container page-section">
          <ContactContent />
          <ContactForm />
        </div>
      </main>

      <MailingListSignup />
      <Footer />
    </>
  );
};

export default ContactPage;
