import { useState } from "react";
import { SetForm } from "./SetForm";
import { SetList } from "./SetList";
import { OperationsSection } from "../OperationsSection";
import { getSets } from "../../services";

export const SetManager = () => {
  const [sets, setSets] = useState<{ name: string; elements: string[] }[]>([]);
  const [result, setResult] = useState<string[]>([]);


  const addSet = (name: string, elements: string[]) => {
    setSets([...sets, { name, elements }]);
  };

  const removeSet = (index: number) => {
    setSets(sets.filter((_, i) => i !== index));
  };

  const preparePayload = (sets: { name: string; elements: string[] }[]) => {
    return {
      sets: sets.map((set) =>
        Array.from(new Set(set.elements.map((el) => parseInt(el, 10))))
      ),
    };
  };

  const executeOperation = async (setA: string, setB: string, operation: string) => {
    try {
      const payload = preparePayload([
        sets.find((set) => set.name === setA)!,
        sets.find((set) => set.name === setB)!,
      ]);

      const result = await getSets(payload, operation)
      setResult(result);
    } catch (error) {
      console.error("Error executing operation:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-white mb-4">Manage Sets</h2>
      <SetForm onAddSet={addSet} />
      <SetList sets={sets} onRemoveSet={removeSet} />
      <OperationsSection
        sets={sets.map((set) => ({ name: set.name }))}
        onExecuteOperation={executeOperation}
        result={result}
      />
    </div>
  );
}; 
