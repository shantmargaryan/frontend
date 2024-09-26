import { Link } from "react-router-dom"
import styles from "./footer.module.scss"
import Logo from "/src/components/Logo"
import { fetcher } from "../../halpes/fetcher"
import useSWR from "swr"

function Footer() {

    const { data } = useSWR("https://smart-splendor-b3ed527c30.strapiapp.com/api/footer?populate=*", fetcher)
    const footerData = data?.data

    return (
        <footer className={styles.footer}>
            <div className={styles.container + " container"}>
                <div className={styles.content}>
                    <Logo />
                    <p className={styles.text + " blackText"}>
                        {footerData?.text}
                    </p>
                    <div className={styles.socials}>
                        <Link className={styles.socialLink + " link-reset"} to={"#"}>
                            <svg className={styles.icon}>
                                <use xlinkHref="img/svg/sprite.svg#fb" />
                            </svg>
                        </Link>
                        <Link className={styles.socialLink + " link-reset"} to={"#"}>
                            <svg className={styles.icon}>
                                <use xlinkHref="img/svg/sprite.svg#twitter" />
                            </svg>
                        </Link>
                        <Link className={styles.socialLink + " link-reset"} to={"#"}>
                            <svg className={styles.icon}>
                                <use xlinkHref="img/svg/sprite.svg#in" />
                            </svg>
                        </Link>
                        <Link className={styles.socialLink + " link-reset"} to={"#"}>
                            <svg className={styles.icon}>
                                <use xlinkHref="img/svg/sprite.svg#instagram" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.listBox}>
                        <h3 className={styles.title + " blackTitle"}>
                            Pages
                        </h3>
                        <ul className={styles.list + " list-reset"}>
                            <li className={styles.item}>
                                <Link className={styles.link + " link-reset link"} to={"About"}>
                                    About Us
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.link + " link-reset link"} to={"Project"}>
                                    Our Projects
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.link + " link-reset link"} to={"Team"}>
                                    Our Team
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.link + " link-reset link"} to={"Contact"}>
                                    Contact Us
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.link + " link-reset link"} to={"Services"}>
                                    Services
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.listBox}>
                        <h3 className={styles.title + " blackTitle"}>
                            Services
                        </h3>
                        <ul className={styles.list + " list-reset"}>
                            <li className={styles.item}>
                                <Link className={styles.link + " link-reset link"} to={"#"}>
                                    Kitchan
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.link + " link-reset link"} to={"#"}>
                                    Living Area
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.link + " link-reset link"} to={"#"}>
                                    Bathroom
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.link + " link-reset link"} to={"#"}>
                                    Dinning Hall
                                </Link>
                            </li>
                            <li className={styles.item}>
                                <Link className={styles.link + " link-reset link"} to={"#"}>
                                    Bedroom
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contact}>
                        <h3 className={styles.title + " blackTitle"}>
                            Contact
                        </h3>
                        <p className={styles.text + " blackText"}>
                            {footerData?.address}
                        </p>
                        <a className={styles.link + " link-reset link"} href={"mailto:" + footerData?.mail}>
                            {footerData?.mail}
                        </a>
                        <a className={styles.link + " link-reset link"} href={"tel:" + footerData?.phoneNumber}>
                            {footerData?.phoneNumber}
                        </a>
                    </div>
                </div>
            </div>
            <p className={styles.bottomText + " blackText"}>
                Copyright © SELHONO
            </p>
        </footer>
    )
}

export default Footer