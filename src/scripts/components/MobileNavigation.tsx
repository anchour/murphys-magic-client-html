import CloseButton from "./Icons/CloseButton.svg";
import MobileMenu from "./MobileMenu";
import MobileSearchForm from "./MobileSearchForm";

export default function MobileNavigation({ closeButtonClick }: { closeButtonClick: () => void }) {
  return (
    <div className='mobile-navigation'>
      <button type="button" className="mobile-navigation__close" onClick={closeButtonClick}>
        <span className="sr-only">Close navigation</span>
        <CloseButton />
      </button>

      <MobileSearchForm />
      <MobileMenu />
    </div>
  )
}
