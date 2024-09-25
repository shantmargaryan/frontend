import Hero from "/src/components/Hero"
import ProjectInfo from "/src/components/ProjectInfo"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
import { useParams } from "react-router-dom"
function ProjectDetails() {
    const { title, id } = useParams()
    const { data } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/project-details-page?populate=*", fetcher)
    const projectDetailsHero = data?.data


    return (
        <>
            <Hero
                title={projectDetailsHero?.title}
                background={projectDetailsHero?.background.url}
            />
            <ProjectInfo
                title={title}
                id={id}
            />
        </>
    )
}

export default ProjectDetails