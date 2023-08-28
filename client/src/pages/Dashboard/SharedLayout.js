import { Outlet } from "react-router-dom"
import Wrapper from "../../assets/wrappers/SharedLayout"
import { Navbar, Smallsidebar, BigSidebar } from "../../Components"

const SharedLayout = () => {

    const year = new Date().getFullYear()

    return (
        <Wrapper>
            <main className="dashboard">
                <Smallsidebar />
                <BigSidebar />
                <footer style={{
                    position: 'fixed', bottom: 0, width: '100%', height: '60px', paddingLeft:'40px'
                }}>
                <p>&copy; {year} Job Hunt</p>
                </footer>
                <div>
                    <Navbar />
                    <div className="dashboard-page">
                        <Outlet />
                    </div>
                </div>
            </main>
        </Wrapper>
    )
}
export default SharedLayout