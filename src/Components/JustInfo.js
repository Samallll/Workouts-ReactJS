import React from "react";

function JustInfo(){
    console.log("Rendered Just Info")
    return(
        <h1>hello world!</h1>
    )
}

export default React.memo(JustInfo);