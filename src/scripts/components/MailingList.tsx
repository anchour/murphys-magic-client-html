import { useRef } from "preact/hooks";
import CopyComponent from "./CopyComponent";

interface MailingListProps {
  disableCopy?: boolean;
}

export default function MailingList({ disableCopy = false }: MailingListProps) {
  const copyRef = useRef(null)

  const element =
    <form method="POST" action="" ref={copyRef} className="mailing-list">
      <label className="sr-only" htmlFor="search-term">Search</label>
      <input type="search" name="search-term" className="mailing-list__input" placeholder="Your email" />
      <button type="submit" className="btn btn--primary mailing-list__submit">Sign up</button>
    </form>

  return disableCopy ? element : (
    <div className="relative">
      {element}
      <CopyComponent onClick={() => { navigator.clipboard.writeText(copyRef.current.outerHTML) }} />
    </div>
  )
}