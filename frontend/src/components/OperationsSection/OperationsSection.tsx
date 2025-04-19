import { CustomSelect } from "../CustomSelect";
import { SubmitButton } from "../SubmitButton";

interface Props {
  sets: { name: string }[];
  onExecuteOperation: (setA: string, setB: string, operation: string) => void;
  result: string[];
}

export const OperationsSection = ({
  sets,
  onExecuteOperation,
  result,
}:
  Props
) => {
  const setOptions = sets.map((set) => ({ value: set.name, label: set.name }));
  const operationOptions = [
    { value: "union", label: "Union (A ∪ B)" },
    { value: "intersection", label: "Intersection (A ∩ B)" },
    { value: "difference", label: "Difference (A - B)" },
    { value: "symmetricDifference", label: "Symmetric Difference (A Δ B)" },
  ];


  return (
    <div className="mt-5 p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4">Set Operations</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const setA = formData.get("setA") as string;
          const setB = formData.get("setB") as string;
          const operation = formData.get("operation") as string;
          onExecuteOperation(setA, setB, operation);
        }}
        className="flex flex-col space-y-4"
      >
        <CustomSelect
          name="setA"
          placeholder="Select Set A"
          options={setOptions}
          required
        />

        <CustomSelect
          name="setB"
          placeholder="Select Set B"
          options={setOptions}
          required
        />

        <CustomSelect
          name="operation"
          placeholder="Select Operation"
          options={operationOptions}
          required
        />

        <SubmitButton text="Execute Operation" />
      </form>

      <div className="mt-6 p-4 bg-gray-700 rounded-lg">
        <h3 className="text-lg font-bold text-white mb-2">Result</h3>
        <p className="text-gray-400">
          {result.length > 0 ? result.join(", ") : "No result to display"}
        </p>
      </div>
    </div>
  );
}; 
