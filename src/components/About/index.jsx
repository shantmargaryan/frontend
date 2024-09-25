import AboutItem from "/src/components/AboutItem"
import styles from "./about.module.scss"

import useSWR from "swr"
import { fetcher } from "../../halpes/fetcher"


function About() {

    const { data, error, isLoading } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/home-page?populate=aboutUs.aboutUsItems.img", fetcher)
    if (error) {
        return <div>Failed to load</div>
    }
    const aboutData = data?.data?.aboutUs

    return (
        <section className={styles.about + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.titleBox}>
                    <h3 className={styles.title + " title"} >
                        {aboutData?.title}
                    </h3>
                </div>

                <ul className={styles.list + " list-reset"}>
                    {
                        aboutData?.aboutUsItems?.map(item => (
                            <AboutItem
                                {...item}
                                img={item.img.url}
                                key={item.id} />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default About