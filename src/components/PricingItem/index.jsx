import styles from "./pricingItem.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function PricingItem() {

    const { data } = useSWR("http://localhost:1337/api/pricings?populate=*", fetcher)
    const price = data?.data

    return (
        <ul className={styles.list + " list-reset container"}>
            {
                price?.map(item => (
                    <li className={styles.item} key={item.id}>
                        <h3 className={styles.title + " blackTitle"}>
                            {item?.title}
                        </h3>
                        <div className={styles.priceBox}>
                            <div className={styles.dollar}>
                                <span className={styles.dollar}>
                                    $
                                </span>
                                <span className={styles.price}>
                                    {item.price}
                                </span>
                            </div>
                            <span className={styles.month}>
                                /month
                            </span>
                            {
                                item?.texts?.map((item, index) =>
                                    <p className={styles.text + " blackText"} key={index}>
                                        {item?.text}
                                    </p>
                                )
                            }
                        </div>
                        <button className={styles.button + " button-reset"}>
                            Get Started
                            <svg className={styles.icon}>
                                <use xlinkHref="img/svg/sprite.svg#arrow" />
                            </svg>
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

export default PricingItem