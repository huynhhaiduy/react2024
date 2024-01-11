import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Your name must be at least 5 characters!")
        .max(25, "Your name must be under 25 characters!")
        .required("You must fill in this section!"),
      email: Yup.string()
        .email("Invalid Email")
        .required("You must fill in this section!"),
      address: Yup.string().required("You must fill in this section!"),
      password: Yup.string()
        .min(8, "Your password must be at least 8 characters!")
        .required("You must fill in this section!")
        .required("You must fill in this section!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password does not match!")
        .required("You must fill in this section!"),
    }),
    onSubmit: values => {
        console.log(values)
    }
  });

  return (
    <div>
      <h3>Register Form</h3>
      <form onSubmit={formik.handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <p>{formik.errors.name}</p>
        )}

        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <p>{formik.errors.email}</p>
        )}   

        <label>Address: </label>
        <input
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        {formik.errors.address && formik.touched.address && (
          <p>{formik.errors.address}</p>
        )}

        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && formik.touched.password && (
          <p>{formik.errors.password}</p>
        )}

        <label>Confirm password: </label>
        <input
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p>{formik.errors.confirmPassword}</p>
        )}

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default RegisterForm;
