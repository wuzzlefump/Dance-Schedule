import * as React from 'react'
import styles from './style.module.css'
import MyClock from '../Clock/index'

export default function Layout (props){

    return(<> 
        <nav className={styles.layoutNav}>
        <MyClock/>
        </nav>
        <main className={styles.layoutSchedule}>
            <h1>Daily Work Schedule</h1>
            <div className={styles.schedule}>
                {props.children}
            </div>
        </main></>)
}