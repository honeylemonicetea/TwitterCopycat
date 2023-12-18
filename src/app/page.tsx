import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function SignUp() {
  return (
    <div className="sign-in">
      <div className="sign-in__left"></div>
      <div className="sign-in__right">
        <div className="sign-in__right-inner">
          <h1>Happening now</h1>
          <div className="sign-in__right-innter-wrapper">

          <h3>Join today.</h3>
          <a href="" className="sign-in__sign-up">
            Create Account
          </a>

          <p>Already have an account?</p>
          <a href="/api/auth/signin/github" className="sign-in__github">
            Sign in with GitHub
          </a>
          <a href="" className="sign-in__sign-in-btn">
            Sign In
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
