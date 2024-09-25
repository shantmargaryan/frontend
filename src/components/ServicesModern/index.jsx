import styles from "./servicesModern.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"



function ServicesModern() {

    const { data } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/services-single-page?populate=servicesModren.background,servicesModren.servicesTexts", fetcher)
    const servicesModren = data?.data?.servicesModren

    return (
        <section className={styles.servicesModern + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.titleBox}>
                    <h2 className={styles.title + " blackTitle"}>
                        {servicesModren?.title}
                    </h2>
                    <p className={styles.text + " blackText"}>
                        {servicesModren?.text}
                    </p>
                </div>
                <div className={styles.content}>
                    {
                        servicesModren?.servicesTexts?.map(item => (
                            <p className={styles.largText + " blackText"}
                                key={item.id}>
                                {item?.text}
                            </p>
                        ))
                    }
                </div>
                <div className={styles.bg}
                    style={{ backgroundImage: `url(${servicesModren?.background.url})` }}>
                    <button className={styles.btn + " button-reset"}>
                        <svg className={styles.playIcon}>
                            <use xlinkHref="img/svg/sprite.svg#play" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ServicesModern