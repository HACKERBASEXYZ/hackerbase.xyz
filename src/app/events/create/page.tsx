"use client";
import BasicInfoForm from "@/components/forms/BasicInfoForm";
import DetailsForm from "@/components/forms/DetailsForm";
import { useState } from "react";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const CreateEventPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
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
  ];

  return (
    <div className="flex flex-col">
      <h1>Create Event</h1>
      <h2>This is the page that we use to create your new event</h2>
      {forms[currentStep]}
    </div>
  );
};

export default CreateEventPage;
