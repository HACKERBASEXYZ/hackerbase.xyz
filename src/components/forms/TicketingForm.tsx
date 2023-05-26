import { Formik, Form } from "formik";
import FormField from "../formUtils/FormField";
import NavigationButtons from "../formUtils/FormNavigation";
import * as Yup from "yup";
import { FormData } from "@/types/event";
import FormHeader from "../formUtils/FormHeader";

interface TicketingFormProps {
  formData: FormData;
  next: (newData: FormData, final: boolean) => void;
  prev: (newData: FormData) => void;
}

const TicketingFormValidationSchema = Yup.object({
  visibility: Yup.string().required("Visibility is required"),
  ticketName: Yup.string().required("Ticket name is required"),
  ticketPrice: Yup.number().required("Ticket price is required"),
  ticketQuantity: Yup.number().required("Ticket quantity is required"),
  promoCodes: Yup.string(),
});

const TicketingForm: React.FC<TicketingFormProps> = ({
  formData,
  next,
  prev,
}) => {
  const handleSubmit = (values: FormData) => {
    next(values, false);
  };
  return (
    <Formik
      initialValues={formData}
      onSubmit={handleSubmit}
      validationSchema={TicketingFormValidationSchema}
    >
      {({ values }) => (
        <Form className="flex flex-col">
          <FormHeader
            title="Event visibility"
            subtitle="Please enter the details of your event"
            icon="👀"
          >
            <FormField name="visibility" label="Open / Closed / Paid / Free" />
          </FormHeader>
          <FormHeader
            title="Ticketing"
            subtitle="Please enter the details of your event"
            icon="️🎫"
          >
            <FormField name="ticketName" label="Ticket Name" />
            <FormField name="ticketPrice" label="Ticket Price" />
            <FormField name="ticketQuantity" label="Ticket quantity" />
          </FormHeader>
          <FormHeader
            title="Promo codes"
            subtitle="Please enter the details of your event"
            icon="️🔐"
          >
            <FormField name="promoCodes" label="Promo codes" />
          </FormHeader>
          <NavigationButtons values={values} prev={prev} />
        </Form>
      )}
    </Formik>
  );
};

export default TicketingForm;
