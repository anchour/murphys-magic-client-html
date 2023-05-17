import { Icon } from "./Icons";

export default function IconGrid() {
  return (
    <section className="icons-grid">
      <div className="container">
        <div className="row">
          <div className="icons-grid__title">
            <h2>What sets Murphy’s Magic apart?</h2>
          </div>
          
          <div className="icons-grid__icons">
            <Icon
              icon="../src/images/icons/ico-top_magicians.svg"
              description="Top Magicians"
              showCopyComponent={false}
            />
            <Icon
              icon="../src/images/icons/ico-superior_quality.svg"
              description="Superior Quality"
              showCopyComponent={false}
            />
            <Icon
              icon="../src/images/icons/ico-USA.svg"
              description="Designed in USA"
              showCopyComponent={false}
            />
            <Icon
              icon="../src/images/icons/ico-learn.svg"
              description="Easy to Learn"
              showCopyComponent={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
