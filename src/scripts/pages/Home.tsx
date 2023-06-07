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
import Carousel from "../components/Carousel";
import { Tag } from "../components/Tags";
import Button from "../components/Button";

import { heroCarouselOne, heroMobileCarouselOne } from "../assets/hero-images";

export default function Home() {
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
