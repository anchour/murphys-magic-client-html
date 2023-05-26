import { TeamMember } from "./TeamMembers";
import { times } from "lodash-es";

export default function TeamMembersGrid() {
  return (
    <section className="page-section--tall team-members-grid">
      <div className="container">
        <div className="team-members-grid__top-content">
          <h2>The Murphy's team</h2>
          <p className="typography-body-sm">
            We strive for greatness in all aspects of our industry, and are
            passionate about bringing the mystery of magic to the world.
          </p>
        </div>

        <div className="team-members-grid__members">
          {times(8, () => (
            <TeamMember showCopyComponent={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
