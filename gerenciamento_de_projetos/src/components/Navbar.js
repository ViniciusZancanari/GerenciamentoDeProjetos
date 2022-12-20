import { FaCoins } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {Link} from 'react-router-dom'
import styles from './Header.module.css'
function Hearder (){

    return(

        <div>
                <IconContext.Provider value={{ color: "yellow"}} className= {styles.HearderIcon}>
                    <FaCoins/>
                </IconContext.Provider>
            <ul className= {styles.HearderMenu}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to ='/empresa'>Empresa</Link>
                </li>
                <li>
                    <Link to = '/projetos'>Projetos</Link>
                </li>
                <li>
                    <Link to = '/contato'>Contatos</Link>
                </li>
            </ul>
        </div>
        
    )
}
export default Hearder;