import AboutItem from "/src/components/AboutItem"
import styles from "./about.module.scss"

import useSWR from "swr"
import { fetcher } from "../../halpes/fetcher"


function About() {

    const { data } = useSWR("http://localhost:1337/api/home-page?populate=aboutUs.aboutUsItems.img", fetcher)
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