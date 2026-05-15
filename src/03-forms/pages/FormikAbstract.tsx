import { Formik, Form } from "formik";
import { CustomCheckbox, CustomInput, CustomSelect } from "../components";

import * as YUP from "yup";

const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract Page</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={YUP.object({
          firstName: YUP.string()
            .min(3, "This field must have 3 characters at least")
            .required("This field is required"),
          lastName: YUP.string()
            .min(4, "This field must have 3 characters at least")
            .required("This field is required"),
          email: YUP.string()
            .email("Email not valid")
            .required("This field is required"),
          terms: YUP.boolean().oneOf([true], "Conditions must be accepted"),
          jobType: YUP.string()
            .notOneOf(["it-junior"], "IT-Junior cannot be selected")
            .required("This field is required"),
        })}
      >
        {(formik) => (
          <Form>
            <CustomInput
              label={"First Name"}
              name={"firstName"}
              placeholder={"First Name"}
            />
            {/* <label htmlFor="firstName">First Name</label> */}
            {/* <Field type="text" name="firstName" placeholder="First Name" /> */}
            {/* <ErrorMessage name="firstName" component={"span"} /> */}

            <CustomInput
              label={"Last Name"}
              name={"lastName"}
              placeholder={"Last Name"}
            />

            {/* <label htmlFor="lastName">Last Name</label> */}
            {/* <Field type="text" name="lastName" placeholder="Last Name" /> */}
            {/* <ErrorMessage name="lastName" component={"span"} /> */}

            <CustomInput
              label={"Email Address"}
              name={"email"}
              type={"email"}
              placeholder={"Email Address"}
            />

            {/* <label htmlFor="email">Email</label> */}
            {/* <Field type="email" name="email" placeholder="Email Address" /> */}
            {/* <ErrorMessage name="email" component={"span"} /> */}

            <CustomCheckbox
              label={"Terms & Conditions of use"}
              name={"terms"}
            />
            {/* <label> */}
            {/* Terms & Conditions of use */}
            {/* <Field type="checkbox" name="terms" /> */}
            {/* </label> */}
            {/* <ErrorMessage name="terms" component={"span"} /> */}

            <CustomSelect label={"Job Type"} name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </CustomSelect>

            {/* <label htmlFor="jobType">Job Type</label> */}
            {/* <Field as="select" name="jobType"> */}
            {/* <option value="">Pick something</option> */}
            {/* <option value="developer">Developer</option> */}
            {/* <option value="designer">Designer</option> */}
            {/* <option value="it-senior">IT Senior</option> */}
            {/* <option value="it-junior">IT Junior</option> */}
            {/* </Field> */}
            {/* <ErrorMessage name="jobType" component={"span"} /> */}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikAbstract;
