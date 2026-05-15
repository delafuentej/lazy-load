import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

const RegisterPage = () => {
  const {
    formData,
    name,
    email,
    password1,
    password2,
    onChange,
    onSubmit,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  //   const { name, email, password1, password2 } = formData;
  return (
    <div>
      <h1>RegisterPage</h1>

      <form action="" noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        />
        {name.trim().length <= 0 && <span>This field is needed</span>}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>Email not valid</span>}
        <input
          type="password"
          placeholder="Password"
          name="password1"
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length >= 0 && password1.trim().length <= 6 && (
          <span>This field is needed</span>
        )}
        <input
          type="password"
          placeholder="Repeat password"
          name="password2"
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length >= 0 && password2.trim().length <= 6 && (
          <span>This field is needed</span>
        )}
        {password2.trim().length > 0 && password1 !== password2 && (
          <span>Passwords not equals</span>
        )}
        <button type="submit">Submit</button>

        <button type="reset" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
