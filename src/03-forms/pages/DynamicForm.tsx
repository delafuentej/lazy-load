import { Formik, Form } from "formik";
import * as YUP from "yup";
import { CustomInput, CustomSelect } from "../components";

import formJson from "../data/custom-form.json";

//console.log(formJson);

const initialValues: { [key: string]: any } = {};
const requiredFileds: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let shema = YUP.string();

  for (const rule of input.validations) {
    if (rule.type === "required") {
      shema = shema.required("This field is required");
    }
    if (rule.type === "minLength") {
      shema = shema.min(
        (rule as any).value || 3,
        "This field must have 3 characters at least",
      );
    }
    if (rule.type === "maxLength") {
      shema = shema.max(
        (rule as any).value || 15,
        "This field must have 15 characters maximal",
      );
    }
    if (rule.type === "email") {
      shema = shema.email("Email not valid");
    }
  }
  requiredFileds[input.name] = shema;
}

const validationShema = YUP.object({ ...requiredFileds });

const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form Page</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationShema}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "email" || type === "password") {
                return (
                  <CustomInput
                    key={name}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    type={type as any}
                  />
                );
              }
              if (type === "select") {
                return (
                  <CustomSelect key={name} name={name} label={label}>
                    <option value="">Select an option</option>
                    {options?.map(({ id, label }) => (
                      <option key={id} value={label}>
                        {label}
                      </option>
                    ))}
                  </CustomSelect>
                );
              }
            })}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DynamicForm;
