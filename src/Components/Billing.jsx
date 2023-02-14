import React from 'react'
import {apple,bill,google} from "../assets"
import styles from '../constants/style'
import layout from "../constants/style"
const Billings = () => {
    return(
        <section id='product' className={layout.sectionReverse} >
        <div className={layout.sectionReverse} >
            
                <img src={bill} alt="billing"  className='w-[100%] h-[100%] relative z-[5]'/>
                <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
                <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
             
            </div>
           
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Easily control your <br className='sm:block hidden'/>
                     billing & invoice.</h2>

                <p className={`${styles.paragraph} max-w-[470px] mt-5 px-6`}> 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam aut
                veritatis qui dicta delectus eum quam, rem ducimus temporibus quod?
                </p>  
                <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                    <img src={apple} alt="apple_store"
                     className='w-[128xp] h-[48px] object-contain
                      mr-5 cursor-pointer'/>

                     <img src={google} alt="google_play"
                     className='w-[128xp] h-[48px] object-contain
                       cursor-pointer'/>
                </div>
            </div>
        </section>
    )
}

export default Billings