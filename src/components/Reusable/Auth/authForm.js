import styles from "./authForm.module.css";
import { useState } from "react";
import SignIn from "./SignIn";
import CreateAccount from "./CreateAccount";
const AuthForm = (props) => {
  const [isCreate, setCreate] = useState(false);
  const [isSignup, setIsSignup] = useState(true);

  function showSignInHandler() {
    setCreate(false);
    setIsSignup(true);
  }
  function showCreateHandler() {
    setIsSignup(false);
    setCreate(true);
  }

  return (
    <div className={styles.authFormContainer}>
      <div className={styles.menu}>
        <div
          className={`${styles.menuItem} ${
            isSignup ? styles.itemActive : null
          }`}
          onClick={showSignInHandler}
        >
          Sign In
        </div>
        <div
          className={`${styles.menuItem} ${
            isCreate ? styles.itemActive : null
          }`}
          onClick={showCreateHandler}
        >
          Create Account
        </div>
      </div>
      <SignIn shown={isSignup} hideModal={props.onHide} />
      <CreateAccount shown={isCreate} signIn={showSignInHandler} />
    </div>
  );
};

export default AuthForm;
