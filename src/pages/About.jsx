import ServicesAbout from "/src/components/ServicesAbout"
import AboutWork from "/src/components/AboutWork"
import About from "/src/components/About"
import Form from "/src/components/Form"
import useSWR from "swr"
import { fetcher } from "/src/halpes/fetcher"



function AboutPage() {


    return (
        <>
            <ServicesAbout />
            <AboutWork />
            <About />
            <Form />
        </>
    )
}

export default AboutPage