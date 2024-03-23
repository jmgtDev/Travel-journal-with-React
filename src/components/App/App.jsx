import styles from "./App.module.css"
import tripsData from "../../../dataBaseSim/dataBaseSim"
import Header from "../Header/Header"
import Trip from "../Trip/Trip"

export default function App(){
    const trips = tripsData.map((trip) =>{
        return(
            <Trip
                key={trip.tripId}
                {...trip}
            />
        )
    })
    return(
        <div>
            <Header/>
            <div className={styles.trips}>
                {trips}
            </div>
        </div>
    )
}