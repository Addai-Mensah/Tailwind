import React from 'react'
import {features} from "../constants"
import styles,{layout} from '../constants/style'
import Button from './Button'

const Business = () => {
    return(
        <section id="features" className={layout.section}>
            <h2 className={styles.heading2}>You do the business, 
            <br className='sm:block hidden'/>we'll handle the money.</h2>
            <p>With the right 
              credit card, you can improve your
              financial life by building credit,
              earning rewards and saving money. But with hundreds of credit cards on the
              market.</p>
        </section>
    )
}

export default Business