import React from "react";
import india from "./india.jpg";
const User=()=>{
    return(
        <div>
        <h1>This is the user page</h1>
        <img src={india} alt="India" width="100px" height="100px"></img>
        </div>
    );
}

export default User;