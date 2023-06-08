import { useRef } from "preact/hooks";
import { DisableCopyComponent } from "../lib/interfaces";
import { TeamMember } from "./TeamMembers";
import { times } from "lodash-es";
import CopyComponent from "./CopyComponent";

interface TeamMembersGridProps extends DisableCopyComponent {
  count?: number;
}

export default function TeamMembersGrid({ count = 8 }: TeamMembersGridProps) {
  const gridRef = useRef(null);

  return (
    <div className="relative">
      <CopyComponent onClick={() => navigator.clipboard.writeText(gridRef.current.outerHTML)} />
      <section className="page-section--tall team-members-grid" ref={gridRef}>
        <div className="container">
          <div className="team-members-grid__top-content">
            <h2 className="typography-section">The Murphy's team</h2>

            <p className="typography-body-sm">
              We strive for greatness in all aspects of our industry, and are
              passionate about bringing the mystery of magic to the world.
            </p>
          </div>

          <div className="team-members-grid__members">
            {times(count, () => (
              <TeamMember disableCopy />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
