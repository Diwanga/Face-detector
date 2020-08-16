import React from "react";

const Register = ({ onRouteChange }) => {
  return (
    <article class="br5 ba shadow-5  b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <main className="pa4 black-80">
        <form className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="name">
                Name
              </label>
              <input
                className="pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="name"
                id="name"
              />
            </div>

            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="emai-address-re">
                Email
              </label>
              <input
                className="pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="emai-address-re"
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="passwordre">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="passwordre"
              />
            </div>
            {/* <label className="pa0 ma0 lh-copy f6 pointer">
              <input type="checkbox" /> Remember me
            </label> */}
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Submit"
              onClick={() => onRouteChange("signin")}
            />
          </div>
        </form>
      </main>
    </article>
  );
};

export default Register;
