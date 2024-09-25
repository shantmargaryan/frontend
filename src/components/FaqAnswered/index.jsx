import styles from "./faqAnswered.module.scss"
import MyAccordion from "../Accordion"
import { LazyLoadImage as Image } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"



function FaqAnswered() {

    const { data } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/faq?populate=questionAnswered.img,questionAnswered.questionAnsweredTexts", fetcher)
    const faqInfo = data?.data?.questionAnswered


    return (
        <section className={styles.faqAnswered + " section"}>
            <div className={styles.container + " container"}>
                <h2 className={styles.title + " blackTitle"}>
                    {faqInfo?.title}
                </h2>
                <div className={styles.content}>
                    <MyAccordion
                        posts={faqInfo?.questionAnsweredTexts}
                    />
                    <Image
                        src={faqInfo?.img.url}
                        alt={faqInfo?.img.url}
                        className={styles.img + " img"}
                        effect="blur"
                        wrapperProps={{
                            style: { transitionDelay: "300ms" },
                        }} />
                </div>
            </div>
        </section>
    )
}

export default FaqAnswered