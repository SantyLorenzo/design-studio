import { NavLink, Outlet } from 'react-router-dom'
import './styles.css'

const Layout = () => {
    return (
        <div className='layout'>
            <section className="basic-information">
                <div className='left'>
                    <h1 className='name'>Santiago Lorenzo</h1>
                    <div className="links">
                        <NavLink to="/">Work</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </div>
                </div>
                <div className='right'>
                    <p>Deployed at 02/14/2023 12:15:54</p>
                </div>
            </section>
            <Outlet />
        </div>
    )
}

export default Layout