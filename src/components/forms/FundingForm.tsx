import { Formik, Form } from "formik";
import FormField from "../formUtils/FormField";
import NavigationButtons from "../formUtils/FormNavigation";
import * as Yup from "yup";
import { FormData } from "@/types/event";
import FormHeader from "../formUtils/FormHeader";

interface FundingFormProps {
  formData: FormData;
  next: (newData: FormData, final: boolean) => void;
  prev: (newData: FormData) => void;
}

const FundingFormValidationSchema = Yup.object({
  requestedFunding: Yup.number().required("Requested funding is required"),
  rewards: Yup.string(),
});

const FundingForm: React.FC<FundingFormProps> = ({ formData, next, prev }) => {
  const handleSubmit = (values: FormData) => {
    next(values, false);
  };
  return (
    <Formik
      initialValues={formData}
      onSubmit={handleSubmit}
      validationSchema={FundingFormValidationSchema}
    >
      {({ values }) => (
        <Form className="flex flex-col">
          <FormHeader
            title="Funding informations"
            subtitle="Please enter the details of your event"
            icon="💶"
          >
            <FormField
              name="requestedFunding"
              label="Requested funding"
              type="number"
            />
          </FormHeader>
          <FormHeader
            title="Rewards"
            subtitle="Please enter the details of your event"
            icon="️🏆"
          >
            <FormField name="rewardTiers" label="Reward tiers" />
          </FormHeader>
          <NavigationButtons values={values} prev={prev} />
        </Form>
      )}
    </Formik>
  );
};

export default FundingForm;
