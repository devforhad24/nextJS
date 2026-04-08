import { useState } from "react";
import Child from "./Child";


function App(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <h1>Welcome nextJS</h1>
      <Child title="ReactJS" />
      <Child title="nextJS" />
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count+1)}>+</button>
      <button onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}

export default App;