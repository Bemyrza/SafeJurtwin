import SectionOne from "../../widgets/connection_family/SeactionOne";
import SectionTwo from "../../widgets/connection_family/SectionTwo";
import './connection_family.scss';

export default function ConnectionFamily() {
  return (
    <main className="connection-family__parent">
     <SectionOne/>
     <SectionTwo/>
    </main>
  )
}
