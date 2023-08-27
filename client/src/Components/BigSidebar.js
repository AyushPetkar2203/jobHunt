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
                </div>
                
                <footer style={{
                    position: 'absolute', bottom: 0, width: '100%', height: '60px', paddingLeft:'40px'
                }}>
                <p>&copy; {year} Job Hunt</p>
                </footer>
                {/* <p>Text for footer check</p> */}
            </div>
        </Wrapper >
    )
}
export default BigSidebar