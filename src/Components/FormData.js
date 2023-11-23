import {useEffect, useRef, useState} from "react";

function FormData() {

    const[input,setInput] = useState("");
    const[error,setError] = useState("");

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
    const inputref = useRef()
    useEffect(() => {

      inputref.current.focus();
    },[])

    return (
      <form onSubmit={submission}>
        <input ref={inputref} type="text" value={input} onChange={handleInputChange}/>
        <input type="submit" value="Hellooooo"/>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    );
  }

export default FormData;