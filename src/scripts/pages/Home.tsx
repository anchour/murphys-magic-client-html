import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BrandHeader from "../components/BrandHeader";
import TextImageSplit from "../components/TextImageSplit";
import CalloutGrid from "../components/CalloutGrid";
import LogoMarquee from "../components/LogoMarquee";

// Asset imports
import ArtOfUnknown from "../../images/icons/ico-art-of-unknown.svg";

export default function Home() {
  return (
    <>
      <Header />

      <main role="main">
        <BrandHeader />
        <TextImageSplit order="image-first" />
        <CalloutGrid />
        <Hero
          title="Our Beginner Magic Collection"
          description="Every trick has a strong start — and so do all great magicians. Enter the world of curiosity with our collection of best-selling Beginner Magic."
          style="dark"
          alignment="left"
          hasCTA
          headingLevel="h2"
          buttonText="See Anvendi’s Magic"
          hasBackground
          hasBrandElement
          brandElement={ArtOfUnknown}
        />
        <LogoMarquee />
      </main>

      <MailingListSignup />
      <Footer />
    </>
  );
}
