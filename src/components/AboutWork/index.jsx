import styles from "./aboutWork.module.scss"
import useSWR from "swr"
import { fetcher } from "../../halpes/fetcher"
import 'react-lazy-load-image-component/src/effects/blur.css';
import AboutWorkItem from "../aboutWorkItem";


function AboutWork() {
    const { data } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/about-page?populate=aboutItem.img", fetcher)
    const aboutItem = data?.data?.aboutItem


    return (
        <section className={styles.aboutWork + " section"}>
            <div className={styles.container + " container"}>
                {
                    aboutItem?.map(item => (
                        <AboutWorkItem
                            {...item}
                            img={item.img.url}
                            key={item.id}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default AboutWork