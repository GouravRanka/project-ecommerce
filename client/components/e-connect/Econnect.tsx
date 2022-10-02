import React, { useEffect } from 'react'
import styles from '../../styles/Econnect.module.css'
export default function Econnect() {
  useEffect(()=>{
console.log("aghbjkl;l'")
  },[])
  
  return (
    <>



    <div className={styles.header} >
<h1 style={{fontSize:"2rem",color:'white'}} >
  SIMS
</h1>

    </div>
    <div  className={styles.banner} >
<div className={styles.buttons} >
  <button className={styles.button} >
Allotte Login
  </button>
  <button className={styles.button} >
Employee Login
  </button>
  <button className={styles.button} >
Allotte Registration
  </button>
</div>
<div className={styles.vision}>
<div className={styles.visionData} >
<p>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 
</p>
</div>
</div>
    </div>


    {/* <div className={styles.container} >
     <div className={styles.image} >

     </div>
     <div className={styles.inputs} >
      <img style={{objectFit:"contain"}} width="150px" height="150px" src="https://psiec.punjab.gov.in/wp-content/uploads/2022/04/logo.png" />

      <h1 className={styles.employeeLogin} >
        Employee Login
      </h1>
  
        <input className={styles.input} type="text" placeholder='Enter user Id'  />
<br/>
     
        <input className={styles.input} type="text" placeholder='Enter passwords'  />
        <br/>
        
        <button className={styles.login} >
          Login
        </button>
  

     </div>
    </div> */}
    <div className={styles.visionContainer} >
{
  [0,1,2].map(()=>(
    <div className={styles.divs} >
      <h1 style={{color:"#358497",fontWeight:"bolder"}} >
        Vision of SIMS
      </h1>
<p>
  riytugyihjerigjgtojdfigjdfoigsjfogjsdfogjdfogfoigContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
</p>
      </div>
  ))
}
</div>
    <div className={styles.footerContainer} >
{
  [0,1,2,4].map(()=>(
    <div className={styles.footerDivs} >
      <h1 style={{color:"WHITE",fontWeight:"bolder"}} >
        Vision of SIMS
      </h1>
<p  style={{color:"WHITE",}} >
18-Himalya Marg, Udyog
Bhawan, Sector 17A, Chandi-
garh - 160017
</p>
      </div>
  ))
}
</div>


    </>
  )
}
