import MainMenu from "./components/MainMenu"
import ScoreCard from "./components/ScoreCard"


export default function App() {

  const handleClick = () => {
    console.log('clicked from app')
  }

  return (
    <div className="centered w-screen h-screen flex gap-x-20">
      <MainMenu handleClick={handleClick} />
      <ScoreCard />
    </div>
  )
}
