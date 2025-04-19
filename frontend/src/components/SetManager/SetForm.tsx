import { useState } from "react";
import { CustomInput } from "../CustomInput";
import { SubmitButton } from "../SubmitButton";

interface Props {
  onAddSet: (name: string, elements: string[]) => void;
}

export const SetForm = ({ onAddSet }: Props) => {
  const [name, setName] = useState("");
  const [elements, setElements] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const elementsArray = elements.split(",").map((el) => el.trim());
    onAddSet(name, elementsArray);
    setName("");
    setElements("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-6">
      <CustomInput
        placeholder="Set Name" value={name} onChange={(e) => setName(e.target.value)} required
      />
      <CustomInput
        placeholder="Elements (comma-separated)" value={elements} onChange={(e) => setElements(e.target.value)} required
      />
      <SubmitButton text="Add Set" />
    </form>
  );
};
