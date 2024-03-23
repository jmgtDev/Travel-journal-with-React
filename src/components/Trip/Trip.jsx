import styles from "./Trip.module.css"
import locIcon from "../../../public/Images/locIcon.png"


export default function Trip(props){
    return(
        <div className={styles.trip}>
            <img src={props.tripImg} className={styles.tripImg}></img>
            <div className={styles.tripInfo}>
                <div className={styles.tripLoc}>
                    <img src={locIcon} className={styles.locIcon}></img>
                    <span className={styles.tripCountry}>{props.tripCountry}</span>
                    <a href={props.tripGoogleMaps} className={styles.tripGoogleMaps}>View on Google Maps</a>
                </div>
                <h1 className={styles.tripName}>{props.tripName}</h1>
                <p className={styles.tripDate}>{props.tripDate}</p>
                <p className={styles.tripDescription}>{props.tripDescription}</p>
            </div>
        </div>
    )
}