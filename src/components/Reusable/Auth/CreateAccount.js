import styles from "./CreateAccount.module.css";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import { useState } from "react";
const CreateAccount = (props) => {
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successState, setSuccessState] = useState(false);
  const [successMessage, setsuccessMessage] = useState("");
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const password2InputRef = useRef();

  function changeHandler() {
    setErrorState(false);
    setErrorMessage("");
    setSuccessState(false);
    setsuccessMessage("");
  }

  async function submitHandler(e) {
    e.preventDefault();
    const nameInput = nameInputRef.current.value;
    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;
    const password2Input = password2InputRef.current.value;

    if (
      nameInput.trim() === "" ||
      nameInput.trim().length === 0 ||
      !emailInput.includes("@") ||
      !emailInput ||
      passwordInput.trim().length < 7
    ) {
      setErrorMessage("Invalid inputs,password must be more than 7 chars!");
      setErrorState(true);
      return;
    }

    if (passwordInput !== password2Input) {
      setErrorMessage("Passwords must match!");
      setErrorState(true);
      return;
    }

    // PASSED VALIDATION SEND REQUEST TO BACKEND
    setErrorState(false);
    setErrorMessage("");

    const response = await fetch("/api/create-account", {
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        name: nameInput,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json();

    if (!response.ok) {
      setErrorState(true);
      setErrorMessage(resData.message);
      return;
    }

    setSuccessState(true);
    setsuccessMessage("Account created!");

    setTimeout(() => {
      nameInputRef.current.value = "";
      emailInputRef.current.value = "";
      passwordInputRef.current.value = "";
      password2InputRef.current.value = "";
      setSuccessState(false);
      setsuccessMessage("");
      props.signIn();
    }, 2000);
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
      <div className={styles.createContainer}>
        <form className={styles.createForm} onSubmit={submitHandler}>
          <input
            ref={nameInputRef}
            type="text"
            placeholder="name"
            required
            onChange={changeHandler}
          />
          <input
            ref={emailInputRef}
            type="email"
            placeholder="name@example.com"
            required
            onChange={changeHandler}
          />
          <input
            ref={passwordInputRef}
            type="password"
            placeholder="password"
            required
            onChange={changeHandler}
          />
          <input
            ref={password2InputRef}
            type="password"
            placeholder="repeat password"
            required
            onChange={changeHandler}
          />
          {errorState && <p className={styles.error}>{errorMessage}</p>}
          {successState && <p className={styles.success}>{successMessage}</p>}
          <button>Create Account</button>
        </form>
      </div>
    </CSSTransition>
  );
};

export default CreateAccount;
