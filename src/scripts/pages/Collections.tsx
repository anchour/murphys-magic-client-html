import SuperHeader from "../components/SuperHeader";
import Header from "../components/Header";
import MailingListSignup from "../components/MailingListSignup";
import Hero from "../components/Hero";
import IconsGrid from "../components/IconsGrid";
import CollectionGrid from "../components/CollectionGrid";
import TextCallout from "../components/TextCallout";
import ImageOverlayGrid from "../components/ImageOverlayGrid";
import Footer from "../components/Footer";
import { LoremIpsum } from "lorem-ipsum";
import SVGViewer from "../components/SVGViewer";
import VideoBackground from "../components/VideoBackground";
import Button from "../components/Button";
import videoSrc from "../../video/sample-30s.mp4";
import ImageOverlay from "../components/ImageOverlayColumn";

const lipsum = new LoremIpsum();

interface CollectionsPageProps { }

const CollectionsPage = (props: CollectionsPageProps) => {
  return (
    <>
      <Header />

      <main role="main">
        <Hero />
        <Hero
          style="dark"
          alignment="left"
          title="MAKING MAGIC HAPPEN"
          description="We're here to reawaken the curious with quality magic tricks and playing cards."
          buttons={
            <Button component="a" href="#" variant={'primary'}>Shop Murphy's Magic</Button>
          }
        >
          <VideoBackground src={[
            {
              src: videoSrc,
              type: "video/mp4"
            }
          ]} />
        </Hero>
        <IconsGrid />

        <ImageOverlayGrid>
          <ImageOverlay
            title="APPRENTICE"
            description="Just starting your magic adventure, but don't know where to begin? Our Apprentice line was made for the curious ones like you. Explore tried-and-true tricks at prices that won't make your wallet disappear."
            buttonText="Shop Apprentice Magic"
          />
          <ImageOverlay
            title="Anverdi"
            description="Tony Anverdi — the man, the myth, and legend  — took the industry by storm decades ago with his stunning and innovative inventions. We landed his collection back in 2010, and the tricks have only improved over time."
            buttonText="Shop Anverdi Magic"
          />
        </ImageOverlayGrid>

        <TextCallout
          text="“The street's my stage and Murphy's gives me the perfect products to surprise and delight my audiences. It's the ideal mix of quality, price, and production execution. Want the best? Get this stuff.”"
          buttonUrl="#"
          buttonText="Shop Street Magic"
          showBenefits={false}
          graphic={<SVGViewer filePath="/images/collections/callout-graphic.svg" />}
        />
        <CollectionGrid />

        <div className="page-section--tall text-column__one--centered bg-background-bone">
          <div className="container">
            <div className="content">
              <h2 className="typography-heading typography-heading-md">
                World's best magic tricks & playing cards
              </h2>

              <h3 className="typography-body-md">Card Magic Tricks</h3>
              <p className="typography-body-xs">
                {lipsum.generateParagraphs(1)}
              </p>

              <h3 className="typography-body-md">Playing Cards</h3>
              <p className="typography-body-xs">
                {lipsum.generateParagraphs(1)}
              </p>

              <h3 className="typography-body-md">Basic Flourishes</h3>
              <p className="typography-body-xs">
                {lipsum.generateParagraphs(1)}
              </p>

              <h3 className="typography-body-md">Advance Sleights</h3>
              <p className="typography-body-xs">
                {lipsum.generateParagraphs(1)}
              </p>

              <h3 className="typography-body-md">Beginner Magic</h3>
              <p className="typography-body-xs">
                {lipsum.generateParagraphs(1)}
              </p>

              <h3 className="typography-body-md">Intermediate Magic</h3>
              <p className="typography-body-xs">
                {lipsum.generateParagraphs(1)}
              </p>
            </div>
          </div>
        </div>
      </main>

      <MailingListSignup />
      <Footer />
    </>
  );
};

export default CollectionsPage;
