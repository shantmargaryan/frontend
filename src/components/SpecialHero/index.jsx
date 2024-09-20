import styles from "./specialHero.module.scss"
import SpecialHeroItem from "/src/components/SpecialHeroItem"
import TextType from "./textType"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"
function SpecialHero() {

    const { data, isLoading, error } = useSWR("http://localhost:1337/api/home-page?populate=specialHero.background", fetcher)
    if (error) {
        return <div>Failed to load</div>
    }
    if (isLoading) {
        return <div>Loading...</div>
    }
    const Hero = data?.data




    return (
        <section className={styles.specialHero + " section"}>
            <div className={styles.container + " container"}
                style={{ backgroundImage: `url("${Hero?.specialHero?.background?.url}")` }}>
                <h1 className={styles.title + " title"}>
                    <TextType
                        text={Hero?.specialHero?.title} />
                </h1>
                <p className={styles.text + " whiteText"}>
                    {Hero?.specialHero?.text}
                </p>
                <button className={styles.button + " button-reset"}>
                    Get Started
                    <svg className={styles.icon}>
                        <use xlinkHref="img/svg/sprite.svg#arrow" />
                    </svg>
                </button>
            </div>
            <SpecialHeroItem />
        </section >
    )
}

export default SpecialHero