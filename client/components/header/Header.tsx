
import styles from '../../styles/Home.module.css'
import Login from '../login/Login';
import Image from "next/image";
import Econnect from '../e-connect/Econnect';
import { useState,useEffect } from 'react';
const Header = () => {
    const arr = [
        {
            title:"Home"
        },
        {
            title:"About us"
        },
        {
            title: "Our services"
        },
        {
            title: "Job seeker"
        },
        {
            title: "Submit CV"
        },
        {
            title: "Contact us"
        }
    ]
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            // console.log("this is height",document.documentElement.scrollTop)
            if(document.documentElement.scrollTop>0){
                setChangeHeaderBackground(true)
            }
            else{
                setChangeHeaderBackground(false)
            }
        })
    })
    const [openLoginModal,setOpenLoginModal] = useState(false)
    const [changeHeaderBackground,setChangeHeaderBackground] = useState(false)
    return (
        <>
        <div  className={styles.container} >
<div
style={{backgroundColor:changeHeaderBackground ? 'white' : '',borderBottom:changeHeaderBackground?'1px solid #f1613a':''}}

className={styles.header} >
<ul className={styles.navigationItems}>
    {
        arr.map((ele,id)=>(
<li 
onClick={()=>{
    id==3 && 
    setOpenLoginModal(true)
}}
style={{color:changeHeaderBackground?'black':'white'}}  className={`${styles.listItem} ${id==3 ? styles.jobseeker:''} `} >{ele.title}</li>
        ))
    }
</ul>
</div>
<div className={styles.services} >
<div className={styles.logoDiv} >
<img className={styles.logo}  src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png" />
<div className={styles.letsdiscussDiv} >
<h1>
    <span style={{color:'#f1613a',fontSize:"2.7rem"}} >
        Female
    </span>
    <span style={{color:'white',fontSize:"2.7rem",marginLeft:"0.5rem"}}>
        Fashion sales begins
    </span>
</h1>
<p style={{color:"#fff",fontSize:"1.5rem"}} >
    branded clothing and appearels
</p>
<button  className={styles.letsdiscuss} >
Shop Now
</button>
</div>

</div>
</div>
</div>

       {            openLoginModal &&
       <>
       <Econnect/>
{/* <Login openLoginModal={openLoginModal} setOpenLoginModal={setOpenLoginModal} /> */}
</>

}
        </>
    )
}
export default Header