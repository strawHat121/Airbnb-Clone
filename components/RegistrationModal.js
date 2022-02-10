import { Fragment } from "react";

const RegistrationModal = (props) => {
  return (
    <Fragment>
      <h2>Sign up</h2>
      <div>
        <form
          onSubmit={(e) => {
            alert("Log in");
            e.preventDefault();
          }}
        >
          <input id="email" type="email" placeholder="Email address" />
          <input id="password" type="password" placeholder="Password" />
          <input
            id="passwordconfirmation"
            type="password"
            placeholder="Enter password again"
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
