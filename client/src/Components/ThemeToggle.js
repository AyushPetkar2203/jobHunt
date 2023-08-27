import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import Wrapper from '../assets/wrappers/ThemeToggle'
import { useAppContext } from '../context/appContext'

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useAppContext()
    return (
        <Wrapper onClick={toggleDarkTheme}>
            {isDarkTheme ? <BsFillMoonFill className='toogle-icon' /> : <BsFillSunFill className='toggle-icon'/>}
        </Wrapper>
    )
}
export default ThemeToggle