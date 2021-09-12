import { useEffect } from "react"
import stylings from '../../styles/index/section.module.css'

const Section = (props) => {

    console.log(props);
    useEffect(() => {
        var scrollReveal = document.createElement("script");

        scrollReveal.setAttribute("src", "https://unpkg.com/scrollreveal");

        document.head.appendChild(scrollReveal);
        scrollReveal.onload = () => {

        }
    }, [])

    return(
        <div className={stylings.con}>
            <section id={props.id}>
                {props.children}
            </section>
        </div>
    )
}

export default Section