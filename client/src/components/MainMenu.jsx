import { useState } from "react";
import ScoreCard from "./ScoreCard";

const MainMenu = () => {

    const [clicked, setClicked] = useState(false)

    const toggleClick = () => {
        setClicked(prev => !prev)
    }

    const clickedStying = clicked ? 'bg-red-400' : 'bg-silver'

    return (
        <div className="centered w-screen h-screen flex gap-x-20">
            
            <ScoreCard />
        </div>
     );
}
 
export default MainMenu;