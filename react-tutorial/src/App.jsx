import { useState } from "react";
import Header from "./Header";


function App(){
  const [count, setCount] = useState(0);

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)}>+</button>

      <Header/>
      <Header/>
      <Header/>
      <Header/>
    </div>
  )
}

export default App;