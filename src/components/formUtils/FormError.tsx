import { ErrorMessage } from "formik";

interface FormErrorProps {
  name: string;
}

const FormError: React.FC<FormErrorProps> = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      component="div"
      className="text-sm text-red-500 mt-1"
    />
  );
};

export default FormError;
