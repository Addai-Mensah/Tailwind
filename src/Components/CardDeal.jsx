import React from 'react'
import {card} from "../assets"
import styles, {layout} from '../constants/style'
import Button from './Button'

const CardDeal = () => {
    return(
        <section className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Find a better card deal <br className='sm:block hidden'/>
                    in few easy steps
                </h2>

                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing 
                    elit. Possimus quasi sit numquam modi  deserunt
                     sapiente harum minima consequuntur ex! natus
                </p>

                <Button styles="mt-10"/>
            </div>
        </section>
    )
}

export default CardDeal