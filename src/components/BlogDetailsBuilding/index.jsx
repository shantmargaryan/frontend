import styles from './blogDetailsBuilding.module.scss'
import { Link } from 'react-router-dom'

import { LazyLoadImage as Image } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

import { fetcher } from '../../halpes/fetcher'
import useSWR from 'swr'

function blogDetailsBuilding({ id }) {
  const { data: newsDetails } = useSWR(`https://smart-splendor-b3ed527c30.strapiapp.com/api/news-details/${id}?populate=*`, fetcher)
  const { data } = useSWR('https://smart-splendor-b3ed527c30.strapiapp.com/api/blog-detail?populate=blogDetailsLatestNews.blogDetailsLatestNewsItem,blogDetailsCategories.blogDetailsCategoriesItem,blogDetailsTags.blogDetailsTagsItems.img', fetcher)
  const blogDetails = data?.data
  const blogDetailsLatestNews = blogDetails?.blogDetailsLatestNews
  const blogDetailsCategories = blogDetails?.blogDetailsCategories
  const blogDetailsTags = blogDetails?.blogDetailsTags
  const   blogInfo = newsDetails?.data

  return (
    <>
      <section className={styles.blogDetailsBuilding + " section"}>
        <div className={styles.container + " container"}>
          <div className={styles.wrapper}>
            <aside className={styles.aside}>
              <h3 className={styles.smallTitle + " blackTitle"}>
                {blogDetailsLatestNews?.title}
              </h3>
              <ul className={styles.listNews + " list-reset"}>
                {
                  blogDetailsLatestNews?.blogDetailsLatestNewsItem.map((item, index) => (
                    <li className={styles.itemNews} key={index}>
                      <p className={styles.text + " blackText"}>
                        {item.text}
                      </p>
                      <span className={styles.date}>
                        {item.date}
                      </span>
                    </li>
                  ))
                }
              </ul>
              <h3 className={styles.smallTitle + " blackTitle"}>
                {blogDetailsCategories?.title}
              </h3>
              <ul className={styles.listCategories + " list-reset"}>
                {
                  blogDetailsCategories?.blogDetailsCategoriesItem?.map((item, index) => (
                    <li className={styles.itemCategories} key={index}>
                      <span className={styles.textCategories}>
                        {item.text}
                      </span>
                    </li>
                  ))
                }
              </ul>
              <h3 className={styles.smallTitle + " blackTitle"}>
                {blogDetailsTags?.title}
              </h3>
              <ul className={styles.listTags + " list-reset"}>
                {
                  blogDetailsTags?.blogDetailsTagsItems.map((item, index) => (
                    <li className={styles.itemTags} key={index}>
                      <Link className={styles.link + " link-reset"} to={"#"}>
                        {item.text}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </aside>
            <div className={styles.content}>
              <h3 className={styles.title + " blackTitle"}>
                {blogInfo?.title}
              </h3>
              <Image
                className={styles.img + " img"}
                src={blogInfo?.img.url}
                alt={blogInfo?.img.url}
                effect="blur" wrapperProps={{
                  style:
                    { transitionDelay: "300ms" }
                }} />
              <p className={styles.longText + " blackText"}>
                {blogInfo?.text}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default blogDetailsBuilding