import { NavLink } from "react-router-dom" 

export const ItemNavBarHeader  = () => {
    return (
        <>
        <li><NavLink to="/"><span class="sr-only">Inicio</span></NavLink></li>
        <li><NavLink to="/profile"><span class="sr-only">Profile</span></NavLink></li>
        <li><NavLink to="studies"><span class="sr-only">Studies</span></NavLink></li>
        <li><NavLink to="/experience"><span class="sr-only">Experience</span></NavLink></li>
        <li><NavLink to="*"><span class="sr-only">Links Rotos</span></NavLink></li>

        </>
    )
}
