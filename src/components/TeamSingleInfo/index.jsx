import styles from "./teamSingleInfo.module.scss"
import ContactLinks from "../ContactLinks"
import { LazyLoadImage as Image } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css';

function TeamSigleInfo({ name = "", text = "", position = "", img = "" }) {


  return (
    <section className={styles.teamSigleInfo + " section"}>
      <div className={styles.container + " container"}>
        <div className={styles.content}>
          <h2 className={styles.title + " blackTitle"}>
            {name}
          </h2>
          <span className={styles.position}>
            {position}
          </span>
          <p className={styles.text + " blackText"}>
            {text}
          </p>
          <ContactLinks />
        </div>
        <Image
          className={styles.img + " img"}
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "300ms" },
          }}
          src={img}
          alt={img}
        />
      </div>
    </section>
  )
}

export default TeamSigleInfo