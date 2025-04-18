import { Header } from "./components/Header"
import { SetManager } from "./components/SetManager"

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white pt-10">
        <Header />
        <main className="p-8">
          <SetManager />
        </main>
      </div>

    </>
  )
}

export default App
