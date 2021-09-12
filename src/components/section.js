import { useEffect } from "react"

const Section = () => {

    useEffect(() => {
        console.log("effect");
        var my_awesome_script = document.createElement('script');

        my_awesome_script.setAttribute('src','http://example.com/site.js');

        document.head.appendChild(my_awesome_script);
    }, [])

    return(
        <div>
            <h1>Hey</h1>
        </div>
    )
}

export default Section