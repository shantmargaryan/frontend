import styles from "./teamSingleBiographt.module.scss"
import TeamItem from "../TeamItem"
import MyAccordion from "../Accordion";
import Ranges from "../Renges";
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr";


function TeamSingleBiography() {
    const { data } = useSWR("http://localhost:1337/api/team-single-page?populate=teamInfo.teamInfoAccartion", fetcher)
    const { data: team } = useSWR(`http://localhost:1337/api/team-items?populate=*&pagination[limit]=4`, fetcher)
    const teamItems = team?.data
    const teamInfo = data?.data?.teamInfo


    return (
        <section className={styles.teamSingleBiography + " section"}>
            <div className={styles.container + " container"}>
                <h2 className={styles.title + " blackTitle"}>
                    {teamInfo?.title}
                </h2>
                <p className={styles.text + " blackText"}>
                    {teamInfo?.text}
                </p>
                <div className={styles.content}>
                    <div className={styles.rangeBox}>
                        <h3 className={styles.smallTitle + " blackTitle"}>
                            {teamInfo?.secoundTitle}
                        </h3>
                        <p className={styles.text + " blackText"}>
                            {teamInfo?.secoundText}
                        </p>
                        <Ranges />
                    </div>
                    <div className={styles.accordionBox}>
                        <div className={styles.qustion}>
                            <h3 className={styles.smallTitle + " blackTitle"}>
                                {teamInfo?.thirdTitle}
                            </h3>
                            <p className={styles.text + " blackText"}>
                                {teamInfo?.thirdText}
                            </p>
                        </div>
                        <MyAccordion
                            posts={teamInfo?.teamInfoAccartion}
                        />
                    </div>
                </div>
                <ul className={styles.teamList + " list-reset"}>
                    {
                        teamItems?.map(item => (
                            <TeamItem
                                key={item.id}
                                {...item}
                                img={item.img.url}
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default TeamSingleBiography