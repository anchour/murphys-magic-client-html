import { Tag } from "../components/Tags";

interface QuickLinksProps {
  title?: string;
  description?: string;
}

const QuickLinks = ({
  title = "What can we do for you?",
  description = "We’ll work magic for your business. Let us know how we can help.",
}: QuickLinksProps) => {
  return (
    <>
      <section className="quick-links page-section--tall bg-background-bone">
        <div className="container">
          <div className="quick-links__wrap">
            <div className="quick-links__content">
              <h2 className="typography-section"> {title}</h2>

              <p className="typography-body-sm">{description}</p>
            </div>

            <div className="quick-links__links">
              <Tag variant="lg" href="#" disableCopy>
                Recent Orders
              </Tag>
              <Tag variant="lg" href="#" disableCopy>
                Your Invoices
              </Tag>
              <Tag variant="lg" href="#" disableCopy>
                Dropshipping
              </Tag>
              <Tag variant="lg" href="#" disableCopy>
                Web Services
              </Tag>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default QuickLinks;
