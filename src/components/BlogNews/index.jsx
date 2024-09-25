import styles from './blogNews.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import { fetcher } from '../../halpes/fetcher'
import useSWR from 'swr';

function BlogNews() {
    const { data: newsDetails } = useSWR(`https://smart-splendor-b3ed527c30.strapiapp.com/api/news-details/?populate=*`, fetcher)
    const { data } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/blog-page?populate=blogNews.blogNewsItems.img", fetcher)
    const blogItems = data?.data?.blogNews
    const newsItems = newsDetails?.data

    return (
        <section className={styles.blogNews + " section"}>
            <div className={styles.container + " container"}>
                <h3 className={styles.title + " blackTitle"}>
                    {blogItems?.title}
                </h3>
                <ul className={styles.list + " list-reset"}>
                    {
                        newsItems?.map(item => (
                            <li className={styles.item} key={item.id}>
                                <Link to={`/BlogDetails/${item?.id}`}>
                                    <LazyLoadImage className={styles.img + " img"}
                                        src={item?.img.url}
                                        alt={item?.img.url}
                                        effect="blur"
                                        wrapperProps={
                                            {
                                                style: {
                                                    transitionDelay: "300ms",
                                                }
                                            }
                                        } />
                                </Link>
                                <h3 className={styles.smallTitle + " blackTitle"}>
                                    {item?.title}
                                </h3>
                                <div className={styles.content}>
                                    <span className={styles.date}>
                                        {item?.date}
                                    </span>
                                    <Link to={`/BlogDetails/${item?.id}`} className={styles.link + " link-reset"}>
                                        <svg className={styles.icon}>
                                            <use xlinkHref="/img/svg/sprite.svg#smallArrow" />
                                        </svg>
                                    </Link>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default BlogNews