
import "./style.css"
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { Html_Data, Css_Data, Javascript_Data, React_Data } from "../../constant/data";

// import { useNavigate } from "react-router-dom";




const HomePage = () => {

    // const navigate = useNavigate()

    const quizList = [
        {
            name: "HTML",
            icon: <IoLogoHtml5 />,
            path: '/html',
            questions: Html_Data
        },
        {
            name: "CSS",
            icon: <IoLogoCss3 />,
            path: '/css',
            questions: Css_Data
        },
        {
            name: "JAVASCRIPT",
            icon: <TbBrandJavascript />,
            path: '/javascript',
            questions: Javascript_Data
        },
        {
            name: "REACT",
            icon: <GrReactjs />,
            path: '/react',
            questions: React_Data
        }
    ]

    const handleClick = () => {
       
    }


    return (
        <div className="container">
            {
                quizList.map((item, index) => (
                <div key={index} onClick={handleClick} className="card">
                 <span className="icon" >{item.icon}</span>
                 {item.name}
                </div>))
            }


        </div>
    )
}

export default HomePage