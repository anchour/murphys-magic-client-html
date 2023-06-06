import SuperHeader from "../components/SuperHeader";
import CollectionGrid from "../components/CollectionGrid";
import Header from "../components/Header";
import TextImageSplit from "../components/TextImageSplit";
import BenefitsGrid from "../components/BenefitsGrid";
import IconsGrid from "../components/IconsGrid";
import CollectionHero from "../components/CollectionHero";
import Breadcrumbs from "../components/Breadcrumbs";
import TextCallout from "../components/TextCallout";
import Footer from "../components/Footer";
import MailingListSignup from "../components/MailingListSignup";
import CalloutGrid from "../components/CalloutGrid";
import BrandHeader from "../components/BrandHeader";
import Hero from "../components/Hero";
import ImageOverlayGrid from "../components/ImageOverlayGrid";
import TeamMembersGrid from "../components/TeamMemberGrid";
import Testimonial from "../components/Testimonial";

// Asset imports
import Eye from "../../images/icons/ico-magic-eye.svg";
import ArtofUnkown from "../../images/icons/ico-art-of-unkown.svg";

export default function Layouts() {
  return (
    <>
      <SuperHeader />
      <Header hideSuperHeader />
      <BrandHeader />
      <TextImageSplit />
      <TextImageSplit order="image-first" />
      <CollectionGrid />
      <BenefitsGrid />
      <IconsGrid />
      <CollectionHero breadcrumbs={<Breadcrumbs excludeHomeLink />} />
      <TextCallout
        text="Help make the world a little more wondrous."
        buttonUrl="#"
        buttonText="Apply Now"
      />
      <Hero
        title="Become a Dealer"
        description="Grow your business, change the world"
        style="dark"
        hasBackground
      />
      <Hero hasBackground />
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
        brandElement={ArtofUnkown}
      />
      <Hero title="Contact Us" description="We're here to help." />
      <Hero
        title="Making magic easy"
        description="Since 1998, our team has dedicated ourselves to making the world a little more wonderful for everyone. If there’s anything you need, or any questions you have, drop us a line, day or night."
        hasBackground
        hasBrandElement
        brandElement={Eye}
        style="dark"
        headingLevel="h2"
      />
      <CalloutGrid />
      <ImageOverlayGrid />
      <TeamMembersGrid count={12}/>
      <Testimonial />
      <MailingListSignup />
      <Footer />
    </>
  );
}
