import { Field } from "formik";
import FormError from "./FormError";

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
}

const FormField: React.FC<FormFieldProps> = ({ name, label, type }) => {
  return (
    <div className="flex flex-col mt-4">
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        className="p-2 border-black border rounded mt-1"
        placeholder={label}
        type={type || "text"}
      />
      <FormError name={name} />
    </div>
  );
};

export default FormField;
