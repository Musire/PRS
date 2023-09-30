import { useState } from "react";

const ScoreCard = () => {
    const [count, setCount] = useState(0)
    const [open, setOpen] = useState(0)
    

    const increaseCount = () => {
        setCount(count + 1)
    }

    const toggleOpen = () => {
        setOpen(prev => !prev)
    }

    return ( 
        <div className="spaced-col h-96">
            <h3 className="text-6xl">{count}</h3>
            <button onClick={increaseCount} className="bg-silver px-3 py-2 w-80 h-10 text-deep">increase</button>
            <button onClick={toggleOpen} className="bg-silver px-3 py-2 w-80 h-10 text-deep">open</button>
            { !open ? null : 
            <aside className="bg-silver w-40 h-56"> hello</aside>
            }
        </div>

     );
}
 
export default ScoreCard;