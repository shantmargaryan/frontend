import Hero from "/src/components/Hero"
import { useParams } from "react-router-dom"
import TeamSigleInfo from "/src/components/TeamSingleInfo"
import TeamSingleBiography from "/src/components/TeamSingleBiography"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
function TeamSingle() {
    const { id } = useParams()

    const { data } = useSWR(`https://smart-splendor-b3ed527c30.strapiapp.com/api/team-items/${id}?populate=*`, fetcher)
    const { data: teamSingle } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/team-single-page?populate=teamSingleHero.background", fetcher)
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