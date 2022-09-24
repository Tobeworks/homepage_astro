import { useState } from "react";

const TestFuc = ()  =>{
    const [count, setCount] = useState(1);
    console.log(count);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}
export default TestFuc;