import {useRef,useState,useEffect} from "react";

function FormData() {

    const[input,setInput] = useState("");
    const[error,setError] = useState("");
    const inputRef = useRef();

    const submission = (e) => {
        e.preventDefault();
        if(input === ""){
            setError("Please enter a valid input");
            return
        }
    }

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    return (
      <form onSubmit={submission}>
        <input type="text" ref={inputRef} value={input} onChange={handleInputChange}/>
        <input type="submit" value="Hellooooo"/>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    );
  }

export default FormData;