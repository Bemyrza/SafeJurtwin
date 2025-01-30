import SectionOne from "../../widgets/login/SeactionOne";
import SectionTwo from "../../widgets/login/SectionTwo";
import './login.scss';

export default function Login() {
  return (
    <main className="login__parent">
         <SectionOne/>
         <SectionTwo/>
    </main>
  )
}
