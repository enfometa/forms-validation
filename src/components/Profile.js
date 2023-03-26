import { email, EmFormControl, EmFormErrorMessage, EmFormGroup, number, range, required, useEmForms } from "@enfometa/em-forms";

function Profile() {
  const forms = useEmForms({
    forms: [
      {
        name: "name",
        value: "",
        validators: [{ name: "required", func: required, message: "Name is required" }],
      },
      {
        name: "email",
        value: "",
        validators: [
          { name: "required", func: required, message: "Email is required" },
          { name: "email", func: email, message: "Invalid email" },
        ],
      },
      {
        name: "age",
        value: "",
        validators: [
          { name: "required", func: required, message: "Age is required" },
          { name: "number", func: number, message: "Age should be a valid number" },
          { name: "range", func: range, message: "Age should be between 30 and 50", param: { min: 30, max: 50 } },
        ],
      },
      {
        name: "details",
        value: "",
        validators: [
          { name: "required", func: required, message: "Details are required" },
        ],
      },
      {
        name: "active",
        value: true,
        validators: [],
      },
    ],
  });

  const onChangeName = (e) => {
    console.log(e)
  }

  const update = () => {
    if (forms.validate()) {
      const model = forms.toModel();
      console.log(model);
    }
  };
  return (
    <div className="contents">
      <div>Update profile</div>
      <EmFormGroup emForms={forms}>
        <div>
          <EmFormControl formName="name">
            <input type="text" name="name" placeholder="Full name" className="form" onChange={onChangeName}/>
          </EmFormControl>
          <div className="error-message">
            <EmFormErrorMessage formName="name" validatorName="required" />
          </div>
        </div>
        <div>
          <EmFormControl formName="email">
            <input type="email" name="email" placeholder="Email" className="form" />
          </EmFormControl>
          <div className="error-message">
            <EmFormErrorMessage formName="email" validatorName="required" />
            <EmFormErrorMessage formName="email" validatorName="email" />
          </div>
        </div>
        <div>
          <EmFormControl formName="age">
            <input type="text" name="age" placeholder="Age" className="form" />
          </EmFormControl>
          <div className="error-message">
            <EmFormErrorMessage formName="age" validatorName="required" />
            <EmFormErrorMessage formName="age" validatorName="number" />
            <EmFormErrorMessage formName="age" validatorName="range" />
          </div>
        </div>
        <div>
          <EmFormControl formName="details">
            <textarea placeholder="Details" className="form" style={{height: 60}} rows="5"></textarea>
          </EmFormControl>
          <div className="error-message">
            <EmFormErrorMessage formName="details" validatorName="required" />
          </div>
        </div>
        <div>
          <label htmlFor="active">Active</label>
          <EmFormControl formName="active">
            <input id="active" type="checkbox" name="active" className="chk" />
          </EmFormControl>
        </div>
      </EmFormGroup>

      <div className="btn-submit-container">
        <button className="btn-submit" onClick={update}>
          Update
        </button>
      </div>
    </div>
  );
}

export default Profile;
