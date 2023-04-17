import styles from "./SignIn.module.css";
import { CSSTransition } from "react-transition-group";
import { IoLogoGoogle } from "react-icons/io5";
import { signIn } from "next-auth/react";
import { useRef } from "react";
import { useRouter } from "next/router";
const SignIn = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  async function credentialsHandler(e) {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    // console.log(emailValue, passwordValue);

    const result = await signIn("credentials", {
      redirect: false,
      email: emailValue,
      password: passwordValue,
    });

    props.hideModal();
    // router.reload();
  }

  return (
    <CSSTransition
      in={props.shown}
      timeout={300}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: styles.enterActive,
        exit: "",
        exitActive: styles.exitActive,
      }}
    >
      <div className={styles.signInContainer}>
        <div
          className={styles.signInGoogle}
          onClick={() => {
            signIn("google");
          }}
        >
          <IoLogoGoogle className={styles.icon} />
          <div className={styles.text}>Sign in with google</div>
        </div>

        <div className={styles.or}>
          <p>Or with email and password</p>
        </div>

        <div className={styles.signInCredentials}>
          <div className={styles.textCredentials}>Sign in with credentials</div>
          <form className={styles.form} onSubmit={credentialsHandler}>
            <input
              ref={emailRef}
              type="email"
              required
              placeholder="name@example.com"
            />
            <input
              ref={passwordRef}
              type="password"
              required
              placeholder="password"
            />
            <button>Sign in</button>
          </form>
        </div>
      </div>
    </CSSTransition>
  );
};

export default SignIn;
