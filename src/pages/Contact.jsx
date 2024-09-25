import Hero from "/src/components/Hero"
import ContactMeeting from "/src/components/ContactMeeting"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
function Contact() {

    const { data } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/contact-page?populate=contactHero.background", fetcher)
    const contactHero = data?.data?.contactHero

    return (
        <>
            <Hero
                background={contactHero?.background.url} />
            <ContactMeeting />
        </>
    )
}

export default Contact