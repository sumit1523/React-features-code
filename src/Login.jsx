import { Form, Field } from "react-final-form";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be at least 6 characters";
  }
  return errors;
};

// Separate handleSubmit function
const handleSubmit = (values) => {
  console.log("Form values:", values);
  // Here you can add logic to send data to a server, update state, etc.
};

const Login = () => (
  <Form
    onSubmit={handleSubmit}
    validate={validate}
    render={(
      { handleSubmit, submitting, errors } // Remove unused values
    ) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" id="email" />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field
            name="password"
            component="input"
            type="password"
            id="password"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        {Object.keys(errors).length > 0 && ( // Simplified error display
          <div>Please correct the errors above.</div>
        )}

        <button type="submit" disabled={submitting}>
          Submit
        </button>
      </form>
    )}
  />
);
export default Login;
