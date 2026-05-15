import { useField, ErrorMessage } from "formik";

import "../styles/styles.css";

interface Props {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  placeholder?: string;
  [x: string]: any;
}

const CustomInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  //   console.log("field", field);
  //   console.log("meta", meta);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="input" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && <span>{meta.error}</span>} */}
    </>
  );
};

export default CustomInput;
