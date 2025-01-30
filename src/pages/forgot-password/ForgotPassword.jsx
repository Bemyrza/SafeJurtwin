import SectionOne from "../../widgets/forgot_password/SeactionOne";
import SectionTwo from "../../widgets/forgot_password/SectionTwo";
import "./forgot-password.scss";

export default function ForgotPassword() {
  return (
    <main className="forgot-password__parent">
      <SectionOne />
      <SectionTwo />
    </main>
  );
}
