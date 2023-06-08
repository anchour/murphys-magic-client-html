import Floofly from "/src/images/elite-brands/floofly-magic-room.png";
import MagicRoom from "/src/images/elite-brands/magic-room.png";
import Theory11 from "/src/images/elite-brands/theory-11.png";

export default function LogoMarquee() {
  return (
    <section className="logo-ticker page-section--tall" role="presentation">
      <div className="container">
        <h2 className="typography-heading-lg text-center"> Elite Brands</h2>
      </div>

      <div className="marquee-wrap">
        {[...Array(4)].map(() => (
          <div className="ticker">
            <div className="ticker__logo">
              <img
                src={Floofly}
                alt="Floofly Magic Room logo"
                width="171"
                height="92"
              ></img>
            </div>

            <div className="ticker__logo">
              <img
                src={MagicRoom}
                alt="Magic Room logo"
                width="126"
                height="58"
              ></img>
            </div>

            <div className="ticker__logo">
              <img
                src={Theory11}
                alt="Theory 11 logo"
                width="78"
                height="78"
              ></img>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
