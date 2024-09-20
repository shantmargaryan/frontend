import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Burger } from "fullburger"
import "fullburger/style"
import styles from "./header.module.scss"

import Logo from "/src/components/Logo"


function Header() {

    const [select, setSelect] = useState(false)

    const openSelect = (event) => {
        setSelect(!select)
        event.stopPropagation()
    }


    useEffect(() => {
        new Burger("header", {
            speed: 500,
            whichSide: {
                left: true
            },
            dropdown: {
                click: true
            }
        })
    }, [])


    return (
        <header className={styles.header + " header"} data-burger-header="header">
            <div className={styles.container + " container"}>
                <Logo />
                <nav className={styles.nav + " nav"} data-burger-nav title="navigation menu">
                    <ul className={styles.list + " nav__list list-reset"}>
                        <li className={styles.item + " nav__item"} data-burger-nav-item>
                            <Link className={styles.link + " nav__link link-reset link"} to="/">
                                Home
                            </Link>
                        </li>
                        <li className={styles.item + " nav__item dropdown"} data-burger-nav-item>
                            <div className={styles.dropdownButton}>
                                <span className={styles.link + " link"}>
                                    Pages
                                </span>
                                <button className={"dropdown-button"}></button>
                            </div>
                            <ul className={" list-reset nav__sub-list dropdown-list"}>
                                <li className={" nav__sub-item"}>
                                    <Link className={styles.link + " link-reset link nav__link"} to="/About">
                                        About
                                    </Link>
                                </li>
                                <li className={" nav__sub-item"}>
                                    <Link className={styles.link + " link-reset link nav__link"} to="/Pricing">
                                        Price
                                    </Link>
                                </li>
                                <li className={" nav__sub-item"}>
                                    <Link className={styles.link + " link-reset link nav__link"} to="/Faq">
                                        FAQ
                                    </Link>
                                </li>
                                <li className={" nav__sub-item"}>
                                    <Link className={styles.link + " link-reset link nav__link"} to="/Team">
                                        Team
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={styles.item + " nav__item"} data-burger-nav-item>
                            <Link className={styles.link + " nav__link link-reset link"} to="/Services">
                                Services
                            </Link>
                        </li>
                        <li className={styles.item + " nav__item"} data-burger-nav-item>
                            <Link className={styles.link + " nav__link link-reset link"} to="/Project">
                                Project
                            </Link>
                        </li>
                        <li className={styles.item + " nav__item"} data-burger-nav-item>
                            <Link className={styles.link + " nav__link link-reset link"} to="/Blog/1">
                                Blog
                            </Link>
                        </li>
                        <li className={styles.item + " nav__item"} data-burger-nav-item>
                            <Link className={styles.link + " nav__link link-reset link"} to="/Contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <button className={styles.burger + " burger"} data-burger-btn aria-label="open menu" aria-expanded="false">
                    <span className="burger__line burger__line_top"></span>
                    <span className="burger__line burger__line_middle"></span>
                    <span className="burger__line burger__line_bottom"></span>
                </button>
            </div>
        </header>
    )
}

export default Header