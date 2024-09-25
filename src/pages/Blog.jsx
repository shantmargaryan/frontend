import Hero from "/src/components/Hero"
import BlogPost from "/src/components/BlogPost"
import BlogNews from "/src/components/BlogNews"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
import { useParams } from "react-router-dom"
function Blog() {
    const { id } = useParams()
    const { data: blogData } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/blog-page?populate=blogHero.background", fetcher)
    const blogHero = blogData?.data?.blogHero

    return (
        <>
            <Hero
                background={blogHero?.background.url}
                title={blogHero?.title}
            />
            <BlogPost
                id={id}
            />
            <BlogNews/>
        </>
    )
}

export default Blog