import React, {Fragment, useState} from "react"
import "./Home.css"
// import Modal from "react-modal"
import axios from "axios"
import Modal from "@mui/base/ModalUnstyled"

//image
import nistLogo1 from "./img/nist-logo1.png"
import nistLogo2 from "./img/nist-logo-2.png"
import sunnyImg from "./img/sunny.svg"
import sunnyBigImg from "./img/sunny-big.svg"
import weatherLogo from "./img/weather-logo.svg"
import rainLogo from "./img/rain-logo.svg"
import nistImg from "./img/nist-img.png"
import sunnyWhiteImg from "./img/sunny-white.svg"
import windSpeedImg from "./img/wind-speed.svg"
import windDirectionImg from "./img/wind-direction.svg"
import pressureImg from "./img/pressure.svg"
import humidityImg from "./img/humidity.svg"
import uvImg from "./img/uv.svg"
import lightIntensityImg from "./img/light-intensity.svg"
import airQualityImg from "./img/air-quality.svg"
import precipitationImg from "./img/precipitation.svg"
import downImg from "./img/down.svg"
import closeImg from "./img/close.svg"

const Home = () => {

    const [currentTemp, setCurrentTemp] = useState(0)
    const [currentHumidity, setCurrentHumidity] = useState(0)
    const [currentPressure, setCurrentPressure] = useState(0)
    const [currentLux, setCurrentLux] = useState(0)
    const [currentWindSpeed, setCurrentWindSpeed] = useState(0)
    const [currentWindDirection, setCurrentWindDirection] = useState(0)
    const [currentRainFall, setCurrentRainFall] = useState(0)
    const [battery, setCurrentBattery] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalImg, setModalImg] = useState(humidityImg)
    const [modalHeading, setModalHeading] = useState("Humidity")
    const [modalValue, setModalValue] = useState(23.3)
    const [timeStamp1, setTimeStamp1] = useState("")
    const [timeStamp2, setTimeStamp2] = useState("")
    const [timeStamp3, setTimeStamp3] = useState("")
    
    const [modalPara, setModalPara] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odit minus adipisci quibusdam omnis quo.")
    

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];    
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const outputDate = month  + '\n'+ day  + ',' + year;
    let dayName = weekday[dateObj.getDay()];
    const outputTime = dateObj.toLocaleTimeString();
    

    // console.log(outputTime1)

    const getData = async() => {
        const data =  await axios.get("https://api.thingspeak.com/channels/1570246/feeds.json?results=3")
        // const data2 = await axios.get("https://api.thingspeak.com/channels/1570246/feeds.json?results=3")
        const dataAvg = await axios.get("https://api.thingspeak.com/channels/1570246/feeds.json?results=120&average=60")
        console.log(data.data)
        setCurrentTemp(data.data.feeds[0].field1)
        setCurrentHumidity(data.data.feeds[0].field2)
        setCurrentPressure(data.data.feeds[0].field3)
        setCurrentLux(data.data.feeds[0].field4)
        setCurrentWindSpeed(data.data.feeds[0].field5)
        setCurrentWindDirection(data.data.feeds[0].field6)
        setCurrentRainFall(data.data.feeds[0].field7)
        setCurrentBattery(data.data.feeds[0].field8)
        setTimeStamp1(data.data.feeds[0].created_at)
        setTimeStamp2(data.data.feeds[1].created_at)
        setTimeStamp3(data.data.feeds[2].created_at)


        

    }

    getData()

    const modalHandler = (img, heading, value, para) => {
        isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
        setModalHeading(heading)
        setModalImg(img)
        setModalValue(value)
        setModalPara(para)
    }

    return (
        <Fragment>
            <div className="container">
                <header>
                    <div className="navbar">
                        <img src={nistLogo1} alt="nist" className="nist-logo1"/>
                        <h1>NIST WEATHER UPDATE</h1>
                        <img src={nistLogo2} alt="nist" className="nist-logo2"/>
                    </div>
                </header>
                <div className="options">
                    <ul>
                        <li className="option">About us</li>
                        <li className="option">Architecture</li>
                        <li className="option">Hardware implementation</li>
                        <li className="option">Technology</li>
                        <li className="option">Contact us</li>



                    </ul>
                </div>
                <section className="first-page">
                <div className="main">
                        <div className="degree-section">
                            <h1>{currentTemp}&#176;C</h1>
                        </div>
                        <div className="location-section">
                            <h2>NIST</h2>
                            <h3>{outputDate}</h3>
                        </div>
                        <div className="logo-section">
                            <img src={sunnyImg} alt="Weather image"/>
                            <h4>Sunny</h4>
                        </div>
                </div>
                </section>
                <section className="second-page">
                    <div className="left-side">
                        <img src={sunnyBigImg} alt="weather img"/>
                        <h2>{currentTemp}&#176;C</h2>
                        <h3>{dayName}, {outputTime}</h3>
                        <div className="weather-logo2">
                            <img src={weatherLogo} alt="weather"/>
                            <p>Mostly cloudy</p>
                        </div>
                        <div className="rain-div2">
                            <img src={rainLogo} alt=""/>
                            <p>Rain - 30%</p>
                        </div>
                        <div>
                            <img src={nistImg} alt=""/>
                        </div>
                    </div>
                    <div className="right-side">
                        <div>
                            <h2>This week</h2>
                            <ul className="week-data">
                                <li className="single-day">
                                    <img src={sunnyWhiteImg} alt=""/>
                                    <p>Sunday</p>
                                    <p>16&#176;</p>
                                </li>
                                <li className="single-day">
                                    <img src={sunnyWhiteImg} alt=""/>
                                    <p>Monday</p>
                                    <p>18&#176;</p>
                                </li>
                                <li className="single-day">
                                    <img src={sunnyWhiteImg} alt=""/>
                                    <p>Tuesday</p>
                                    <p>16.5&#176;</p>
                                </li>
                                <li className="single-day">
                                    <img src={sunnyWhiteImg} alt=""/>
                                    <p>Wednesday</p>
                                    <p>20&#176;</p>
                                </li>
                                <li className="single-day">
                                    <img src={sunnyWhiteImg} alt=""/>
                                    <p>Thursday</p>
                                    <p>19.3&#176;</p>
                                </li>
                                <li className="single-day">
                                    <img src={sunnyWhiteImg} alt=""/>
                                    <p>Friday</p>
                                    <p>18.6&#176;</p>
                                </li>
                                <li className="single-day">
                                    <img src={sunnyWhiteImg} alt=""/>
                                    <p>Saturday</p>
                                    <p>16.5&#176;</p>
                                </li>
                            </ul>
                        </div>
                        <div className="highlights">
                            <h2>Today's highlights</h2>
                            <div className="cards-container">
                                <div className="card wind-speed" onClick={() => modalHandler(windSpeedImg, "Wind Speed", currentWindSpeed, " Wind speed is a fundamental atmospheric quantity caused by air moving from high to low pressure, usually due to changes in temperature. Here, we attached our hardware wind speed system to measure.")} >
                                    <h3>Wind speed</h3>
                                    <img src={windSpeedImg} alt="wind speed"/>
                                    <h5>windy</h5>
                                    <h2>{currentWindSpeed}</h2>
                                </div>
                                <div className="card wind-direction" onClick={ () =>  modalHandler(windDirectionImg, "Wind Direction", currentWindDirection, "Wind direction is generally reported by the direction from which it originates. Here, we attached our hardware wind speed system to measure.")} >
                                    <h3>Wind direction</h3>
                                    <img src={windDirectionImg} alt="wind direction"/>
                                    <h5>{currentWindDirection}&#176;</h5>
                                    <h2>WSW</h2>
                                    
                                </div>
                                <div className="card pressure" onClick={() => modalHandler(pressureImg, "Atmospheric Pressure", currentPressure, "Atmospheric pressure, also known as barometric pressure, is the pressure within the atmosphere of Earth. Here, we attached our whether system pressure circuit to measure.")} >
                                    <h3>Atmospheric pressure</h3>
                                    <img src={pressureImg} alt="pressure"/>
                                    <h5>average</h5>
                                    <h2>{currentPressure} mm Hg</h2>
                                    
                                </div>
                                <div className="card humidity" onClick={() => modalHandler(humidityImg, "Humidity", currentHumidity, "Humidity is the concentration of water vapour present in the air.")} >
                                    <h3>Humidity</h3>
                                    <img src={humidityImg} alt="humidity"/>
                                    <h5>normal</h5>
                                    <h2>{currentHumidity}%</h2>
                                    
                                </div>
                            </div>
                            <div className="cards-container"  >
                                <div className="card uv" onClick={() => modalHandler(uvImg, "UV index", "low", "The UVI is a measure of the level of UV radiation. The values of the index range from zero upward")}>
                                    <h3>UV index</h3>
                                    <img src={uvImg} alt="uv-radiation"/>
                                    <h5>low</h5>
                                    <h2>5</h2>
                                </div>
                                <div className="card wind-direction" onClick={() => modalHandler(lightIntensityImg, "Light intensity", currentLux, "Light intensity refers to the strength or amount of light produced by a specific lamp source. Here, we used LUX Sensor to measure it")} >
                                    <h3>Light intensity</h3>
                                    <img src={lightIntensityImg} alt="wind direction"/>
                                    <h5>brighten</h5>
                                    <h2>{currentLux} cd</h2>
                                    
                                </div>
                                <div className="card pressure" onClick={() => modalHandler(airQualityImg, "Air Quality", 25, "oaop cjwusg ahjdb ahda ad")} >
                                    <h3>Air quality index</h3>
                                    <img src={airQualityImg} alt="pressure"/>
                                    <h5>less polluted</h5>
                                    <h2>25</h2>
                                    
                                </div>
                                <div className="card precipitation" onClick={() => modalHandler(precipitationImg, "Rainfall", currentRainFall, "oaop cjwusg ahjdb ahda ad")} >
                                    <h3>Rainfall</h3>
                                    <img src={precipitationImg} alt="humidity"/>
                                    <h5>Light</h5>
                                    <h2>{currentRainFall}</h2>
                                    
                                </div>
                            </div>
                            <div className="more">
                                <a href="/more">
                                    <button>
                                        <img src={downImg} alt="down"/>
                                        <h6>More</h6>
                                    </button>
                                </a>
                            </div>
                        </div>
                    {
                        isModalOpen ? <div  className = "modal" >
                        
                        <div className="modalMain" style={{border:"none"}}>
                        <div className="close" onClick={modalHandler}>
                            <img src={closeImg} alt="" />
                        </div>
                              <div className="modalHead">
                              <h2>{modalHeading}</h2>
                                <h6>{outputTime}</h6>
                              </div>
                                <div className="modalLogo">
                                <img src={modalImg} alt="humidity" />
                            </div>
                            <div className="modalData">
                                <h2>{modalValue}</h2>
                                <h3>Average</h3>
                            <p>{modalPara}</p>
                            </div>
                            <div className="addData">
                                <div className="latestData">
                                    <h2>Latest Data</h2>
                                    {/* <h4>1. {`   `} {timeStamp1} {modalValue}</h4>
                                    <h4>2. {`   `} {timeStamp2} {modalValue}</h4>
                                    <h4>4. {`   `} {timeStamp3} {modalValue}</h4> */}
                                    <div className="datas">
                                    <div className="datas1">
                                    <h3>Time</h3>
                                    <h4>{timeStamp1}</h4>
                                    <h4>{timeStamp2}</h4>
                                    <h4>{timeStamp3}</h4>
                                    </div>
                                    <div>
                                    <h3>Data</h3>
                                    <h4>{modalValue}</h4>
                                    <h4>{modalValue}</h4>
                                    <h4>{modalValue}</h4>
                                    </div>

                                    </div>
                                </div>
                                <div className="avgData">
                                    <h1>Average: {modalValue}</h1>
                                </div>
                            </div>
                        </div>
                       


                    </div> : ""
                    }
                    </div>
                </section>
            </div>
        </Fragment>
    )
}

export default Home
