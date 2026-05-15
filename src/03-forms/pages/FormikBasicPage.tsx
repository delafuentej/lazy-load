import { useFormik } from "formik";
import type { FormikErrors } from "formik";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

const FormikBasicPage = () => {
  const validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName) {
      errors.firstName = "This field is required";
    } else if (firstName.length <= 4) {
      errors.firstName = "This field must be 4 characters at least";
    }

    if (!lastName) {
      errors.lastName = "This field is required";
    } else if (lastName.length <= 4) {
      errors.lastName = "This field must be 4 characters at least";
    }

    if (!email) {
      errors.email = "This field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: validate,
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    formik;
  const { firstName, lastName, email } = values;
  return (
    <div>
      <h1>Formik Basic Page</h1>

      <form action="" noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormikBasicPage;
