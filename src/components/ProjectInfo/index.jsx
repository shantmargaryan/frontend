import styles from "./projectInfo.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function ProjectInfo({ title, id }) {

    const { data: projectInfo } = useSWR(`http://localhost:1337/api/project-page?populate=${title}.img`, fetcher)
    if (!projectInfo) return
    const item = projectInfo?.data?.[title].find(item => +item.id === +id)

    return (
        <section className={styles.projectInfo + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.wrapper}>
                    <ul className={styles.list + " list-reset"}>
                        <li className={styles.item}>
                            <label className={styles.label}>
                                Client
                                <input className={styles.input + " input-reset"}
                                    type="text"
                                    placeholder="Your client name" />
                            </label>
                        </li>
                        <li className={styles.item}>
                            <label className={styles.label}>
                                Category
                                <input className={styles.input + " input-reset"} type="text" placeholder="VIP" />
                            </label>
                        </li>
                        <li className={styles.item}>
                            <label className={styles.label}>
                                Tags
                                <input className={styles.input + " input-reset"} type="text" placeholder="VIP, Home" />
                            </label>
                        </li>
                        <li className={styles.item}>
                            <label className={styles.label}>
                                Date
                                <input className={styles.input + " input-reset"} type="text" placeholder="Date 23,02, 2022" />
                            </label>
                        </li>
                        <li className={styles.item}>
                            <label className={styles.label}>
                                Link
                                <input className={styles.input + " input-reset"} type="url" placeholder="Link example.com" />
                            </label>
                        </li>
                    </ul>
                    <div className={styles.content}>
                        <h2 className={styles.title + " blackTitle"}>
                            {item?.title}
                        </h2>
                        <p className={styles.text + " blackText"}>
                            {item?.text}
                        </p>
                    </div>
                </div>
                <div className={styles.bg} style={{ backgroundImage: `url(${item?.img.url})` }}>
                    <button className={styles.iconButton + " button-reset"} type="button">
                        <svg className={styles.icon}>
                            <use xlinkHref="/img/svg/sprite.svg#search" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProjectInfo