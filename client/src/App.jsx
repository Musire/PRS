import MainMenu from "./components/MainMenu"
import ScoreCard from "./components/ScoreCard"

import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {

  const handleClick = () => {
    console.log('clicked from app')
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  )
}
