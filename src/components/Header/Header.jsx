import styles from "./Header.module.css"
import globeIcon from "../../../public/Images/globeIcon.png"

export default function Header(){
    return(
        <div className={styles.header}>
            <img className={styles.globeIcon} src={globeIcon}></img>
            <span className={styles.headerTitle}>my travel journal.</span>
        </div>
    )
}