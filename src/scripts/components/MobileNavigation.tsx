import CloseButton from "./Icons/CloseButton.svg";
import MobileMenu from "./MobileMenu";
import MobileSearchForm from "./MobileSearchForm";

export default function MobileNavigation({ closeButtonClick, ref }: { ref: any, closeButtonClick: () => void }) {
  return (
    <div className='mobile-navigation' ref={ref}>
      <button type="button" className="mobile-navigation__close" onClick={closeButtonClick}>
        <span className="sr-only">Close navigation</span>
        <CloseButton />
      </button>

      <MobileSearchForm />
      <MobileMenu />
    </div>
  )
}
