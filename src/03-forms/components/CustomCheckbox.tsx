import { useField, ErrorMessage } from "formik";

import "../styles/styles.css";

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

const CustomCheckbox = ({ label, ...props }: Props) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  // console.log("field", field);
  // console.log("meta", meta);
  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
      {/* {meta.touched && meta.error && <span>{meta.error}</span>} */}
    </>
  );
};

export default CustomCheckbox;
