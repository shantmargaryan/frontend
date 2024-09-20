import Hero from "/src/components/Hero"
import TeamItem from "/src/components/TeamItem"
import styles from "/src/components/TeamItem/teamItem.module.scss"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
function Team() {

    const { data } = useSWR("http://localhost:1337/api/team-page?populate=teamHero.background", fetcher)
    const team = data?.data
    const { data: teamItems } = useSWR("http://localhost:1337/api/team-items?populate=*", fetcher)
    const teamItem = teamItems?.data
    return (
        <Hero
            title={team?.teamHero?.title}
            background={team?.teamHero?.background.url}>
            <ul className={styles.list + " list-reset"}>
                {
                    teamItem?.map((item, index) =>
                        <TeamItem key={index}
                            {...item}
                            img={item?.img?.url}
                        />
                    )
                }
            </ul>
        </Hero>
    )
}

export default Team