export const Header = () => {
  const headerClasses =
    "flex items-center justify-center p-6 mx-20 rounded-lg border-2 border-cyan-300 bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow-lg";

  const titleClasses = "font-semibold text-4xl text-white tracking-wide";


  return (
    <header className={headerClasses}>
      <h1 className={titleClasses}>Set Theory App</h1>
    </header>
  )
}
