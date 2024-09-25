import styles from "./servicesMake.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"
function index() {

    const { data } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/services-single-page?populate=servicesSinglePoints.servicesSingleTitles,servicesSinglePoints.servicesSingleTexts", fetcher)
    const points = data?.data?.servicesSinglePoints

    return (
        <section className={styles.servicesArt + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.interior}>
                    {
                        points?.servicesSingleTitles?.map((item, index) => (
                            <div className={styles.content} key={index}>
                                <h2 className={styles.title + " blackTitle"}>
                                    {item?.titles}
                                </h2>
                                <ul className={styles.list + " list-reset"}>
                                    {
                                        points?.servicesSingleTexts?.map((item, index) => (
                                            <li className={styles.item} key={index}>
                                                <p className={styles.text + " blackText"}>
                                                    {item?.texts}
                                                </p>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default index