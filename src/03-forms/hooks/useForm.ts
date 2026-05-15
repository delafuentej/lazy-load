import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";

export const useForm = <T>(initialState: T) => {
  const [formData, setFormData] = useState(initialState);
  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    console.log(ev.target.value);
    setFormData((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };
  const onSubmit = (ev: SubmitEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(formData);
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email); //boolean value
  };

  const resetForm = () => {
    setFormData({ ...initialState });
  };

  return { ...formData, formData, onChange, onSubmit, resetForm, isValidEmail };
};
