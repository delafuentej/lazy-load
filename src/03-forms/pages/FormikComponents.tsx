import {
  // useFormik,
  Formik,
  Field,
  Form,
  ErrorMessage,
} from "formik";
import * as YUP from "yup";

const FormikComponents = () => {
  // const formik = useFormik({
  // initialValues: {
  // firstName: "",
  // lastName: "",
  // email: "",
  // },
  // onSubmit: (values) => {
  // console.log(values);
  // },
  // validationSchema: YUP.object({
  // firstName: YUP.string()
  // .min(3, "This field must have 3 characters at least")
  // .required("This field is required"),
  // lastName: YUP.string()
  // .min(4, "This field must have 3 characters at least")
  // .required("This field is required"),
  // email: YUP.string()
  // .email("Email not valid")
  // .required("This field is required"),
  // }),
  // });

  // const {
  // values,
  // handleChange,
  // handleSubmit,
  // handleBlur,
  // touched,
  // errors,
  // getFieldProps,
  // } = formik;

  return (
    <div>
      <h1>Formik Components Page</h1>

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
            <label htmlFor="firstName">First Name</label>
            <Field type="text" name="firstName" placeholder="First Name" />
            <ErrorMessage name="firstName" component={"span"} />
            {/* <input type="text" {...getFieldProps("firstName")} /> */}
            {/* {touched.firstName && errors.firstName && ( 
/ <span>{errors.firstName}</span>
)}*/}
            <label htmlFor="lastName">Last Name</label>
            <Field type="text" name="lastName" placeholder="Last Name" />
            <ErrorMessage name="lastName" component={"span"} />
            {/* <input type="text" {...getFieldProps("lastName")} /> */}
            {/* {touched.lastName && errors.lastName && <span>{errors.lastName}</span>} */}
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="Email Address" />
            <ErrorMessage name="email" component={"span"} />

            <label>
              Terms & Conditions of use
              <Field type="checkbox" name="terms" />
            </label>
            <ErrorMessage name="terms" component={"span"} />
            {/* <input type="email" {...getFieldProps("email")} /> */}
            {/* {touched.email && errors.email && <span>{errors.email}</span>} */}

            <label htmlFor="jobType">Job Type</label>
            <Field as="select" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </Field>
            <ErrorMessage name="jobType" component={"span"} />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikComponents;
