import styles from "./teamItem.module.scss"
import { LazyLoadImage as Image } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from "react-router-dom";

function TeamItem({ id = "", img = "", name = "", position = "" }) {

    return (
        <li className={styles.item}>
            <Link className={styles.link + " link-reset"} to={`/TeamSingle/${id}`}>
                <Image
                    effect="blur"
                    wrapperProps={{ style: { transitionDelay: "300ms" } }}
                    className={styles.img + " img"}
                    src={img}
                    alt={img} />
            </Link>
            <span className={styles.name}>
                {name}
            </span>
            <span className={styles.position}>
                {position}
            </span>
        </li>
    )
}

export default TeamItem