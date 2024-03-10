import { NavLink, Outlet } from "react-router-dom"
import { FaUserAlt,FaServicestack,FaSwatchbook } from "react-icons/fa";

export const AdminLayout = () => {
    return(
        <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users"><FaUserAlt/>Users</NavLink></li>
                        <li><NavLink to="/admin/contacts"><FaSwatchbook/>Contacts</NavLink></li>
                        <li><NavLink to="/admin/services"><FaServicestack/>Services</NavLink></li>
                        <li>Home</li>
                    </ul>
                </nav>
            </div>
        </header>

        {/* Because of the outlet we are able to get nested panels */}
        <Outlet/>
        </>
    )
}