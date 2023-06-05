import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import SuperHeader from "../components/SuperHeader";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Button from "../components/Button";
import TeamMembersGrid from "../components/TeamMemberGrid";
import Banner1Bg from '../../images/contact/banner-1-bg.jpg';
import ImageOverlayGrid from "../components/ImageOverlayGrid";
import ImageOverlay from "../components/ImageOverlayColumn";

export const ContactForm = () => {
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
  const bannerProps: React.ImgHTMLAttributes<HTMLImageElement> = {
    src: Banner1Bg,
    className: 'hero__background--image',
    alt: "Become a Dealer",
    width: 1729,
    height: 973,
    loading: "lazy",
  };

  return (
    <>
      <Header />

      <main role="main">
        <Hero title="Contact Us" description="We're here for you." />

        <div className="container form-container page-section">
          <ContactContent />
          <ContactForm />
        </div>

        <Hero
          style="dark"
          description="Since 1998, our team has dedicated ourselves to making the world a little more wonderful for everyone. If there's anything you need, or any questions you have, drop us a line, day or night."
          title="Making Magic Easy"
          image={<img {...bannerProps} />}
          hasBackground hasBrandElement brandElement={'/src/images/icons/ico-magic-eye.svg'}
        />

        <TeamMembersGrid count={14} />

        <ImageOverlayGrid>
          <ImageOverlay title="Become a Dealer" description="We're always looking for passionate Dealers who want to grow the market for their products. Whether you have a new or existing retail shop, a partnership with Murphy's is a valuable business move in a competitive industry." buttonText="Apply to become a dealer" />
          <ImageOverlay title="Got Magic?" description="We're always looking for partners who push the envelope, delight in the next and the new, and know there's always room for one more trick. If you're a magician with a trick up your sleeve, get in touch." buttonText="Submit a trick" />
        </ImageOverlayGrid>
      </main>


      <MailingListSignup />
      <Footer />
    </>
  );
};

export default ContactPage;
