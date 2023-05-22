import Step from "./Step";

interface StepsProps {
  currentStep: number;
}

const Steps: React.FC<StepsProps> = ({ currentStep }) => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 lg:gap-20 shadow-lg py-4">
      <Step index={0} currentStep={currentStep} />
      <Step index={1} currentStep={currentStep} />
      <Step index={2} currentStep={currentStep} />
      <Step index={3} currentStep={currentStep} />
      <Step index={4} currentStep={currentStep} />
    </div>
  );
};

export default Steps;
