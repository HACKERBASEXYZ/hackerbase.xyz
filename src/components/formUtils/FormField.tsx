import { Field } from "formik";
import FormError from "./FormError";

interface FormFieldProps {
  name: string;
  label: string;
}

const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        className="p-2 border-black border rounded"
        placeholder={label}
        type={name === "password" ? "password" : "text"}
      />
      <FormError name={name} />
    </div>
  );
};

export default FormField;
