import React from "react";
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Field required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      }
      if (!values.password) errors.password = "Field required";
      return errors;
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
  });

  return (
    <div>
      <div>
        <h2>Assignment: Build a Formik Form</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          name="email"
          type="text"
          id="emailField"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div style={{ color: "red" }} id="emailError">
            {formik.errors.email}
          </div>
        ) : null}
        <div>Password</div>
        <input
          name="password"
          type="text"
          id="pswField"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div style={{ color: "red" }} id="pswError">
            {formik.errors.password}
          </div>
        ) : null}

        <button type="submit" id="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
