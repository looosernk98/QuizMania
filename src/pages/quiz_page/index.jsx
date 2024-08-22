import React, { useEffect, useState } from "react";
import './style.css'


const Quiz_page = () => {

    const [data, setData] = useState()
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
    
    if(minutes == 1){
         clearTimeout(timerId)
    }
    

    return (
        <div className="parent-container">
             <h1>html quiz</h1>


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

export default Quiz_page