import Hero from "/src/components/Hero"
import ProjectTabs from "/src/components/ProjectTabs"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
import { useEffect, useRef } from "react"
function Project() {
    const { data } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/project-page?populate=projectHero.background", fetcher)
    const projectHero = data?.data?.projectHero

    return (
        <Hero
            background={projectHero?.background.url}
            title={projectHero?.title}>
            <ProjectTabs />
        </Hero >
    )
}

export default Project