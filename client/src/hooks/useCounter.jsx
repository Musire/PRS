import { useState } from "react";

const UseCounter = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }
    
    return { count, increaseCount };
}
 
export default UseCounter;