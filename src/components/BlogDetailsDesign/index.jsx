import styles from "./blogDetailsDesign.module.scss"
import useSWR from "swr"
import { fetcher } from '../../halpes/fetcher'
import { LazyLoadImage as Image } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
function BlogDetailsDesign() {

    const { data } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/blog-detail?populate=blogDetailsDesign.img,blogDetailsDesign.texts", fetcher)
    const BlogDetailsDesign = data?.data?.blogDetailsDesign

    return (
        <section className={styles.blogDetailsDesign + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.content}>
                    <h3 className={styles.title + " blackTitle"}>
                        {BlogDetailsDesign?.title}
                    </h3>
                    <p className={styles.text + " blackText"}>
                        {BlogDetailsDesign?.text}
                    </p>
                    {
                        BlogDetailsDesign?.texts?.map((item, index) => (
                            <p className={styles.texts + " blackText"} key={index}>
                                {item.text}
                            </p>
                        ))
                    }
                </div>
                <Image
                    className={styles.img + " img"}
                    src={BlogDetailsDesign?.img.url}
                    alt={BlogDetailsDesign?.img.url}
                    effect="blur" wrapperProps={{
                        style:
                            { transitionDelay: "300ms" }
                    }} />
            </div>
        </section>
    )
}

export default BlogDetailsDesign