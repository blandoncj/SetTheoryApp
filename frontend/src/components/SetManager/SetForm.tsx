import { useState } from "react";

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
      <input
        type="text"
        placeholder="Set Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      />
      <input
        type="text"
        placeholder="Elements (comma-separated)"
        value={elements}
        onChange={(e) => setElements(e.target.value)}
        className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-cyan-500 text-white rounded-lg shadow-md hover:bg-cyan-400 cursor-pointer transition duration-200 ease-in-out"
      >
        Add Set
      </button>
    </form>
  );
};
