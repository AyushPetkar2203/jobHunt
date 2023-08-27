import Wrapper from '../assets/wrappers/BigSidebar'
import { useAppContext } from '../context/appContext'
import NavLinks from './NavLinks'
import Logo from './Logo'

const BigSidebar = () => {
    const { showSidebar } = useAppContext()
    const year = new Date().getFullYear()
    return (
        <Wrapper>
            <div className={showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'}>
                <div className="content">
                    <header>
                        <Logo />
                    </header>
                    <NavLinks />
                <footer className='footer'>
                    <p>&copy; {year} Job Hunt</p>
                </footer>
                </div>
            </div>
        </Wrapper>
    )
}
export default BigSidebar