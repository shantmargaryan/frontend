import styles from "./servicesWork.module.scss"
import ServicesItem from "/src/components/ServicesItem"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function ServicesWork() {

    const { data } = useSWR("http://localhost:1337/api/service?populate=work.workItem.img", fetcher)
    const services = data?.data



    return (
        <section className={styles.servicesWork + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.content}>
                    <h3 className={styles.title + " blackTitle"}>
                        {services?.title}
                    </h3>
                    <p className={styles.text + " blackText"}>
                        {services?.text}
                    </p>
                </div>
                <ul className={styles.list + " list-reset"}>
                    {
                        services?.work?.workItem?.map(item => (
                            <ServicesItem
                                {...item}
                                key={item.id}
                                img={item.img.url}
                            />
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default ServicesWork