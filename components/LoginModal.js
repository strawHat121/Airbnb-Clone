import { Fragment } from "react";

const LoginModal = (props) => {
  return (
    <Fragment>
      <h2>Log in</h2>
      <div>
        <form
          onSubmit={(e) => {
            alert("Sign up");
            e.preventDefault();
          }}
        >
          <input id="email" type="email" placeholder="Email address" />
          <input id="password" type="password" placeholder="Password" />
          <button>Log in</button>
        </form>
      </div>
      <p>
        Dont have an account yet?{" "}
        <a href="javascript:;" onClick={() => props.showSignup()}>
          Sign Up
        </a>{" "}
      </p>
    </Fragment>
  );
};

export default LoginModal;
