import { useEffect } from 'react'
import s from '../../styles/index/back.module.css'

const BackGround = () => {

    useEffect(() => {
        for(var i=0;i<10;i++){
            // document.getElementsByClassName(s.con)[0].innerHTML = document.getElementsByClassName(s.con)[0].innerHTML + `<div className={${s.con}}>hey</div>`
        }
    }, [])

    return(
        <div className={s.con}>
            <div id={s.one} className={s.stars}></div>
            <div id={s.two} className={s.stars}></div>
            <div id={s.three} className={s.stars}></div>
            <div id={s.four} className={s.stars}></div>
            <div id={s.five} className={s.stars}></div>
            <div id={s.six} className={s.stars}></div>
            <div id={s.seven} className={s.stars}></div>
            <div id={s.eight} className={s.stars}></div>
            <div id={s.nine} className={s.stars}></div>
            <div id={s.ten} className={s.stars}></div>
            <div id={s.eleven} className={s.stars}></div>
            <div id={s.twelve} className={s.stars}></div>
            <div id={s.thirteen} className={s.stars}></div>
            <div id={s.fourteen} className={s.stars}></div>
            <div id={s.fifteen} className={s.stars}></div>
            <div id={s.sixteen} className={s.stars}></div>
            <div id={s.seventeen} className={s.stars}></div>
            <div id={s.eighteen} className={s.stars}></div>
            <div id={s.nineteen} className={s.stars}></div>
            <div id={s.twenty} className={s.stars}></div>
            <div id={s.tone} className={s.stars}></div>
            <div id={s.ttwo} className={s.stars}></div>
            <div id={s.tthree} className={s.stars}></div>
            <div id={s.tfour} className={s.stars}></div>
            <div id={s.tfive} className={s.stars}></div>
            <div id={s.tsix} className={s.stars}></div>
            <svg id="backsvg" width="1412" height="1176" viewBox="0 0 1412 1176" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1412" height="1176" fill=""/>
            <circle className="circle" id="sixth" cx="693.5" cy="627.5" r="522.5" fill="#FCFCFC" fill-opacity="0.1"/>
            <path className="circle" id="fifth" d="M1166 627.5C1166 888.455 954.455 1100 693.5 1100C432.545 1100 221 888.455 221 627.5C221 366.545 432.545 155 693.5 155C954.455 155 1166 366.545 1166 627.5Z" fill="#FBFBFB" fill-opacity="0.05"/>
            <path className="circle" id="fourth" d="M1116 627.5C1116 860.84 926.84 1050 693.5 1050C460.16 1050 271 860.84 271 627.5C271 394.16 460.16 205 693.5 205C926.84 205 1116 394.16 1116 627.5Z" fill="#F5F5F5" fill-opacity="0.05"/>
            <circle className="circle" id="third" cx="693.5" cy="628.5" r="372.5" fill="white" fill-opacity="0.05"/>
            <path className="circle" id="second" d="M1016 627.5C1016 805.612 871.612 950 693.5 950C515.388 950 371 805.612 371 627.5C371 449.388 515.388 305 693.5 305C871.612 305 1016 449.388 1016 627.5Z" fill="white" fill-opacity="0.05"/>
            <circle className="circle" id="first" cx="693.5" cy="627.5" r="272.5" fill="#F0F0F0" fill-opacity="0.05"/>
            </svg>
        </div>
    )
}

export default BackGround