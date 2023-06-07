import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import QuickLinks from "../components/QuickLinks";
import Deal from "../components/Deal"
import CalloutGrid from "../components/CalloutGrid";
import LogoMarquee from "../components/LogoMarquee";
import Carousel from '../components/Carousel';

// Asset imports
import Eye from "../../images/icons/ico-key.svg";
import Rings from "../../images/icons/ico-mm-rings.svg";
import Button from "../components/Button";
import { Tag } from "../components/Tags";

// Hero images
import { heroCarouselOne, heroMobileCarouselOne } from "../assets/hero-images";
import ProductCardCarousel from "../components/ProductCardCarousel";

export default function HomeLoggedIn() {
  return (
    <>
      <Header />
      <main role="main">
        <Carousel className="hero-carousel">
          <Hero
            style="dark"
            alignment="left"
            title="Apprentice Magic"
            description={null}
            mobileLayout="stacked"
            hasBackground
            image={
              <img src={heroCarouselOne.src} srcSet={heroCarouselOne.srcSet} alt="Apprentice Magic" width={3978} height={1620} />
            }
            mobileImage={
              <img src={heroMobileCarouselOne.src} alt="Apprentice Magic" width={722} height={709} />
            }
            tags={
              <Tag showDecorations disableCopy component="span" variant="label secondary-invert">Trending Now</Tag>
            }
            buttons={
              <Button disableCopy component="a" href="#" variant={'primary'}>View Product</Button>
            }
          />
          <Hero
            style="dark"
            alignment="left"
            title="Anverdi Magic"
            description={null}
            buttons={
              <Button disableCopy component="a" href="#" variant={'primary'}>View Product</Button>
            }
          ></Hero>
        </Carousel>
        <QuickLinks />
        
        <Deal />
        <ProductCardCarousel />
        <CalloutGrid title="Popular Collections" />
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
