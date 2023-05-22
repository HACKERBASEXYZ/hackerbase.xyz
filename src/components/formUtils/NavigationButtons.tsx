import { FormData } from "@/app/events/create/page";

interface NavigationButtonsProps {
  values: FormData;
  prev: (values: FormData) => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  values,
  prev,
}) => {
  return (
    <div className="flex flex-row gap-4 w-full mt-2">
      <button
        type="button"
        className="bg-orange-500 px-4 py-2 flex-1"
        onClick={() => prev(values)}
      >
        Previous
      </button>
      <button type="submit" className="bg-orange-500 px-4 py-2 flex-1">
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;
