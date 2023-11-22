import './App.css';
import { useState } from 'react';
import ThirdComponent from './Components/ThirdComponent';
import MapData from './Components/MapData';
import UserInformation from './Components/UserInformation';
import FormData from './Components/FormData';
import JustInfo from './Components/JustInfo';

function App() {
  const[count,setCount] = useState(1);

  const addCount = () => {
    setCount(count+1);
  }

  const reduceCount = ()=>{
    if(count>1){
      setCount(count-1);
    }
  }

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={addCount}>Increment</button>
      <button onClick={reduceCount}>Decrement</button>
      <UserInformation count={count} />
      {/* <ThirdComponent data={data}/> */}
      <FormData/>
      <JustInfo/>
      <MapData/>
      
    </div>
  );
}

export default App;
