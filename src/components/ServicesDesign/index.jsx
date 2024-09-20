import styles from "./servicesDesign.module.scss"
import { Link } from "react-router-dom"
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

import Counter from "/src/components/Counter"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function ServicesDesign() {

    const { data } = useSWR("http://localhost:1337/api/services-single-page?populate=servicesSingleDesign.img", fetcher)
    const servicesDesign = data?.data?.servicesSingleDesign

    return (
        <section className={styles.servicesDesign + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.wrapper}>
                    <LazyLoadImage
                        effect="blur"
                        wrapperProps={{
                            style: {
                                transitionDelay: "300ms",
                            }
                        }}
                        className={styles.img + " img"}
                        src={servicesDesign?.img.url}
                        alt={servicesDesign?.img.url} />
                    <div className={styles.content}>
                        <h3 className={styles.title + " blackTitle"}>
                            {servicesDesign?.title}
                        </h3>
                        <p className={styles.text + " blackText"}>
                            {servicesDesign?.text}
                        </p>
                        <Link className={styles.link + " link-reset"} to={"#"}>
                            Our Portfolio
                            <svg className={styles.icon}>
                                <use xlinkHref="img/svg/sprite.svg#arrow" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className={styles.counterBox}>
                    <Counter number={12} title="Years Of Experiance" />
                    <Counter number={1074} title="Success Project" />
                    <Counter number={98} title="Active Project" />
                    <Counter number={583} title="Happy CUstomers" />
                </div>
            </div>
        </section>
    )
}

export default ServicesDesign