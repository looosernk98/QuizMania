import React, { useEffect, useState } from "react";
import './style.css'


const Data = [
    {
        question: "Select your favorite Web language",
        id: 1,
        options: ["html", "css", "javascript", "react"],
        selected: "",
        type: "",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        id: 2,
        options: ["<javascript>", "<scripting>", "<js>", "script"],
        selected: "",
        type: "",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        id: 3,
        options: ["the <head> section", "both the <head> section and <body> section", "the <body> section"],
        selected: "",
        type: "",
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        id: 4,
        options: ['alert("hello world")', 'mesgBox("hello world")', 'mesg("hello world")', 'alertBox("hello world")'],
        selected: "",
        type: "",
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        id: 5,
        options: ["Math.ceil(x,y)", "top(x,y)", "Math.max(x,y)", "ceil(x,y)"],
        selected: "",
        type: "",
    },
    {
        question: "What is the correct command to create a new React project?",
        id: 6,
        options: ["npx create-react-app", "npm create-react-app myReactApp", "npm create-react-app", "npx create-react-app myReactApp "],
        selected: "",
        type: "",
    },
    {
        question: "A copy of the 'real' DOM that is kept in memory is called what?",
        id: 7,
        options: ["React DOM", "DOM", "Virtual DOM", "Shadow DOM"],
        selected: "",
        type: "",
    },
    {
        question: "Which operator can be used to conditionally render a React component?",
        id: 8,
        options: ["??", "::", "&&", "||"],
        selected: "",
        type: "",
    },
    {
        question: "When rendering a list using the JavaScript map() method, what is required for each element rendered?",
        id: 9,
        options: ["id", "key", "data", "index"],
        selected: "",
        type: "",
    },
    {
        question: "What tool does React use to compile JSX?",
        id: 10,
        options: ["React DOM", "Babel", "React Router", "JSX Compiler"],
        selected: "",
        type: "",
    },
]

const Project = () => {
    const [data, setData] = useState(Data)
    const [activeIndex, setActiveIndex] = useState(0)
    const [handleSubmitMesg, setHandleSubmitMesg] = useState(false)

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    let timerId;

    useEffect(() => {

         timerId = setTimeout(() => {
            setSeconds(seconds + 1)
            if (seconds == 59) {
                setMinutes(minutes + 1)
                setSeconds(0)
            }

        }, 1000)


        return () => {
            clearTimeout(timerId)
        }

    }, [seconds,minutes])


    const onOptionChange = (e) => {
        data[activeIndex].selected = Number(e.target.value)
        setData([...data])

        console.log("index of e.target.value=", typeof e.target.value)
        console.log(" data =", data)
    }
    
    // if(minutes == 1){
    //      clearTimeout(timerId)
    // }
    

    return (
        <div className="parent-container">

            {
                handleSubmitMesg != true && minutes < 1

                    ?

                    <div className="ques-box">

                        <div className="countDown">

                            <h1>{activeIndex + 1}<span>/10</span></h1>

                            <h1>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>

                        </div>



                        {
                            data.map((item, index) => {

                                if (index == activeIndex) {

                                    return (<div className="question"
                                        key={index}>

                                            <h3> {item.question}</h3>

                                            {/* {item.question} */}

                                        {
                                            item.options.map((option, optIndex) =>
                                                <div key={optIndex} className="options">
                                                    <br />

                                                    <input type="radio"
                                                        name="option"
                                                        value={optIndex}
                                                        checked={item.selected === optIndex}
                                                        onChange={onOptionChange} />

                                                    <label>{option}</label>

                                                </div>)
                                        }

                                    </div>
                                    )

                                    return null;

                                }
                            })

                        }
                        <br />

                        <div className="button-container">

                            <div className="btn1">
                                {
                                    activeIndex > 0 ? <button onClick={() => setActiveIndex(activeIndex - 1)}>Prev</button> : null
                                }

                            </div>

                            <div className="btn2">
                                {
                                    activeIndex == 0 || activeIndex < 9 ? <button onClick={() => setActiveIndex(activeIndex + 1)}>Next</button> : null

                                }
                            </div>

                            <div className="btn3">
                                {
                                    activeIndex == 9 ? <button onClick={() => setHandleSubmitMesg(true)} >Submit </button> : null
                                }
                            </div>

                        </div>

                    </div>

                    :

                    <h2>your response has been submited successfully</h2>
            }

        </div>
    )
}

export default Project