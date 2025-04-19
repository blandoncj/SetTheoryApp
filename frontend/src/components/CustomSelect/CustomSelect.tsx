interface Props {
  name: string;
  options: { value: string, label: string }[];
  placeholder: string;
  required?: boolean;
  className?: string;
}

export const CustomSelect = ({ name, options, placeholder, required, className }: Props) => {
  const baseClasses =
    "px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300";

  return (
    <select
      name={name}
      className={`${baseClasses} ${className}`}
      required={required}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
