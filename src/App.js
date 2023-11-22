import './App.css';
import React,{ useState , Suspense } from 'react';
import ThirdComponent from './Components/ThirdComponent';
import MapData from './Components/MapData';
import UserInformation from './Components/UserInformation';
import FormData from './Components/FormData';
import JustInfo from './Components/JustInfo';

const LazyCall = React.lazy(()=>{
  return import('./Components/LazyComponent')
})

function App() {
  const[count,setCount] = useState(1);
  const[lazyOn,setLazyOn] = useState(false);

  const data = "This is for showing the props data passing";

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
      <ThirdComponent data={data}/>
      <FormData/>
      <JustInfo/>
      <MapData/>
      <hr/>
      <button onClick={()=>setLazyOn(!lazyOn)}>Show/Hide Pledge</button>
      <Suspense>
      { lazyOn && <LazyCall/>}
      </Suspense>
    </div>
  );
}

export default App;
