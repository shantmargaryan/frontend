import { Link } from "react-router-dom"
import styles from "./join.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"


function join() {

    const { data } = useSWR("http://localhost:1337/api/home-page?populate=join.background", fetcher)
const join = data?.data?.join
    return (
        <section className={styles.join + " section"}
            style={{
                backgroundImage:
                    `url("${join?.background.url}")`
            }} >
            <div className={styles.container + " container"}>
                <h3 className={styles.title + " title"}>
                    {join?.title}
                </h3>
                <p className={styles.text + " whiteText"}>
                    {join?.text}
                </p>
                <Link className={styles.link + " link-reset"}
                    to="/Contact">
                    Contact With Us
                    <svg className={styles.icon}>
                        <use xlinkHref="/img/svg/sprite.svg#arrow" />
                    </svg>
                </Link>
            </div>
        </section >

    )
}

export default join