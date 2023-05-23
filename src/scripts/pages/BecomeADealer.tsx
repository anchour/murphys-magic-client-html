import BenefitsGrid from "../components/BenefitsGrid";
import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import SuperHeader from "../components/SuperHeader";
import TextCallout from "../components/TextCallout";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

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
        />
        <BenefitsGrid />
      </main>

      <MailingListSignup />
      <Footer />
    </>
  );
};

export default BecomeADealerPage;
