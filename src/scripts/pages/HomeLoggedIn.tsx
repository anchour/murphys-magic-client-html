import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import SuperHeader from "../components/SuperHeader";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import QuickLinks from "../components/QuickLinks";
import CalloutGrid from "../components/CalloutGrid";
import LogoMarquee from "../components/LogoMarquee";

// Asset imports
import Eye from "../../images/icons/ico-key.svg";
import Rings from "../../images/icons/ico-mm-rings.svg";

export default function HomeLoggedIn() {
  return (
    <>
      <SuperHeader />
      <Header />

      <main role="main">
        <QuickLinks />
        <CalloutGrid />
        <LogoMarquee />
        <Hero
          title="Theory11: The world’s finest playing cards"
          description="Premium playing cards your jam? Theory11 makes the world’s finest decks, right here in America. From comic and fantasy, to tricks and magic, Theory11 creates an exquisite blend of elegance, fun, and entertainment."
          style="dark"
          alignment="left"
          hasCTA
          headingLevel="h2"
          buttonText="Shop Theory11"
          hasBackground
          hasBrandElement
          brandElement={Rings}
        />
        <Hero
          title="Enchanting surprises are just aroundthe corner..."
          description=""
          style="dark"
          alignment="center"
          hasCTA
          headingLevel="h2"
          buttonText="Shop New Arrivals"
          hasBackground
          hasBrandElement
          brandElement={Eye}
        />
      </main>

      <MailingListSignup />
      <Footer />
    </>
  );
}
