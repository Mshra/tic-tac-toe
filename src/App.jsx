import Board from "./components/Board"
import Header from "./components/Header"

export default function App() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 h-screen flex-col items-center">
      <Header />
      <div className="flex justify-center items-center mx-80 py-10">
        <Board />
      </div>
    </div>
  )
}
