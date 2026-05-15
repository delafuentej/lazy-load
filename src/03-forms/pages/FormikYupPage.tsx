import { useFormik } from "formik";
import * as YUP from "yup";

// interface FormValues {
// firstName: string;
// lastName: string;
// email: string;
// }

const FormikYupPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: YUP.object({
      firstName: YUP.string()
        .min(3, "This field must have 3 characters at least")
        .required("This field is required"),
      lastName: YUP.string()
        .min(4, "This field must have 3 characters at least")
        .required("This field is required"),
      email: YUP.string()
        .email("Email not valid")
        .required("This field is required"),
    }),
  });

  const {
    values,
    // handleChange,
    handleSubmit,
    // handleBlur,
    touched,
    errors,
    getFieldProps,
  } = formik;
  const { firstName, lastName, email } = values;
  return (
    <div>
      <h1>Formik Yup Page</h1>

      <form action="" noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...getFieldProps("firstName")}
          // name="firstName"
          // placeholder="First Name"
          // value={firstName}
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...getFieldProps("lastName")}
          // name="lastName"
          // placeholder="Last Name"
          // value={lastName}
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          {...getFieldProps("email")}
          // name="email"
          // placeholder="Email"
          // value={email}
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikYupPage;
