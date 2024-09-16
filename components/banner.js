import styles from "./banner.module.css";

//Props are read-only

export default function Banner({children}) {
  // style is discorage
  return (
    <header className='row mb-4'>
        <div className='col-5'>
            <img src='./GloboLogo.png' alt='Logo' className={styles.logo}/>
        </div>
        <div className='col-7 mt-5' style={{fontStyle:"italic"}}> 
            {children}
        </div>
    </header>
  )
}
