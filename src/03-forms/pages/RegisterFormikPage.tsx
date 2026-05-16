import { Formik, Form } from "formik";
import * as YUP from "yup";
import { CustomInput } from "../components";

import "../styles/styles.css";

const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={YUP.object({
          name: YUP.string()
            .min(2, "This field must have 2 characters at least")
            .max(15, "This field must have 15 characters maximal")
            .required("This field is required"),
          email: YUP.string()
            .email("Email not valid")
            .min(10, "This field must have  10 characters at least")
            .required("This field is required"),
          password1: YUP.string()
            .min(6, "This field must have 6 character at least")
            .required(),
          password2: YUP.string()
            .oneOf([YUP.ref("password1")], "Passwords not equals")
            .required("is field is required"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <CustomInput label={"Name"} name="name" placeholder="Name" />

            <CustomInput
              label={"Email Address"}
              name="email"
              type="email"
              placeholder="Email"
            />

            <CustomInput
              label={"Password"}
              name="password1"
              type="password"
              placeholder="password"
            />

            <CustomInput
              label={"Repeat Password"}
              name="password2"
              type="password"
              placeholder="password"
            />

            <button type="submit">Submit</button>
            <button type="reset" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormikPage;
