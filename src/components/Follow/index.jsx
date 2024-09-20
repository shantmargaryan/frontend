import styles from "./follow.module.scss"
import FollowItem from "/src/components/FollowItem"
import Counter from "/src/components/Counter"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"


function Follow() {

    const { data: follow } = useSWR("http://localhost:1337/api/home-page?populate=followData.followItems.img", fetcher)
    const followsData = follow?.data?.followData


    return (
        <section className={styles.follow + " section"}>
            <div className={styles.container + " container"}>
                <div className={styles.content}>
                    <h3 className={styles.title + " blackTitle"}>
                        {followsData?.title}
                    </h3>
                    <p className={styles.text + " blackText"}>
                        {followsData?.text}
                    </p>
                </div>

                <div className={styles.articleBox}>
                    {
                        followsData?.followItems.map(item => (
                            <FollowItem
                                {...item}
                                img={item.img.url}
                                key={item.id} />
                        ))
                    }
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

export default Follow