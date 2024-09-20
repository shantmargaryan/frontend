import styles from "./create.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function Create() {

    const { data, error, isLoading } = useSWR("http://localhost:1337/api/home-page?populate=create.background", fetcher)
    const createData = data?.data?.create

    return (
        <section className={styles.create + " section"}>
            <div className={styles.container + " container"}>
                <ul className={styles.list + " list-reset"}>
                    <li className={styles.item}
                        style={{ backgroundImage: `url("${createData?.background[0]?.url}")` }}>
                        <h3 className={styles.title + " title"}>
                            {createData?.title}
                        </h3>
                        <p className={styles.text + " whiteText"}>
                            {createData?.text}
                        </p>
                        <div className={styles.callBox}>
                            <div className={styles.iconBox}>
                                <svg className={styles.icon}>
                                    <use xlinkHref="img/svg/sprite.svg#Call" />
                                </svg>
                            </div>
                            <div className={styles.phoneNumber}>
                                <a href={`tel:${createData?.phoneNumber}`}
                                    className={styles.number + " link-reset"}>
                                    {createData?.phoneNumber}
                                </a>
                                <span className={styles.subtitle}>
                                    Call Us Anytime
                                </span>
                            </div>
                        </div>
                        <button className={styles.button + " button-reset"}>
                            Get Free Estimate
                            <svg className={styles.arrowIcon}>
                                <use xlinkHref="img/svg/sprite.svg#arrow" />
                            </svg>
                        </button>
                    </li>
                    <li className={styles.item}
                        style={{ backgroundImage: `url("${createData?.background[1]?.url}")` }}>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Create