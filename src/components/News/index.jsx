import styles from "./news.module.scss"
import NewsItem from "/src/components/NewsItem"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function News() {

    const { data, error, isLoading } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/home-page?populate=news,news.news_items.img", fetcher)
    if (error) {
        return <div>Failed to load</div>
    }
    const newsData = data?.data?.news


    return (
        <section className={styles.news + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.content}>
                    <h3 className={styles.title + " blackTitle"}>
                        {newsData?.title}
                    </h3>
                    <p className={styles.text + " blackText"}>
                        {newsData?.text}
                    </p>
                </div>
                <ul className={styles.list + " list-reset"}>
                    {
                        newsData?.news_items?.map(item =>
                            <NewsItem
                                {...item}
                                img={item.img.url}
                                key={item.id}
                            />
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default News