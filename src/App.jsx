import { useState } from 'react'
import styles from './constants/style.js'
import { Navbar,Billings,Business,Button,CardDeal,Clients,CTA,FeedbackCard,Footer,
GetStarted,Hero,Stats,Testimonials } from './Components/import.js'
function App (){
  return(
    <div className='bg-primary w-full  overflow-hidden '>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      

    </div>
  )
}


export default App
