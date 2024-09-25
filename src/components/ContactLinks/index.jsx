import styles from "./contactLinks.module.scss"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function ContactLinks() {

  const { data } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/contact-page?populate=contactMeeting", fetcher)
  const contacts = data?.data?.contactMeeting

  return (
    <div className={styles.links}>
      <a href={`mailto:${contacts?.email}`}
        className={styles.link + " link-reset"}>
        <svg className={styles.icon}>
          <use xlinkHref="/img/svg/sprite.svg#mail" />
        </svg>
        {contacts?.email}
      </a>
      <a href={`tel:${contacts?.phoneNumber}`}
        className={styles.link + " link-reset"}>
        <svg className={styles.icon}>
          <use xlinkHref="/img/svg/sprite.svg#Call" />
        </svg>
        {contacts?.phoneNumber}
      </a>
    </div>
  )
}

export default ContactLinks