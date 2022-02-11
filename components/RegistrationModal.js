import { Fragment, useState } from "react";
import axios from "axios";

const RegistrationModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const submit = async () => {
    const response = await axios.post("/api/auth/register", {
      email,
      password,
      passwordConfirmation,
    });
    console.log(response);
  };

  return (
    <Fragment>
      <h2>Sign up</h2>
      <div>
        <form onSubmit={submit}>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            id="passwordconfirmation"
            type="password"
            placeholder="Enter password again"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
          <button>Sign up</button>
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <a href="javascript:;" onClick={() => props.showLogin()}>
          Log in
        </a>{" "}
      </p>
    </Fragment>
  );
};

export default RegistrationModal;
