import { useRef } from "preact/hooks";
import Button from "./Button";
import CopyComponent from "./CopyComponent";

export default function MailingList() {
  const copyRef = useRef(null)

  return <div className="relative">
    <form method="POST" action="" ref={copyRef} className="mailing-list">
      <label className="sr-only" htmlFor="search-term">Search</label>
      <input type="search" name="search-term" className="mailing-list__input" placeholder="Your email" />
      <button type="submit" className="btn btn--primary mailing-list__submit">Sign up</button>
    </form>

    <CopyComponent onClick={() => { navigator.clipboard.writeText(copyRef.current.outerHTML) }} />
  </div>
}