import Hero from "/src/components/Hero"
import ServicesModern from "/src/components/ServicesModern"
import ServicesMake from "/src/components/ServicesMake"
import ServicesDesign from "/src/components/ServicesDesign"
import {fetcher} from "../halpes/fetcher"
import useSWR from "swr"
function SingleServices() {

const {data} = useSWR("http://localhost:1337/api/services-single-page?populate=servicesHero.background", fetcher)
const servicesHero = data?.data?.servicesHero

    return (
        <>
            <Hero
                background={servicesHero?.background.url}
                title={servicesHero?.title} />
            <ServicesModern />
            <ServicesMake/>
            <ServicesDesign/>
        </>
    )
}

export default SingleServices