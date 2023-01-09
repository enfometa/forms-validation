import { email, EmForm, EmFormError, EmFormErrorMessage, EmFormGroup, required, useEmForms } from "@enfometa/em-forms";

function Login() {
  const forms = useEmForms({
    forms: [
      {
        name: "email",
        value: "",
        validators: [
          { name: "required", func: required, message: "Email is required" },
          { name: "email", func: email, message: "Invalid email" },
        ],
      },
      {
        name: "password",
        value: "",
        validators: [{ name: "required", func: required, message: "Password is required" }],
      },
    ],
  });

  const login = () => {
    if (forms.validate()) {
      const model = forms.toModel();
      console.log(model);
    }
  };
  return (
    <div className="contents">
      <div>Login form</div>
      <EmFormGroup emForms={forms}>
        <div>
          <EmForm formName="email">
            <input type="email" name="email" placeholder="Email" className="form" />
          </EmForm>
          {/* <EmFormError formName="email" validatorName="required">
            <div>This is a custom error message</div>
          </EmFormError> */}
          <div className="error-message">
            <EmFormErrorMessage formName="email" validatorName="required" />
            <EmFormErrorMessage formName="email" validatorName="email" />
          </div>
        </div>
        <div>
          <EmForm formName="password">
            <input type="password" name="pswd" placeholder="Password" className="form" />
          </EmForm>
          <div className="error-message">
            <EmFormErrorMessage formName="password" validatorName="required" />
          </div>
        </div>
      </EmFormGroup>

      <div className="btn-submit-container">
        <button className="btn-submit" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
