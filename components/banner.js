import { useContext } from "react";
import styles from "./banner.module.css";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

//Props are read-only

export default function Banner({children}) {

  const { navigate } = useContext(navigationContext);

  // style is discorage
  return (
    <header className='row mb-4'>
        <div className='col-5'>
            <img src='./GloboLogo.png' alt='Logo' className={styles.logo}
            onClick={() => navigate(navValues.home)}/>
        </div>
        <div className='col-7 mt-5' style={{fontStyle:"italic"}}> 
            {children}
        </div>
    </header>
  )
}
