import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import SuperHeader from "../components/SuperHeader";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

interface BecomeADealerPageProps {}

const BecomeADealerPage = (props: BecomeADealerPageProps) => {
  return (
    <>
      <SuperHeader />
      <Header />

      <main role="main">
        <Hero title="Contact Us" description="We're here for you." />
        <Hero
          title="Making magic easy"
          description="Since 1998, our team has dedicated ourselves to making the world
         a little more wonderful for everyone. If there’s anything you need,
         or any questions you have, drop us a line, day or night."
          headingLevel="h2"
          style="dark"
        />
      </main>

      <MailingListSignup />
      <Footer />
    </>
  );
};

export default BecomeADealerPage;
