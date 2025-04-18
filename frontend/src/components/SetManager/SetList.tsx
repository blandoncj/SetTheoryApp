interface Props {
  sets: { name: string; elements: string[] }[];
  onRemoveSet: (index: number) => void;
}

export const SetList = ({ sets, onRemoveSet }: Props) => {
  return (
    <ul className="space-y-4">
      {sets.map((set, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md"
        >
          <div>
            <h3 className="text-lg font-bold text-white">{set.name}</h3>
            <p className="text-sm text-gray-400">
              {set.elements.length > 0 ? set.elements.join(", ") : "No elements"}
            </p>
          </div>
          <button
            onClick={() => onRemoveSet(index)}
            className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-400 cursor-pointer transition duration-200 ease-in-out"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}
