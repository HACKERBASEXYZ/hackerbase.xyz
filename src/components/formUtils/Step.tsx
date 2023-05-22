interface StepProps {
  index: number;
  currentStep: number;
}

const Step: React.FC<StepProps> = ({ index, currentStep }) => {
  const steps = ["Basics", "Details", "Funding", "Tickets", "Preview"];
  const icons = ["✍", "📝", "💰", "🎟", "👀"];
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        index == currentStep ? "border-b-2 border-green-500" : ""
      }`}
    >
      <span
        className={`text-lg lg:text-xl ${
          index == currentStep && "text-xl lg:text-2xl"
        }`}
      >
        {icons[index]}
      </span>
      <h1 className={`lg:text-lg ${index == currentStep && "font-bold"}`}>
        {steps[index]}
      </h1>
    </div>
  );
};

export default Step;
