import Hero from "/src/components/Hero"
import FaqAnswered from "/src/components/FaqAnswered"
import FaqReated from "/src/components/FaqRelated"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"

function Faq() {

    const { data } = useSWR("http://localhost:1337/api/faq?populate=hero.background", fetcher)
    const faqHero = data?.data?.hero
    return (
        <>
            <Hero
                title={faqHero?.title}
                background={faqHero?.background?.url} />
            <FaqAnswered />
            <FaqReated />
        </>
    )
}

export default Faq