import { Outlet } from "react-router-dom"
import Wrapper from "../../assets/wrappers/SharedLayout"
import { Navbar, Smallsidebar, BigSidebar } from "../../Components"

const SharedLayout = () => {

    return (
        <Wrapper>
            <main className="dashboard">
                <Smallsidebar />
                <BigSidebar />
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