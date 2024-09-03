import React from "react";
import './style.css'
import { Link } from "react-router-dom";


const Message = ({marks}) => {

    return(
        <>
        <h1>your response have been submited successfully</h1>
        <h1> your score {marks} / 10 </h1>
        <Link to='/quiz'><button>back</button></Link>
        <Link to='/'><button>back to home</button></Link>
        
        </>
    )
}
export default Message