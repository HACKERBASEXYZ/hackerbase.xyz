"use client";
import Steps from "@/components/formUtils/Steps";
import BasicInfoForm from "@/components/forms/BasicInfoForm";
import DetailsForm from "@/components/forms/DetailsForm";
import FundingForm from "@/components/forms/FundingForm";
import PreviewForm from "@/components/forms/PreviewForm";
import TicketingForm from "@/components/forms/TicketingForm";
import { FormData } from "@/types/event";
import { useState } from "react";

const CreateEventPage = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    subtitle: "",
    image: "",
    address: "",
    city: "",
    country: "",
    startDate: "",
    endDate: "",
  });
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = (formData: FormData) => {
    console.log("form submitted:", formData);
  };

  const handleNextStep = (newData: FormData, final = false) => {
    setFormData({ ...formData, ...newData });

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePreviousStep = (newData: FormData) => {
    setFormData({ ...formData, ...newData });
    setCurrentStep((prev) => prev - 1);
  };

  const forms = [
    <BasicInfoForm key={0} formData={formData} next={handleNextStep} />,
    <DetailsForm
      key={1}
      formData={formData}
      next={handleNextStep}
      prev={handlePreviousStep}
    />,
    <FundingForm
      key={2}
      formData={formData}
      next={handleNextStep}
      prev={handlePreviousStep}
    />,
    <TicketingForm
      key={3}
      formData={formData}
      next={handleNextStep}
      prev={handlePreviousStep}
    />,
    <PreviewForm key={4} />,
  ];

  return (
    <div className="flex flex-col">
      <Steps currentStep={currentStep} />
      <div className="w-full lg:w-1/2 self-center mt-10 px-4">
        {forms[currentStep]}
      </div>
    </div>
  );
};

export default CreateEventPage;
