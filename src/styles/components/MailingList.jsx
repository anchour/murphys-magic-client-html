import { useRef } from "preact/hooks";
import Button from "../../scripts/components/Button";
import CopyComponent from "../../scripts/components/CopyComponent";

export default function MailingList() {

  const copyRef = useRef(null)
  return <>
    <div className="p-4 bg-smoke">
      <div className="relative">
        <div className="mailing-list" ref={copyRef}>
          <label className="sr-only" htmlFor="search-term">Search</label>
          <input type="search" name="search-term" className="mailing-list__input" placeholder="Your email" />
          <button type="submit" className="btn btn--primary mailing-list__submit">Sign up</button>
        </div>

        <CopyComponent onClick={() => { navigator.clipboard.writeText(copyRef.current.outerHTML) }} />
      </div>
    </div>
  </>
}