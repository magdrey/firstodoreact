import React from 'react'
import styles from "./p1style.module.css"
import {Link} from "react-dom"
const Footer = () => {
    return (
        <footer  id ={styles.Footer}>
            <div>
                <p2><Link to='/'>social</Link>  </p2>
                <p2><Link to='/'>social2</Link>  </p2>
                <p2><Link to='/'>3social</Link>  </p2>
            </div>
            <div>
               
            </div><br/> <br/> <br /> <br/>
           
    
        </footer>
    )
}

export default Footer
