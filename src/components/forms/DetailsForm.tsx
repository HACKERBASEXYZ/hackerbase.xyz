import { Formik, Form } from "formik";
import FormField from "../formUtils/FormField";
import NavigationButtons from "../formUtils/FormNavigation";
import * as Yup from "yup";
import { FormData } from "@/types/event";
import FormHeader from "../formUtils/FormHeader";

interface DetailsFormProps {
  formData: FormData;
  next: (newData: FormData, final: boolean) => void;
  prev: (newData: FormData) => void;
}

const DetailsFormValidationSchema = Yup.object({
  type: Yup.string().required("Type is required"),
  tags: Yup.string().required("Tags are required"),
  summary: Yup.string().required("Summary is required"),
  description: Yup.string().required("Description is required"),
  organizers: Yup.string().required("Oraganizers names are required"),
  organizersDetails: Yup.string().required(
    "Oraganizers contact info is required"
  ),
  sponsors: Yup.string(),
});

const DetailsForm: React.FC<DetailsFormProps> = ({ formData, next, prev }) => {
  const handleSubmit = (values: FormData) => {
    next(values, false);
  };
  return (
    <Formik
      initialValues={formData}
      onSubmit={handleSubmit}
      validationSchema={DetailsFormValidationSchema}
    >
      {({ values }) => (
        <Form className="flex flex-col">
          <FormHeader
            title="Event details"
            subtitle="Please enter the details of your event"
            icon="🖋️"
          >
            <FormField name="type" label="Type" />
            <FormField name="tags" label="Tags" />
            <FormField name="summary" label="Summary" />
            <FormField name="description" label="Description" />
          </FormHeader>
          <FormHeader
            title="Organizers & Sponsors"
            subtitle="Please enter the details of your event"
            icon="️👨‍💻"
          >
            <FormField name="organizers" label="Organizers Name" />
            <FormField name="organizersDetails" label="Organizers Details" />
            <FormField name="sponsors" label="Sponsors" />
          </FormHeader>
          <NavigationButtons values={values} prev={prev} />
        </Form>
      )}
    </Formik>
  );
};

export default DetailsForm;
