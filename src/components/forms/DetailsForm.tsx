import { FormData } from "@/app/events/create/page";
import { Formik, Form } from "formik";
import FormField from "../formUtils/FormField";
import NavigationButtons from "../formUtils/NavigationButtons";
import * as Yup from "yup";

interface DetailsFormProps {
  formData: FormData;
  next: (newData: FormData, final: boolean) => void;
  prev: (newData: FormData) => void;
}

const DetailsFormValidationSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const DetailsForm: React.FC<DetailsFormProps> = ({ formData, next, prev }) => {
  const handleSubmit = (values: FormData) => {
    next(values, true);
  };
  return (
    <Formik
      initialValues={formData}
      onSubmit={handleSubmit}
      validationSchema={DetailsFormValidationSchema}
    >
      {({ values }) => (
        <Form className="flex flex-col w-1/3 self-center">
          <FormField name="email" label="Email" />
          <FormField name="password" label="Password" />
          <NavigationButtons values={values} prev={prev} />
        </Form>
      )}
    </Formik>
  );
};

export default DetailsForm;
