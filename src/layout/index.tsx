import { NavLink, Outlet } from 'react-router-dom'
import './styles.css'
import BlobScene from '../scenes/BlobScene'

const Layout = () => {
    return (
        <div className='layout'>
            <section className="basic-information">
                <div className='left'>
                    <h1>My Inspirations</h1>
                    <h3>Santiago Lorenzo</h3>
                    <div className="links">
                        <NavLink to="/">Work</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </div>
                </div>
                <div className='right'>
                    <p className='deployed-at'>Deployed at 02/14/2023 12:15:54</p>
                    <BlobScene />
                </div>
            </section>
            <Outlet />
        </div>
    )
}

export default Layout