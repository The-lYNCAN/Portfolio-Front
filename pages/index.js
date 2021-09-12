import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Section from '../src/components/section'
import BackGround from '../src/components/background'
import Top from '../src/components/top'
import NavBar from '../src/components/navbar'
export default function Home() {

  useEffect(() => {
    window.onmousemove = (e) => {
      // document.querySelectorAll("h1").forEach(element => {
      //   const y = (window.innerHeight - e.pageY * 2) / 100
      //   const x = (window.innerWidth - e.pageX *2) / 100
      //   // element.style.color = "red"
      //   element.style.transform = `translateX(${x}px) translateY(${y}px)`
      //   // console.log(x);
      // })
    }
  }, [])

  return (
    <div>
      <NavBar />
      <BackGround />
      <Top />
      {/* <h1 style={{textAlign: "center"}}>hi</h1> */}
    </div>
  )
}
