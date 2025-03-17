import { ItemNavBarHeader } from "../../UI/ItemNavBar/ItemNavBarHeader/ItemNavBarHeader"
import './NavBar.css'

export const NavBar = () => {
   return(
       <nav className="header-nav">
           <ul className="nav-menu">
               <ItemNavBarHeader />
           </ul>
       </nav>
   )
}