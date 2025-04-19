interface Props {
  className?: string;
  text: string;
}

export const SubmitButton = ({ className, text }: Props) => {
  const baseClasses =
    "px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 cursor-pointer transition duration-200 ease-in-out";

  return (
    <button
      type="submit"
      className={`${baseClasses} ${className}`}
    >
      {text}
    </button>
  )
}
