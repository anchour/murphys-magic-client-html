import CheveronRight from "./CheveronRight.svg"
import RandomNavImage1 from '../../images/nav--image-random.jpeg';
import RandomNavImage2 from '../../images/nav--image-random-2.jpeg';
import ArrowRight from "./Icons/ArrowRight.svg";

const getImage = (image) => <img src={image} width="342" height="80" loading="lazy" alt="Placeholder" className="mobile-menu__link__image" />
const items = [
  {
    title: 'Magic Tricks',
    url: '#',
  },
  {
    title: 'Books & Digital',
    url: '#',
  },
  {
    title: 'Playing Cards',
    url: '#',
  },
  {
    title: 'Brands',
    url: '#',
  },
  {
    title: 'Latest',
    url: '#',
  }
]

export default function MobileMenu() {

  return (
    <>
      <ul className="mobile-menu">
        {items.map(({ title, url, children = [] }: { title: string, url: string, children: any[] }, index) =>
          <li className="mobile-menu__item">
            <a href={url} className="mobile-menu__link" style={{ animationDelay: `${index * 0.15}s` }}>
              {getImage(index % 2 === 0 ? RandomNavImage1 : RandomNavImage2)}

              <div className="mobile-menu__link-text typography-h5">
                {title}
              </div>
              <span className="mobile-menu__link-icon" aria-hidden>
                <CheveronRight />
              </span>
            </a>

            {children.length > 0 &&
              <ul className="mobile-menu__sub-menu">
                {children.map(({ title, url }: { title: string, url: string }, index) =>
                  <li className="mobile-menu__sub-menu__item">
                    <a href={url} title={title} className="mobile-menu__sub-menu__link">
                      {title}
                    </a>
                  </li>
                )}
              </ul>
            }
          </li>
        )}
      </ul>

      <ul className="mobile-utility-menu">
        <li className="mobile-utility-menu__item">
          <a className="mobile-utility-menu__link" href="#">Become a Dealer</a>

          <span className="mobile-utility-menu__link-icon">
            <CheveronRight />
          </span>
        </li>

        <li className="mobile-utility-menu__item">
          <a className="mobile-utility-menu__link" href="#">Store Locator

            <span className="mobile-utility-menu__link-icon">
              <CheveronRight />
            </span>
          </a>
        </li>
      </ul>

      <div className="mobile-menu-actions">
        <a href="#" className="mobile-menu-actions__action btn btn--primary">
          Log in

          <span className="btn__icon">
            <ArrowRight />
          </span>
        </a>
      </div>
    </>
  )

}