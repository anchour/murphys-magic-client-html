import { TeamMember } from "./TeamMembers";
import { times } from "lodash-es";

export default function TeamMembersGrid() {
  return (
    <section className="team-members-grid">
      <div className="container team-members-grid__title">
        <h2>The Murphy's team</h2>
      </div>
      
      <div className="container team-members-grid__members">
        {times(8, () => (
          <TeamMember showCopyComponent={false} />
        ))}
      </div>
    </section>
  );
}
