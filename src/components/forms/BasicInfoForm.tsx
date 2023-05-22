import { Formik, Form } from "formik";
import { FormData } from "@/app/events/create/page";
import * as Yup from "yup";
import FormField from "../formUtils/FormField";
import NextButton from "../formUtils/NextButton";

interface BasicInfoFormProps {
  formData: FormData;
  next: (newData: FormData, final: boolean) => void;
}

const BasicInfoFormValidationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
});

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ formData, next }) => {
  const handleSubmit = (values: FormData) => {
    next(values, false);
  };
  return (
    <Formik
      initialValues={formData}
      onSubmit={handleSubmit}
      validationSchema={BasicInfoFormValidationSchema}
    >
      <Form className="flex flex-col w-1/3 self-center">
        <FormField name="firstName" label="First Name" />
        <FormField name="lastName" label="Last Name" />
        <NextButton />
      </Form>
    </Formik>
  );
};

export default BasicInfoForm;
