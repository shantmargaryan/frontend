import Hero from "/src/components/Hero"
import SpecialHeroItem from "/src/components/SpecialHeroItem"
import ServicesWork from "/src/components/ServicesWork"
import Join from "/src/components/Join"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"

function Services() {

    const { data } = useSWR("http://localhost:1337/api/service?populate=servicesHero.background", fetcher)
    const servicesHero = data?.data?.servicesHero

    return (
        <>
            <Hero background={servicesHero?.background.url}
                title={servicesHero?.title} />
            <SpecialHeroItem />
            <ServicesWork />
            <Join />
        </>
    )
}

export default Services