import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "../formUtils/FormField";
import NextButton from "../formUtils/NextButton";
import { FormData } from "@/types/event";
import FormHeader from "../formUtils/FormHeader";

interface BasicInfoFormProps {
  formData: FormData;
  next: (newData: FormData, final: boolean) => void;
}

const BasicInfoFormValidationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  subtitle: Yup.string().required("Subtitle is required"),
  image: Yup.string().required("Image is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country is required"),
  address: Yup.string().required("Address is required"),
  startDate: Yup.date().required("Start date is required"),
  endDate: Yup.date().required("End date is required"),
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
      <Form className="flex flex-col">
        <FormHeader
          title="Image"
          subtitle="lorem ipsum dolor sit amet. Quantanum ist elum quantorum elum das autos"
          icon="📸"
        >
          <FormField name="image" label="Image url" />
        </FormHeader>
        <FormHeader
          title="Basic informations"
          subtitle="lorem ipsum dolor sit amet. Quantanum ist elum quantorum elum das autos"
          icon="ℹ️"
        >
          <FormField name="title" label="Title" />
          <FormField name="subtitle" label="Subtitle" />
        </FormHeader>

        <FormHeader
          title="Location"
          subtitle="lorem ipsum dolor sit amet. Quantanum ist elum quantorum elum das autos"
          icon="📍"
        >
          <FormField name="country" label="Country" />
          <FormField name="city" label="City" />
          <FormField name="address" label="Address" />
        </FormHeader>

        <FormHeader
          title="Date & Time"
          subtitle="lorem ipsum dolor sit amet. Quantanum ist elum quantorum elum das autos"
          icon="📅"
        >
          <FormField name="startDate" label="Start Date" type="date" />
          <FormField name="endDate" label="End Date" type="date" />
        </FormHeader>
        <NextButton />
      </Form>
    </Formik>
  );
};

export default BasicInfoForm;
