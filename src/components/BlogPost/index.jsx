import styles from './blogPost.module.scss'
import { Link } from 'react-router-dom'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import { fetcher } from '../../halpes/fetcher'
import useSWR from 'swr'


function BlogPost({ id }) {
    const { data } = useSWR(`http://localhost:1337/api/news-items/${id}?populate=*`, fetcher)
    const { data: blogTitle } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/blog-page?populate=blogPost", fetcher)
    if (!data || !blogTitle) {
        return
    }
    const blogPost = data.data
    const blogTitleData = blogTitle.data.blogPost

    return (
        <section className={styles.blogPost + " section"}>
            <div className={styles.container + " container"}>
                <h2 className={styles.title + " blackTitle"}>
                    {blogTitleData.title}
                </h2>
                <div className={styles.wrapper}>
                    <LazyLoadImage
                        src={blogPost.img.url}
                        alt={blogPost.img.url}
                        className={styles.img + " img"}
                        effect='blur'
                        wrapperProps={
                            {
                                style: {
                                    transitionDelay: '300ms'
                                }
                            }
                        } />
                    <div className={styles.content}>
                        <h3 className={styles.smallTitle + " blackTitle"}>
                            {blogPost.title}
                        </h3>
                        <p className={styles.text + " blackText"}>
                            {blogPost.text}
                        </p>
                        <div className={styles.dateBox}>
                            <span className={styles.date}>
                                {blogPost.date}
                            </span>
                            <Link to={"/BlogDetail"} className={styles.Link + " link-reset"}>
                                <svg className={styles.icon}>
                                    <use xlinkHref="/img/svg/sprite.svg#smallArrow" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogPost