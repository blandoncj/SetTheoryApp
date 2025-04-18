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
        <select
          name="setA"
          className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          required
        >
          <option value="" disabled>
            Select Set A
          </option>
          {sets.map((set, index) => (
            <option key={index} value={set.name}>
              {set.name}
            </option>
          ))}
        </select>

        <select
          name="setB"
          className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          required
        >
          <option value="" disabled>
            Select Set B
          </option>
          {sets.map((set, index) => (
            <option key={index} value={set.name}>
              {set.name}
            </option>
          ))}
        </select>

        <select
          name="operation"
          className="px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          required
        >
          <option value="union">Union (A ∪ B)</option>
          <option value="intersection">Intersection (A ∩ B)</option>
          <option value="difference">Difference (A - B)</option>
          <option value="symmetricDifference">
            Symmetric Difference (A Δ B)
          </option>
        </select>

        <button
          type="submit"
          className="px-4 py-2 bg-cyan-500 text-white rounded-lg shadow-md hover:bg-cyan-400 cursor-pointer transition duration-200 ease-in-out"
        >
          Execute Operation
        </button>
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
