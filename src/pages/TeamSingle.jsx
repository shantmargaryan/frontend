import Hero from "/src/components/Hero"
import { useParams } from "react-router-dom"
import TeamSigleInfo from "/src/components/TeamSingleInfo"
import TeamSingleBiography from "/src/components/TeamSingleBiography"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
function TeamSingle() {
    const { id } = useParams()

    const { data } = useSWR(`http://localhost:1337/api/team-items/${id}?populate=*`, fetcher)
    const { data: teamSingle } = useSWR("http://localhost:1337/api/team-single-page?populate=teamSingleHero.background", fetcher)
    const teamSingleHero = teamSingle?.data?.teamSingleHero


    return (
        <>
            <Hero
                title={teamSingleHero?.title}
                background={teamSingleHero?.background.url}
            />
            <TeamSigleInfo
                {
                ...data?.data
                }
                img={data?.data?.img?.url}
            />
            <TeamSingleBiography />
        </>
    )
}

export default TeamSingle