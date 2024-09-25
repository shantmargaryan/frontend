import Hero from "/src/components/Hero"
import BlogDetailsBuilding from "/src/components/BlogDetailsBuilding"
import BlogDetailsReply from "/src/components/BlogDetailsReply"
import BlogDetailsDesign from "/src/components/BlogDetailsDesign"
import { fetcher } from "../halpes/fetcher"
import useSWR from "swr"
import { useParams } from "react-router-dom"

function BlogDetails() {
    const { id } = useParams()
    const { data } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/blog-detail?populate=blogDetailsHero.background", fetcher)
    const blogDetailsHero = data?.data?.blogDetailsHero

    return (
        <>
            <Hero
                background={blogDetailsHero?.background.url}
                title={blogDetailsHero?.title} />
            <BlogDetailsBuilding
                id={id}
            />
            <BlogDetailsDesign />
            <BlogDetailsReply />
        </>
    )
}

export default BlogDetails