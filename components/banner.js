import styles from "./banner.module.css";

export default function Banner() {
  return (
    <header className='row mb-4'>
        <div className='col-5'>
            <img src='./GloboLogo.png' alt='Logo' className={styles.logo}/>
        </div>
        <div className='col-7 mt-5' style={{fontStyle:"italic"}}> /* style is discorage */ 
            Provinding header text
        </div>
    </header>
  )
}
