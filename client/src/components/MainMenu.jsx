import { useState } from "react";

const MainMenu = () => {

    const [clicked, setClicked] = useState(false)

    const toggleClick = () => {
        setClicked(prev => !prev)
    }

    const clickedStying = clicked ? 'bg-red-400' : 'bg-silver'

    return ( 
        <div className={`w-80 h-96 evenly-col border-2 border-deep rounded-lg p-8  text-deep ${clickedStying}`}>
            <h2 className="">PAPER ROCK SCISSORS</h2>
            <div className="bg-deep h-10 w-10 rounded-full"></div>
            <button onClick={toggleClick} className="px-3 py-2 bg-deep text-silver rounded-full w-40">START</button>
        </div>
     );
}
 
export default MainMenu;