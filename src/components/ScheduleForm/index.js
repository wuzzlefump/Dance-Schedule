import * as React from 'react'
import styles from './style.module.css'
import {FormikProps} from "formik"

export default function Schedule ({student, lesson, time, values, f, parentName}){

    return(<div className={styles.card}>
        <div className={styles.cardHeader}>{time}</div>
        <input 
        placeholder={student}
        name={getName("title", parentName)}
        value={values.title}
        onChange={f.handleChange}
        onBlur={f.handleBlur}
        error={f.touched.title && f.errors.title}
        ></input>
        <textarea  
        placeholder={lesson}
        name={getName("content", parentName)}
        value={values.content}
        onChange={f.handleChange}
        onBlur={f.handleBlur}
        error={f.touched.content && f.errors.content}
        />

    </div>)
}

function getName(name, parentFieldName){
    if(parentFieldName == null){
        return name;
    }
    return parentFieldName + "." + name;
}