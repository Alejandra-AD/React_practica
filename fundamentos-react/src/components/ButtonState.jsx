import { useState } from "react";

const ButtonState = ()=>{
    let counter = 0;
    // const arraySate = useState(0);
    // const numberSate = arraySate[0];
    // const functionState= arraySate[1];

    const [count, setCount] = useState(0);


    const handleClick = ()=>{
        // counter = counter ++;
        // console.log('handleclick diste click a button state');
        setCount(count + 1);
    }
    return <button onClick={handleClick}>{count}</button>;
}

export default ButtonState;