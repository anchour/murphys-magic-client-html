import { useRef } from "preact/hooks";
import CopyComponent from "./CopyComponent";

interface TeamMemberProps {
  showCopyComponent?: boolean;
  name: string;
  title: string;
  email: string;
  skype: string;
  phone: string;
}

export function TeamMember({
  showCopyComponent = true,
  name = null,
  title = null,
  email = null,
  skype = null,
  phone = null,
}: TeamMemberProps) {
  const ref = useRef(null);

  const handleClick = () =>
    navigator.clipboard.writeText(ref.current.outerHTML);

  return (
    <div className="relative group" ref={ref}>
      <div className="team-member">
        <div className="team-member__thumbnail">
          <div className="team-member__thumbnail-scaler">
            <img
              src="https://source.unsplash.com/random/300x300"
              loading="lazy"
              width={300}
              height={300}
              role="presentation"
            />
          </div>
        </div>

        <div className="team-member__content">
          <div className="team-member__info">
            <h3 className="team-member__name typography-h4">
              {name ? name : "First Last"}
            </h3>
            <p className="team-member__title typography-body-sm">
              {title ? title : "Employee Title"}
            </p>
          </div>

          <ul className="team-member__contact">
            <li className="team-member__email">
              <span className="typography-heading-xs">E</span>
              {email ? email : "first.last@murphysmagic.com"}
            </li>
            <li className="team-member__skype">
              <span className="typography-heading-xs">S</span>
              {skype ? skype : "live:69b973d9b43e5b3d"}
            </li>
            <li className="team-member__phone">
              <span className="typography-heading-xs">P</span>
              {phone ? phone : "(999) 999-9999"}
            </li>
          </ul>
        </div>
      </div>

      {showCopyComponent && <CopyComponent onClick={handleClick} />}
    </div>
  );
}

export default function TeamMembers() {
  return (
    <>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <TeamMember />
        <TeamMember />
      </div>
    </>
  );
}
