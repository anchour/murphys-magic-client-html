import { Icon } from "./Icons";
import Top from "/src/images/icons/ico-top_magicians.svg";
import Quality from "/src/images/icons/ico-superior_quality.svg";
import USA from "/src/images/icons/ico-USA.svg";
import Learn from "/src/images/icons/ico-learn.svg";

export default function IconGrid() {
  return (
    <section className="icons-grid">
      <div className="container">
        <div className="row">
          <h2 className="icons-grid__title">What sets Murphy’s Magic apart?</h2>

          <div className="icons-grid__icons">
            <Icon
              icon={Top}
              description="Top Magicians"
              showCopyComponent={false}
            />
            <Icon
               icon={Quality}
              description="Superior Quality"
              showCopyComponent={false}
            />
            <Icon
               icon={USA}
              description="Designed in USA"
              showCopyComponent={false}
            />
            <Icon
              icon={Learn}
              description="Easy to Learn"
              showCopyComponent={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
